const anchorData = {
  tag: "a",
  title: "This is link",
  href: "https://www.google.com",
  anchorText: "This is link",
};

function createReactElement(reactElementData) {
  const tag = document.createElement("a");
  tag.innerText = reactElementData.anchorText;
  tag.href = reactElementData.href;
  tag.title = reactElementData.title;
  return tag;
}

function renderElement(element, path) {
  const posTorender = document.getElementById(path);
  posTorender.appendChild(element);
}

// element to render
const elementTOrender = createReactElement(anchorData);

// where to render the element
renderElement(elementTOrender, "root");
