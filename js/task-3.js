function getElementWidth(content, padding, border) {
  const sizing =
    parseFloat(content) + parseFloat(padding) * 2 + parseFloat(border) * 2;
  return sizing;
}

console.log(getElementWidth("50px", "8px", "4px"));
