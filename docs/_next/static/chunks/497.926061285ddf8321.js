'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [497],
  {
    2497: (e, t, r) => {
      (r.r(t), r.d(t, { default: () => f }));
      var l = r(5640),
        a = r(9964),
        n = r(1536),
        s = r(6017),
        i = r(148),
        c = r(827),
        o = r(9423),
        d = r(9611),
        u = r(7057),
        h = r.n(u);
      let x = () =>
        (0, l.jsx)('header', {
          className: 'w-full bg-white',
          children: (0, l.jsxs)('div', {
            className: 'mx-auto flex max-w-7xl items-center justify-between px-6 py-4',
            children: [
              (0, l.jsx)('h1', { className: 'text-xl font-bold text-gray-900', children: 'PDF Redactor' }),
              (0, l.jsx)('nav', {
                className: 'space-x-4 text-sm font-medium text-gray-600',
                children: (0, l.jsx)(h(), {
                  href: 'https://github.com/hieudoanm/redact',
                  target: '_blank',
                  className: 'hover:text-black',
                  children: 'GitHub',
                }),
              }),
            ],
          }),
        });
      c.EA.workerSrc = ''.concat('/redact', '/workers/pdf.worker.min.js');
      let f = () => {
        let [{ redactions: e = {}, redoStack: t = {}, file: r = null, numberOfPages: c = 0, scale: u = 1.5 }, h] = (0,
          i.useState)({ redactions: {}, redoStack: {}, file: null, numberOfPages: 0, scale: 1.5 }),
          f = (0, i.useRef)({}),
          g = async () => {
            if (!r) return;
            let t = await r.arrayBuffer(),
              l = await s.PDFDocument.load(t);
            Object.entries(e).forEach((e) => {
              let [t, r] = e,
                a = Number(t),
                n = l.getPage(a);
              r.forEach((e) => {
                let { x: t, y: r, width: l, height: a } = e;
                n.drawRectangle({ x: t, y: n.getHeight() - r - a, width: l, height: a, color: (0, s.rgb)(0, 0, 0) });
              });
            });
            let a = (await l.save()).slice().buffer;
            (0, n.saveAs)(new Blob([a], { type: 'application/pdf' }), 'redacted.pdf');
          },
          p = (e, t) => {
            let r;
            if (!e || f.current[t]) return;
            let l = new a.Hl(e, { selection: !1, renderOnAddRemove: !0 });
            (l.setDimensions({ width: e.width, height: e.height }), (f.current[t] = l));
            let n = !1,
              s = 0,
              i = 0;
            (l.on('mouse:down', (e) => {
              n = !0;
              let t = l.getViewportPoint(e.e);
              ((s = t.x),
                (i = t.y),
                (r = new a.rw({ left: s, top: i, fill: 'black', width: 0, height: 0, selectable: !1 })),
                l.add(r));
            }),
              l.on('mouse:move', (e) => {
                if (!n) return;
                let t = l.getViewportPoint(e.e);
                (r.set({ width: t.x - s, height: t.y - i }), l.renderAll());
              }),
              l.on('mouse:up', () => {
                n = !1;
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
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(x, {}),
            (0, l.jsx)('div', { className: 'w-full border-t border-gray-200' }),
            (0, l.jsx)('section', {
              className: 'w-full py-20',
              children: (0, l.jsxs)('div', {
                className: 'mx-auto max-w-3xl px-4 text-center sm:px-6',
                children: [
                  (0, l.jsx)('h2', {
                    className: 'text-4xl font-extrabold text-gray-900 sm:text-5xl',
                    children: 'Redact PDFs with Precision',
                  }),
                  (0, l.jsx)('p', {
                    className: 'mt-6 text-lg text-gray-600',
                    children:
                      'Select text areas to black out and export secure, sanitized PDF files—right from your browser.',
                  }),
                  (0, l.jsxs)('div', {
                    className: 'mt-8 flex justify-center gap-4',
                    children: [
                      (0, l.jsxs)('label', {
                        className:
                          'inline-block cursor-pointer rounded-full bg-black px-6 py-3 text-white transition hover:bg-gray-800',
                        children: [
                          (0, l.jsx)('span', { children: 'Upload PDF' }),
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
                      r &&
                        (0, l.jsx)('button', {
                          onClick: g,
                          className:
                            'rounded-full border border-gray-900 px-6 py-3 text-gray-900 transition hover:bg-gray-900 hover:text-white',
                          children: 'Export Redacted PDF',
                        }),
                    ],
                  }),
                ],
              }),
            }),
            (0, l.jsx)('div', { className: 'w-full border-t border-gray-200' }),
            (0, l.jsx)('div', {
              className: 'container mx-auto flex flex-col gap-y-8 p-8',
              children:
                r &&
                (0, l.jsxs)('div', {
                  className: 'flex flex-col gap-y-8',
                  children: [
                    (0, l.jsxs)('div', {
                      className: 'grid grid-cols-2 gap-8',
                      children: [
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
                              a = f.current[l];
                            if (!a) return;
                            let n = a.getObjects('rect');
                            if (n.length > 0) {
                              let e = n[n.length - 1];
                              (a.remove(e), a.renderAll());
                            }
                            h((e) => {
                              var t, r;
                              let a = [...(null != (t = e.redactions[l]) ? t : [])],
                                n = a.pop();
                              return n
                                ? {
                                    ...e,
                                    redactions: { ...e.redactions, [l]: a },
                                    redoStack: { ...e.redoStack, [l]: [...(null != (r = e.redoStack[l]) ? r : []), n] },
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
                              n = Number(l),
                              s = f.current[n];
                            if (!s) return;
                            let i = [...(null != (e = t[n]) ? e : [])],
                              c = i.pop();
                            if (!c) return;
                            let o = new a.rw({
                              left: c.x * u,
                              top: c.y * u,
                              width: c.width * u,
                              height: c.height * u,
                              fill: 'black',
                              selectable: !1,
                            });
                            (s.add(o),
                              s.renderAll(),
                              h((e) => {
                                var t;
                                return {
                                  ...e,
                                  redactions: {
                                    ...e.redactions,
                                    [n]: [...(null != (t = e.redactions[n]) ? t : []), c],
                                  },
                                  redoStack: { ...e.redoStack, [n]: i },
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
                        children: (0, l.jsx)(o.A, {
                          file: r,
                          onLoadSuccess: (e) => {
                            let { numPages: t } = e;
                            return h((e) => ({ ...e, numberOfPages: t }));
                          },
                          children: Array.from({ length: c }, (e, t) =>
                            (0, l.jsxs)(
                              'div',
                              {
                                className: 'relative',
                                children: [
                                  (0, l.jsx)(d.A, {
                                    pageNumber: t + 1,
                                    scale: u,
                                    renderAnnotationLayer: !1,
                                    renderTextLayer: !1,
                                  }),
                                  (0, l.jsx)('canvas', {
                                    id: 'canvas-'.concat(t),
                                    ref: (e) => p(e, t),
                                    width: 794 * u,
                                    height: 1123 * u,
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
            }),
          ],
        });
      };
    },
  },
]);
