(() => {
  const dialog = document.createElement("dialog");
  dialog.className = "lightbox";
  dialog.innerHTML = `<figure class="lightbox-content"><button class="lightbox-close" type="button" aria-label="Close expanded image">×</button><img alt=""></figure>`;
  document.body.append(dialog);

  const image = dialog.querySelector("img");
  const close = () => dialog.close();
  dialog.querySelector("button").addEventListener("click", close);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) close();
  });

  document.querySelectorAll("a[data-lightbox]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const sourceImage = link.querySelector("img");
      image.src = link.href;
      image.alt = sourceImage?.alt || "Expanded article graphic";
      dialog.showModal();
    });
  });
})();
