gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});

document.querySelectorAll(".btn-53").forEach(btn => {
  const text = btn.textContent.trim();
  btn.innerHTML = `
    <div class="original">${text}</div>
    <div class="letters">${text.split("").map(l => `<span>${l}</span>`).join("")}</div>
  `;
});
