(function () {
  const PROMO_TEXTS = ["使ってみる", "Try it", "Try Loom"];

  function isPromoAlert(element) {
    if (element.getAttribute("role") !== "alert") return false;
    const text = element.textContent;
    return PROMO_TEXTS.some((t) => text.includes(t));
  }

  function scanAndHide() {
    const alerts = document.querySelectorAll('[role="alert"]');
    for (const alert of alerts) {
      if (alert.style.display === "none") continue;
      if (isPromoAlert(alert)) {
        alert.style.display = "none";
      }
    }
  }

  scanAndHide();

  const observer = new MutationObserver(scanAndHide);
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["role"],
  });
})();
