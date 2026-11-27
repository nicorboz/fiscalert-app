// Applique le thème du système avant le premier rendu (fichier externe : compatible avec une CSP sans script en ligne).
// Le choix manuel a laissé place à la bascule de langue : le mode sombre suit désormais le réglage de l'appareil.
(function () {
  var q = matchMedia('(prefers-color-scheme: dark)');
  var apply = function () { document.documentElement.dataset.theme = q.matches ? 'dark' : 'light'; };
  apply();
  if (q.addEventListener) q.addEventListener('change', apply);
  try { localStorage.removeItem('taxlens-theme'); } catch (e) {}
})();
