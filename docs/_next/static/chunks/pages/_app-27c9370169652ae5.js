(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [636],
  {
    2147: () => {},
    2635: (a, e, s) => {
      'use strict';
      s.d(e, { C: () => l });
      let l = 're(d)act';
    },
    4626: (a, e, s) => {
      a.exports = s(5274);
    },
    6404: (a, e, s) => {
      'use strict';
      (s.r(e), s.d(e, { default: () => d }));
      var l = s(5640),
        t = s(2635);
      s(2147);
      var n = s(7332),
        r = s.n(n),
        c = s(8580),
        _ = s.n(c),
        i = s(4626),
        o = s.n(i);
      let d = (a) => {
        let { Component: e, pageProps: s } = a;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(o(), { children: (0, l.jsx)('title', { children: t.C }) }),
            (0, l.jsx)('div', {
              className: ''.concat(r().className, ' ').concat(_().className),
              children: (0, l.jsx)('div', {
                className: 'bg-neutral-900 text-neutral-100',
                children: (0, l.jsx)(e, { ...s }),
              }),
            }),
          ],
        });
      };
    },
    7332: (a) => {
      a.exports = {
        style: { fontFamily: "'Geist', 'Geist Fallback'", fontStyle: 'normal' },
        className: '__className_f05857',
        variable: '__variable_f05857',
      };
    },
    8462: (a, e, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return s(6404);
        },
      ]);
    },
    8580: (a) => {
      a.exports = {
        style: { fontFamily: "'Geist Mono', 'Geist Mono Fallback'", fontStyle: 'normal' },
        className: '__className_238a39',
        variable: '__variable_238a39',
      };
    },
  },
  (a) => {
    var e = (e) => a((a.s = e));
    (a.O(0, [593, 792], () => (e(8462), e(8231))), (_N_E = a.O()));
  },
]);
