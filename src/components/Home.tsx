import * as fabric from 'fabric';
import { saveAs } from 'file-saver';
import { PDFDocument, rgb } from 'pdf-lib';
import { FC, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

const NODE_ENV: 'development' | 'production' | 'test' = process.env.NODE_ENV ?? 'development';
const BASE_PATH: string = NODE_ENV === 'development' ? '' : '/redact';

pdfjs.GlobalWorkerOptions.workerSrc = `${BASE_PATH}/workers/pdf.worker.min.js`;

type RedactionBox = { x: number; y: number; width: number; height: number };
// type aliases
type FabricCanvas = fabric.Canvas;

const Home: FC = () => {
  const [{ file = null, numberOfPages = 0, scale = 1.5 }, setState] = useState<{
    file: File | null;
    numberOfPages: number;
    scale: number;
  }>({
    file: null,
    numberOfPages: 0,
    scale: 1.5,
  });
  const [redactions, setRedactions] = useState<Record<number, RedactionBox[]>>({});
  const canvasRefs = useRef<Record<number, FabricCanvas>>({});

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) {
      setState((previous) => ({ ...previous, file: f }));
      setRedactions({});
    }
  };

  const handleExport = async () => {
    if (!file) return;
    const buffer = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(buffer);

    Object.entries(redactions).forEach(([pageIndexStr, boxes]) => {
      const pageIndex = Number(pageIndexStr);
      const page = pdfDoc.getPage(pageIndex);
      boxes.forEach(({ x, y, width, height }) => {
        page.drawRectangle({
          x,
          y: page.getHeight() - y - height,
          width,
          height,
          color: rgb(0, 0, 0),
        });
      });
    });

    const modifiedBytes: Uint8Array<ArrayBufferLike> = await pdfDoc.save();
    const arrayBuffer = modifiedBytes.slice().buffer; // slice ensures it's a true ArrayBuffer
    saveAs(new Blob([arrayBuffer], { type: 'application/pdf' }), 'redacted.pdf');
  };

  const initFabric = (el: HTMLCanvasElement | null, pageIndex: number) => {
    if (!el || canvasRefs.current[pageIndex]) return;

    const canvas = new fabric.Canvas(el, {
      selection: false,
      renderOnAddRemove: true,
    });
    canvas.setDimensions({ width: el.width, height: el.height });
    canvasRefs.current[pageIndex] = canvas;

    let isDown = false;
    let rect: fabric.Rect;
    let origX = 0;
    let origY = 0;

    canvas.on('mouse:down', (o) => {
      isDown = true;
      const pointer = canvas.getViewportPoint(o.e);
      origX = pointer.x;
      origY = pointer.y;
      rect = new fabric.Rect({
        left: origX,
        top: origY,
        fill: 'black',
        width: 0,
        height: 0,
        selectable: false,
      });
      canvas.add(rect);
    });

    canvas.on('mouse:move', (o) => {
      if (!isDown) return;
      const pointer = canvas.getViewportPoint(o.e);
      rect.set({
        width: pointer.x - origX,
        height: pointer.y - origY,
      });
      canvas.renderAll();
    });

    canvas.on('mouse:up', () => {
      isDown = false;
      const box: RedactionBox = {
        x: rect.left / scale,
        y: rect.top / scale,
        width: rect.width / scale,
        height: rect.height / scale,
      };
      setRedactions((prev) => ({
        ...prev,
        [pageIndex]: [...(prev[pageIndex] || []), box],
      }));
    });
  };

  const handleUndo = () => {
    // Find the last page with redactions
    const pagesWithRedactions = Object.entries(redactions).filter(([, boxes]) => boxes.length > 0);
    if (pagesWithRedactions.length === 0) return;

    // Get the latest edited page
    const [lastPageStr] = pagesWithRedactions[pagesWithRedactions.length - 1];
    const pageIndex = Number(lastPageStr);
    const canvas = canvasRefs.current[pageIndex];
    if (!canvas) return;

    // Remove last fabric.Rect from canvas
    const objects = canvas.getObjects('rect');
    if (objects.length > 0) {
      const lastRect = objects[objects.length - 1];
      canvas.remove(lastRect);
      canvas.renderAll();
    }

    // Update redactions state
    setRedactions((prev) => {
      const updated = [...(prev[pageIndex] || [])];
      updated.pop();
      return { ...prev, [pageIndex]: updated };
    });
  };

  return (
    <div className="container mx-auto flex flex-col gap-y-8 p-8">
      <div className="flex flex-col gap-y-8">
        <h1 className="text-center text-3xl md:text-4xl">📄 PDF Redactor</h1>
        <label className="block cursor-pointer rounded-md border-2 border-dashed border-gray-400 p-8 text-center transition hover:border-blue-500">
          <span className="text-gray-600">📁 Click to upload PDF</span>
          <input type="file" accept="application/pdf" onChange={handleFile} className="hidden" />
        </label>
      </div>
      {file && (
        <div className="flex flex-col gap-y-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-1">
              <button
                type="button"
                onClick={handleExport}
                className="w-full cursor-pointer rounded-full bg-neutral-900 px-4 py-2 text-neutral-100">
                Export Redacted PDF
              </button>
            </div>
            <div className="col-span-1">
              <button
                type="button"
                onClick={handleUndo}
                className="w-full cursor-pointer rounded-full bg-neutral-900 px-4 py-2 text-neutral-100">
                Undo Last Redaction
              </button>
            </div>
          </div>
          <div className="w-full overflow-hidden rounded-xl border border-neutral-200">
            <div className="w-full overflow-auto">
              <Document
                file={file}
                onLoadSuccess={({ numPages: numberOfPages }) =>
                  setState((previous) => ({ ...previous, numberOfPages }))
                }>
                {Array.from({ length: numberOfPages }, (_, i) => (
                  <div key={i} className="relative">
                    <Page pageNumber={i + 1} scale={scale} renderAnnotationLayer={false} renderTextLayer={false} />
                    <canvas
                      id={`canvas-${i}`}
                      ref={(el) => initFabric(el, i)}
                      width={612 * scale}
                      height={792 * scale}
                      className="pointer-events-auto absolute top-0 left-0 z-10"
                    />
                  </div>
                ))}
              </Document>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
