const allHeadings = document.querySelectorAll(
  ".page-content h2, .page-content h3"
);
const pageContent = document.querySelector(".page-content");

const generateTOC = () => {
  const tableOfContents = document.createElement("div");
  tableOfContents.classList.add("table-of-contents");

  const tocHeading = document.createElement("h2");
  tocHeading.classList.add("toc-heading");
  tocHeading.innerHTML = "Table of Contents";

  const headingsContainer = document.createElement("div");
  headingsContainer.classList.add("headings-container");

  const ul = document.createElement("ul");

  let subHeadingUl = null;

  allHeadings.forEach((h) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${h.id}`;
    a.innerHTML = h.innerHTML;
    li.appendChild(a);

    if (h.classList.contains("toc-h3")) {
      a.classList.add("sub-heading");

      if (!subHeadingUl) {
        subHeadingUl = document.createElement("ul");
        const previousLi = ul.lastChild;
        previousLi.appendChild(subHeadingUl);
      }

      subHeadingUl.appendChild(li);
    } else {
      a.classList.add("heading");
      ul.appendChild(li);
      subHeadingUl = null;
    }
  });

  headingsContainer.appendChild(ul);
  tableOfContents.appendChild(tocHeading);
  tableOfContents.appendChild(headingsContainer);

  pageContent.prepend(tableOfContents);
};

if (allHeadings.length > 0 && pageContent) {
  generateTOC();
}
