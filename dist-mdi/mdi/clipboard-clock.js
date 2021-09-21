import { h } from 'vue'
export default {
  name: "ClipboardClock",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor","data-name": "mdi-clipboard-clock" },
      [ h("path", { "d": "M16.5 16.25L19.36 17.94L18.61 19.16L15 17V12H16.5V16.25M23 16C23 19.87 19.87 23 16 23C14.09 23 12.37 22.24 11.11 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3H9.18C9.6 1.84 10.7 1 12 1S14.4 1.84 14.82 3H19C20.11 3 21 3.9 21 5V11.11C22.24 12.37 23 14.09 23 16M11 4C11 4.55 11.45 5 12 5S13 4.55 13 4 12.55 3 12 3 11 3.45 11 4M21 16C21 13.24 18.76 11 16 11S11 13.24 11 16 13.24 21 16 21 21 18.76 21 16Z" }) ]
    )
  }
}