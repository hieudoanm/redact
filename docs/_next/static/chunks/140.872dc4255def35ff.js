'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [140],
  {
    2140: (e, t, r) => {
      (r.r(t), r.d(t, { default: () => u }));
      var l = r(5640),
        n = r(9964),
        a = r(1536),
        o = r(6017),
        s = r(148),
        d = r(827),
        c = r(9423),
        i = r(9611);
      d.EA.workerSrc = ''.concat('/redact', '/workers/pdf.worker.min.js');
      let u = () => {
        let [{ redactions: e = {}, redoStack: t = {}, file: r = null, numberOfPages: d = 0, scale: u = 1.5 }, h] = (0,
          s.useState)({ redactions: {}, redoStack: {}, file: null, numberOfPages: 0, scale: 1.5 }),
          f = (0, s.useRef)({}),
          p = async () => {
            if (!r) return;
            let t = await r.arrayBuffer(),
              l = await o.PDFDocument.load(t);
            Object.entries(e).forEach((e) => {
              let [t, r] = e,
                n = Number(t),
                a = l.getPage(n);
              r.forEach((e) => {
                let { x: t, y: r, width: l, height: n } = e;
                a.drawRectangle({ x: t, y: a.getHeight() - r - n, width: l, height: n, color: (0, o.rgb)(0, 0, 0) });
              });
            });
            let n = (await l.save()).slice().buffer;
            (0, a.saveAs)(new Blob([n], { type: 'application/pdf' }), 'redacted.pdf');
          },
          x = (e, t) => {
            let r;
            if (!e || f.current[t]) return;
            let l = new n.Hl(e, { selection: !1, renderOnAddRemove: !0 });
            (l.setDimensions({ width: e.width, height: e.height }), (f.current[t] = l));
            let a = !1,
              o = 0,
              s = 0;
            (l.on('mouse:down', (e) => {
              a = !0;
              let t = l.getViewportPoint(e.e);
              ((o = t.x),
                (s = t.y),
                (r = new n.rw({ left: o, top: s, fill: 'black', width: 0, height: 0, selectable: !1 })),
                l.add(r));
            }),
              l.on('mouse:move', (e) => {
                if (!a) return;
                let t = l.getViewportPoint(e.e);
                (r.set({ width: t.x - o, height: t.y - s }), l.renderAll());
              }),
              l.on('mouse:up', () => {
                a = !1;
                let e = { x: r.left / u, y: r.top / u, width: r.width / u, height: r.height / u };
                h((r) => {
                  var l;
                  return {
                    ...r,
                    redactions: { ...r.redactions, [t]: [...(null != (l = r.redactions[t]) ? l : []), e] },
                    redoStack: { ...r.redoStack, [t]: [] },
                  };
                });
              }));
          };
        return (0, l.jsxs)('div', {
          className: 'container mx-auto flex flex-col gap-y-8 p-8',
          children: [
            (0, l.jsxs)('div', {
              className: 'flex flex-col gap-y-8',
              children: [
                (0, l.jsx)('h1', {
                  className: 'text-center text-3xl md:text-4xl',
                  children: '\uD83D\uDCC4 PDF Redactor',
                }),
                (0, l.jsxs)('label', {
                  className:
                    'block cursor-pointer rounded-md border-2 border-dashed border-gray-400 p-8 text-center transition hover:border-blue-500',
                  children: [
                    (0, l.jsx)('span', { className: 'text-gray-600', children: '\uD83D\uDCC1 Click to upload PDF' }),
                    (0, l.jsx)('input', {
                      type: 'file',
                      accept: 'application/pdf',
                      onChange: (e) => {
                        var t;
                        let r = null == (t = e.target.files) ? void 0 : t[0];
                        r && h((e) => ({ ...e, file: r, redactions: {}, redoStack: {} }));
                      },
                      className: 'hidden',
                    }),
                  ],
                }),
              ],
            }),
            r &&
              (0, l.jsxs)('div', {
                className: 'flex flex-col gap-y-8',
                children: [
                  (0, l.jsxs)('div', {
                    className: 'grid grid-cols-3 gap-8',
                    children: [
                      (0, l.jsx)('button', {
                        type: 'button',
                        onClick: p,
                        className: 'w-full cursor-pointer rounded-full bg-neutral-900 px-4 py-2 text-neutral-100',
                        children: 'Export Redacted PDF',
                      }),
                      (0, l.jsx)('button', {
                        type: 'button',
                        onClick: () => {
                          let t = Object.entries(e).filter((e) => {
                            let [, t] = e;
                            return t.length > 0;
                          });
                          if (0 === t.length) return;
                          let [r] = t[t.length - 1],
                            l = Number(r),
                            n = f.current[l];
                          if (!n) return;
                          let a = n.getObjects('rect');
                          if (a.length > 0) {
                            let e = a[a.length - 1];
                            (n.remove(e), n.renderAll());
                          }
                          h((e) => {
                            var t, r;
                            let n = [...(null != (t = e.redactions[l]) ? t : [])],
                              a = n.pop();
                            return a
                              ? {
                                  ...e,
                                  redactions: { ...e.redactions, [l]: n },
                                  redoStack: { ...e.redoStack, [l]: [...(null != (r = e.redoStack[l]) ? r : []), a] },
                                }
                              : e;
                          });
                        },
                        className: 'w-full cursor-pointer rounded-full bg-neutral-900 px-4 py-2 text-neutral-100',
                        children: 'Undo Last Redaction',
                      }),
                      (0, l.jsx)('button', {
                        type: 'button',
                        onClick: () => {
                          var e;
                          let r = Object.entries(t).filter((e) => {
                            let [, t] = e;
                            return t.length > 0;
                          });
                          if (0 === r.length) return;
                          let [l] = r[r.length - 1],
                            a = Number(l),
                            o = f.current[a];
                          if (!o) return;
                          let s = [...(null != (e = t[a]) ? e : [])],
                            d = s.pop();
                          if (!d) return;
                          let c = new n.rw({
                            left: d.x * u,
                            top: d.y * u,
                            width: d.width * u,
                            height: d.height * u,
                            fill: 'black',
                            selectable: !1,
                          });
                          (o.add(c),
                            o.renderAll(),
                            h((e) => {
                              var t;
                              return {
                                ...e,
                                redactions: { ...e.redactions, [a]: [...(null != (t = e.redactions[a]) ? t : []), d] },
                                redoStack: { ...e.redoStack, [a]: s },
                              };
                            }));
                        },
                        className: 'w-full cursor-pointer rounded-full bg-neutral-900 px-4 py-2 text-neutral-100',
                        children: 'Redo Last Redaction',
                      }),
                    ],
                  }),
                  (0, l.jsx)('div', {
                    className: 'w-full overflow-hidden rounded-xl border border-neutral-200 shadow-2xl',
                    children: (0, l.jsx)('div', {
                      className: 'w-full overflow-auto',
                      children: (0, l.jsx)(c.A, {
                        file: r,
                        onLoadSuccess: (e) => {
                          let { numPages: t } = e;
                          return h((e) => ({ ...e, numberOfPages: t }));
                        },
                        children: Array.from({ length: d }, (e, t) =>
                          (0, l.jsxs)(
                            'div',
                            {
                              className: 'relative',
                              children: [
                                (0, l.jsx)(i.A, {
                                  pageNumber: t + 1,
                                  scale: u,
                                  renderAnnotationLayer: !1,
                                  renderTextLayer: !1,
                                }),
                                (0, l.jsx)('canvas', {
                                  id: 'canvas-'.concat(t),
                                  ref: (e) => x(e, t),
                                  className: 'pointer-events-auto absolute top-0 left-0 z-10 h-full w-full',
                                }),
                              ],
                            },
                            t,
                          ),
                        ),
                      }),
                    }),
                  }),
                ],
              }),
          ],
        });
      };
    },
  },
]);
