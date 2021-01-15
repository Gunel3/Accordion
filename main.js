const headers = document.querySelectorAll(".accordion-item__header");
headers.forEach((header) => {
  header.addEventListener("click", (event) => {
    // console.log(event)
    header.classList.toggle("minus");
  });
});
