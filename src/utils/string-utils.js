exports.capitaliseAndReplaceDashes = (string) => {
  if (!string) return "";
  if (string.length === 1 && string[0] === "-") return " ";
  return string[0].toUpperCase() + string.slice(1).replaceAll("-", " ");
};