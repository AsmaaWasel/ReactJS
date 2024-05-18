/**
 * Slices the input text to a specified maximum length and adds an ellipsis if the text exceeds the maximum length.
 *
 * @param {string} text - The input text to be sliced.
 * @param {number} [maxtext=50] - The maximum length of the text before slicing. Defaults to 50.
 * @returns {string} The sliced text with an ellipsis if it exceeds the maximum length.
 */
export function txtSlicer(text: string, maxtext: number = 50) {
  if (text.length >= maxtext) {
    return `${text.slice(0, maxtext)}...`;
  } else {
    return text;
  }
}
