'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [547],
  {
    547: (e, t, r) => {
      (r.r(t), r.d(t, { default: () => b }));
      var l = r(5640),
        s = r(9964),
        a = r(1536),
        n = r(6017),
        i = r(148),
        o = r(827),
        d = r(9423),
        c = r(9611);
      let u = () =>
        (0, l.jsx)('section', {
          className: 'py-16',
          children: (0, l.jsxs)('div', {
            className: 'mx-auto max-w-6xl px-6 text-center',
            children: [
              (0, l.jsx)('h3', { className: 'text-3xl font-semibold sm:text-4xl', children: 'Why Use Our Redactor?' }),
              (0, l.jsx)('p', {
                className: 'mx-auto mt-4 max-w-2xl text-neutral-500',
                children:
                  'Easily blackout sensitive information from your PDF documents. No uploads. No server. Just privacy.',
              }),
              (0, l.jsxs)('div', {
                className: 'mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3',
                children: [
                  (0, l.jsxs)('div', {
                    className: 'rounded-xl border border-neutral-800 p-6 shadow-sm',
                    children: [
                      (0, l.jsx)('h4', { className: 'text-lg font-semibold', children: '\uD83D\uDEE1️ Privacy-First' }),
                      (0, l.jsx)('p', {
                        className: 'mt-2 text-sm text-neutral-500',
                        children: 'Everything runs in your browser. Your files never leave your device.',
                      }),
                    ],
                  }),
                  (0, l.jsxs)('div', {
                    className: 'rounded-xl border border-neutral-800 p-6 shadow-sm',
                    children: [
                      (0, l.jsx)('h4', { className: 'text-lg font-semibold', children: '\uD83D\uDCE6 Easy Export' }),
                      (0, l.jsx)('p', {
                        className: 'mt-2 text-sm text-neutral-500',
                        children: 'One click to save your redacted PDF. No sign-up or install required.',
                      }),
                    ],
                  }),
                  (0, l.jsxs)('div', {
                    className: 'rounded-xl border border-neutral-800 p-6 shadow-sm',
                    children: [
                      (0, l.jsx)('h4', {
                        className: 'text-lg font-semibold',
                        children: '\uD83C\uDFAF Precise Control',
                      }),
                      (0, l.jsx)('p', {
                        className: 'mt-2 text-sm text-neutral-500',
                        children: 'Draw exact black boxes where you want them with pixel precision.',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      var x = r(2635),
        h = r(7864),
        m = r.n(h);
      let p = () =>
          (0, l.jsx)('header', {
            className: 'w-full',
            children: (0, l.jsxs)('div', {
              className: 'mx-auto flex max-w-7xl items-center justify-between px-6 py-4',
              children: [
                (0, l.jsx)('h1', { className: 'text-xl font-bold', children: x.C }),
                (0, l.jsx)('nav', {
                  className: 'space-x-4 text-sm font-medium text-neutral-500',
                  children: (0, l.jsx)(m(), {
                    href: 'https://github.com/hieudoanm/redact',
                    target: '_blank',
                    className: 'hover:text-black',
                    children: 'GitHub',
                  }),
                }),
              ],
            }),
          }),
        f = () =>
          (0, l.jsx)('footer', {
            className: 'w-full border-t border-neutral-800 py-8',
            children: (0, l.jsxs)('div', {
              className:
                'mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-sm text-neutral-500 sm:flex-row',
              children: [
                (0, l.jsxs)('p', { children: ['\xa9 ', new Date().getFullYear(), ' ', x.C, '. All rights reserved.'] }),
                (0, l.jsx)('div', {
                  className: 'space-x-4',
                  children: (0, l.jsx)(m(), {
                    href: 'https://github.com/hieudoanm/redact',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'hover:underline',
                    children: 'GitHub',
                  }),
                }),
              ],
            }),
          });
      o.EA.workerSrc = ''.concat('/redact', '/workers/pdf.worker.min.js');
      let b = () => {
        let [{ redactions: e = {}, redoStack: t = {}, file: r = null, numberOfPages: o = 0, scale: x = 1.5 }, h] = (0,
          i.useState)({ redactions: {}, redoStack: {}, file: null, numberOfPages: 0, scale: 1.5 }),
          m = (0, i.useRef)({}),
          b = (e) => {
            var t;
            let r = null == (t = e.target.files) ? void 0 : t[0];
            r && h((e) => ({ ...e, file: r, redactions: {}, redoStack: {} }));
          },
          j = async () => {
            if (!r) return;
            let t = await r.arrayBuffer(),
              l = await n.PDFDocument.load(t);
            Object.entries(e).forEach((e) => {
              let [t, r] = e,
                s = Number(t),
                a = l.getPage(s);
              r.forEach((e) => {
                let { x: t, y: r, width: l, height: s } = e;
                a.drawRectangle({ x: t, y: a.getHeight() - r - s, width: l, height: s, color: (0, n.rgb)(0, 0, 0) });
              });
            });
            let s = (await l.save()).slice().buffer;
            (0, a.saveAs)(new Blob([s], { type: 'application/pdf' }), 'redacted.pdf');
          },
          g = (e, t) => {
            let r;
            if (!e || m.current[t]) return;
            let l = new s.Hl(e, { selection: !1, renderOnAddRemove: !0 });
            (l.setDimensions({ width: e.width, height: e.height }), (m.current[t] = l));
            let a = !1,
              n = 0,
              i = 0;
            (l.on('mouse:down', (e) => {
              a = !0;
              let t = l.getViewportPoint(e.e);
              ((n = t.x),
                (i = t.y),
                (r = new s.rw({ left: n, top: i, fill: 'black', width: 0, height: 0, selectable: !1 })),
                l.add(r));
            }),
              l.on('mouse:move', (e) => {
                if (!a) return;
                let t = l.getViewportPoint(e.e);
                (r.set({ width: t.x - n, height: t.y - i }), l.renderAll());
              }),
              l.on('mouse:up', () => {
                a = !1;
                let e = { x: r.left / x, y: r.top / x, width: r.width / x, height: r.height / x };
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
            (0, l.jsx)(p, {}),
            (0, l.jsx)('div', { className: 'w-full border-t border-neutral-800' }),
            (0, l.jsx)('section', {
              className: 'w-full py-20',
              children: (0, l.jsxs)('div', {
                className: 'mx-auto max-w-3xl px-4 text-center sm:px-6',
                children: [
                  (0, l.jsx)('h2', {
                    className: 'text-4xl font-extrabold sm:text-5xl',
                    children: 'Redact PDFs with Precision',
                  }),
                  (0, l.jsx)('p', {
                    className: 'mt-6 text-lg text-neutral-500',
                    children:
                      'Select text areas to black out and export secure, sanitized PDF files—right from your browser.',
                  }),
                  (0, l.jsxs)('div', {
                    className: 'mt-8 flex justify-center gap-4',
                    children: [
                      (0, l.jsxs)('label', {
                        className: 'inline-block cursor-pointer rounded-full border border-neutral-800 px-6 py-3',
                        children: [
                          (0, l.jsx)('span', { children: 'Upload PDF' }),
                          (0, l.jsx)('input', {
                            type: 'file',
                            accept: 'application/pdf',
                            onChange: b,
                            className: 'hidden',
                          }),
                        ],
                      }),
                      r &&
                        (0, l.jsx)('button', {
                          onClick: j,
                          className: 'rounded-full border border-neutral-800 px-6 py-3 transition hover:bg-neutral-900',
                          children: 'Export Redacted PDF',
                        }),
                    ],
                  }),
                ],
              }),
            }),
            (0, l.jsx)('div', { className: 'w-full border-t border-neutral-800' }),
            !r &&
              (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(u, {}),
                  (0, l.jsx)('div', { className: 'w-full border-t border-neutral-800' }),
                  (0, l.jsx)('section', {
                    className: 'w-full py-16',
                    children: (0, l.jsxs)('div', {
                      className: 'mx-auto max-w-3xl px-6 text-center',
                      children: [
                        (0, l.jsx)('h3', {
                          className: 'text-2xl font-bold sm:text-3xl',
                          children: 'Ready to protect sensitive information?',
                        }),
                        (0, l.jsx)('p', {
                          className: 'mt-4 text-neutral-500',
                          children:
                            'Upload your PDF and start redacting directly in your browser — no sign-up, no server, 100% local.',
                        }),
                        (0, l.jsxs)('label', {
                          className:
                            'mt-6 inline-block cursor-pointer rounded-full border border-neutral-800 px-6 py-3 text-white',
                          children: [
                            (0, l.jsx)('span', { children: 'Upload PDF' }),
                            (0, l.jsx)('input', {
                              type: 'file',
                              accept: 'application/pdf',
                              onChange: b,
                              className: 'hidden',
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            r &&
              (0, l.jsx)('div', {
                className: 'container mx-auto flex flex-col gap-y-8 p-8',
                children: (0, l.jsxs)('div', {
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
                              s = m.current[l];
                            if (!s) return;
                            let a = s.getObjects('rect');
                            if (a.length > 0) {
                              let e = a[a.length - 1];
                              (s.remove(e), s.renderAll());
                            }
                            h((e) => {
                              var t, r;
                              let s = [...(null != (t = e.redactions[l]) ? t : [])],
                                a = s.pop();
                              return a
                                ? {
                                    ...e,
                                    redactions: { ...e.redactions, [l]: s },
                                    redoStack: { ...e.redoStack, [l]: [...(null != (r = e.redoStack[l]) ? r : []), a] },
                                  }
                                : e;
                            });
                          },
                          className: 'w-full cursor-pointer rounded-full border border-neutral-800 px-4 py-2',
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
                              n = m.current[a];
                            if (!n) return;
                            let i = [...(null != (e = t[a]) ? e : [])],
                              o = i.pop();
                            if (!o) return;
                            let d = new s.rw({
                              left: o.x * x,
                              top: o.y * x,
                              width: o.width * x,
                              height: o.height * x,
                              fill: 'black',
                              selectable: !1,
                            });
                            (n.add(d),
                              n.renderAll(),
                              h((e) => {
                                var t;
                                return {
                                  ...e,
                                  redactions: {
                                    ...e.redactions,
                                    [a]: [...(null != (t = e.redactions[a]) ? t : []), o],
                                  },
                                  redoStack: { ...e.redoStack, [a]: i },
                                };
                              }));
                          },
                          className: 'w-full cursor-pointer rounded-full border border-neutral-800 px-4 py-2',
                          children: 'Redo Last Redaction',
                        }),
                      ],
                    }),
                    (0, l.jsx)('div', {
                      className: 'w-full overflow-hidden rounded-xl border border-neutral-800 shadow-2xl',
                      children: (0, l.jsx)('div', {
                        className: 'w-full overflow-auto',
                        children: (0, l.jsx)(d.A, {
                          file: r,
                          onLoadSuccess: (e) => {
                            let { numPages: t } = e;
                            return h((e) => ({ ...e, numberOfPages: t }));
                          },
                          children: Array.from({ length: o }, (e, t) =>
                            (0, l.jsxs)(
                              'div',
                              {
                                className: 'relative',
                                children: [
                                  (0, l.jsx)(c.A, {
                                    pageNumber: t + 1,
                                    scale: x,
                                    renderAnnotationLayer: !1,
                                    renderTextLayer: !1,
                                  }),
                                  (0, l.jsx)('canvas', {
                                    id: 'canvas-'.concat(t),
                                    ref: (e) => g(e, t),
                                    width: 794 * x,
                                    height: 1123 * x,
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
            (0, l.jsx)(f, {}),
          ],
        });
      };
    },
  },
]);
