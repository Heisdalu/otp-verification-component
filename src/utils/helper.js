export const formatNumber = (e) => {
  const value = e.target.value;
  // const slicedValue = e.target.value.slice(0, 1);
  const numberValue = Number.isFinite(Number(value));
  if (!numberValue) return (e.target.value = "");
  if (value < 0) return (e.target.value = 0);
  // once it's more than 1 or 1.. ediit to one character
  if (value.length >= 1) {
    return (e.target.value = e.target.value.slice(0, 1));
  }
};

export const removeFocusOnLastChild = (i, l, elem) => {
  if (i === l) {
    elem.current.classList.remove("activeBorder");
    elem.current.blur();
  }
};
