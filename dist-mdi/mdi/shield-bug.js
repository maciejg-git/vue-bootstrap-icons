import { h } from 'vue'
export default {
  name: "ShieldBug",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor","data-name": "mdi-shield-bug" },
      [ h("path", { "d": "M11 13H13V14H11V13M21 5V11C21 16.5 17.2 21.7 12 23C6.8 21.7 3 16.5 3 11V5L12 1L21 5M17 10H14.8C14.6 9.4 14.2 8.9 13.7 8.5L14.9 7.3L14.2 6.6L12.8 8H12C11.8 8 11.5 8 11.3 8.1L9.9 6.6L9.1 7.4L10.3 8.6C9.8 8.9 9.4 9.4 9.2 10H7V11H9V12H7V13H9V14H7V15H9.2C9.6 16.2 10.7 17 12 17S14.4 16.2 14.8 15H17V14H15V13H17V12H15V11H17V10M11 12H13V11H11V12Z" }) ]
    )
  }
}