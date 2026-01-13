document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");

  const links = document.querySelectorAll("a");

  links.forEach(link => {
    if (link.href && link.target !== "_blank") {
      link.addEventListener("click", e => {
        e.preventDefault();
        const url = link.href;

        document.body.classList.remove("fade-in");

        setTimeout(() => {
          window.location.href = url;
        }, 500);
      });
    }
  });
});
