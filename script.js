function captureScreenshot(targetElementId, fileName) {
  const captureElement = document.querySelector(targetElementId);

  html2canvas(captureElement)
    .then((canvas) => {
      canvas.style.display = "none";
      document.body.appendChild(canvas);
      return canvas;
    })
    .then((canvas) => {
      const image = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.setAttribute("download", fileName);
      a.setAttribute("href", image);
      a.click();
      canvas.remove();
    });
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  captureScreenshot("#target-element-1", "my-screenshot1.png");
  captureScreenshot("#target-element-2", "my-screenshot2.png");
});
