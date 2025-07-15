function iOS() {
  return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform) ||
    (navigator.userAgent.includes("Mac") && "ontouchend" in document);
}

document.addEventListener("DOMContentLoaded", function () {
  if (iOS()) {
    const ids = ["why-us", "offers", "header-subsite"];
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.backgroundAttachment = "scroll";
    });
  }
});