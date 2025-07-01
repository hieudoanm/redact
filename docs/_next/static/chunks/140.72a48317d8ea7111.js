'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [140],
  {
    2140: (e, t, l) => {
      (l.r(t), l.d(t, { default: () => u }));
      var r = l(5640),
        a = l(9964),
        n = l(1536),
        s = l(6017),
        i = l(148),
        o = l(827),
        c = l(9423),
        d = l(9611);
      o.EA.workerSrc = ''.concat('/redact', '/workers/pdf.worker.min.js');
      let u = () => {
        let [{ file: e = null, numberOfPages: t = 0, scale: l = 1.5 }, o] = (0, i.useState)({
            file: null,
            numberOfPages: 0,
            scale: 1.5,
          }),
          [u, h] = (0, i.useState)({}),
          f = (0, i.useRef)({}),
          p = async () => {
            if (!e) return;
            let t = await e.arrayBuffer(),
              l = await s.PDFDocument.load(t);
            Object.entries(u).forEach((e) => {
              let [t, r] = e,
                a = Number(t),
                n = l.getPage(a);
              r.forEach((e) => {
                let { x: t, y: l, width: r, height: a } = e;
                n.drawRectangle({ x: t, y: n.getHeight() - l - a, width: r, height: a, color: (0, s.rgb)(0, 0, 0) });
              });
            });
            let r = (await l.save()).slice().buffer;
            (0, n.saveAs)(new Blob([r], { type: 'application/pdf' }), 'redacted.pdf');
          },
          x = (e, t) => {
            let r;
            if (!e || f.current[t]) return;
            let n = new a.Hl(e, { selection: !1, renderOnAddRemove: !0 });
            (n.setDimensions({ width: e.width, height: e.height }), (f.current[t] = n));
            let s = !1,
              i = 0,
              o = 0;
            (n.on('mouse:down', (e) => {
              s = !0;
              let t = n.getViewportPoint(e.e);
              ((i = t.x),
                (o = t.y),
                (r = new a.rw({ left: i, top: o, fill: 'black', width: 0, height: 0, selectable: !1 })),
                n.add(r));
            }),
              n.on('mouse:move', (e) => {
                if (!s) return;
                let t = n.getViewportPoint(e.e);
                (r.set({ width: t.x - i, height: t.y - o }), n.renderAll());
              }),
              n.on('mouse:up', () => {
                s = !1;
                let e = { x: r.left / l, y: r.top / l, width: r.width / l, height: r.height / l };
                h((l) => ({ ...l, [t]: [...(l[t] || []), e] }));
              }));
          };
        return (0, r.jsxs)('div', {
          className: 'container mx-auto flex flex-col gap-y-8 p-8',
          children: [
            (0, r.jsxs)('div', {
              className: 'flex flex-col gap-y-8',
              children: [
                (0, r.jsx)('h1', {
                  className: 'text-center text-3xl md:text-4xl',
                  children: '\uD83D\uDCC4 PDF Redactor',
                }),
                (0, r.jsxs)('label', {
                  className:
                    'block cursor-pointer rounded-md border-2 border-dashed border-gray-400 p-8 text-center transition hover:border-blue-500',
                  children: [
                    (0, r.jsx)('span', { className: 'text-gray-600', children: '\uD83D\uDCC1 Click to upload PDF' }),
                    (0, r.jsx)('input', {
                      type: 'file',
                      accept: 'application/pdf',
                      onChange: (e) => {
                        var t;
                        let l = null == (t = e.target.files) ? void 0 : t[0];
                        l && (o((e) => ({ ...e, file: l })), h({}));
                      },
                      className: 'hidden',
                    }),
                  ],
                }),
              ],
            }),
            e &&
              (0, r.jsxs)('div', {
                className: 'flex flex-col gap-y-8',
                children: [
                  (0, r.jsxs)('div', {
                    className: 'grid grid-cols-2 gap-8',
                    children: [
                      (0, r.jsx)('div', {
                        className: 'col-span-1',
                        children: (0, r.jsx)('button', {
                          type: 'button',
                          onClick: p,
                          className: 'w-full cursor-pointer rounded-full bg-neutral-900 px-4 py-2 text-neutral-100',
                          children: 'Export Redacted PDF',
                        }),
                      }),
                      (0, r.jsx)('div', {
                        className: 'col-span-1',
                        children: (0, r.jsx)('button', {
                          type: 'button',
                          onClick: () => {
                            let e = Object.entries(u).filter((e) => {
                              let [, t] = e;
                              return t.length > 0;
                            });
                            if (0 === e.length) return;
                            let [t] = e[e.length - 1],
                              l = Number(t),
                              r = f.current[l];
                            if (!r) return;
                            let a = r.getObjects('rect');
                            if (a.length > 0) {
                              let e = a[a.length - 1];
                              (r.remove(e), r.renderAll());
                            }
                            h((e) => {
                              let t = [...(e[l] || [])];
                              return (t.pop(), { ...e, [l]: t });
                            });
                          },
                          className: 'w-full cursor-pointer rounded-full bg-neutral-900 px-4 py-2 text-neutral-100',
                          children: 'Undo Last Redaction',
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)('div', {
                    className: 'w-full overflow-hidden rounded-xl border border-neutral-200',
                    children: (0, r.jsx)('div', {
                      className: 'w-full overflow-auto',
                      children: (0, r.jsx)(c.A, {
                        file: e,
                        onLoadSuccess: (e) => {
                          let { numPages: t } = e;
                          return o((e) => ({ ...e, numberOfPages: t }));
                        },
                        children: Array.from({ length: t }, (e, t) =>
                          (0, r.jsxs)(
                            'div',
                            {
                              className: 'relative',
                              children: [
                                (0, r.jsx)(d.A, {
                                  pageNumber: t + 1,
                                  scale: l,
                                  renderAnnotationLayer: !1,
                                  renderTextLayer: !1,
                                }),
                                (0, r.jsx)('canvas', {
                                  id: 'canvas-'.concat(t),
                                  ref: (e) => x(e, t),
                                  width: 612 * l,
                                  height: 792 * l,
                                  className: 'pointer-events-auto absolute top-0 left-0 z-10',
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
