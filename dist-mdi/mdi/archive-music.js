import { h } from 'vue'
export default {
  name: "ArchiveMusic",
  vendor: "Mdi",
  tags: ["archive","music"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"mdi-archive-music","innerHTML":"<path d='M16.5 16.11V11H20V8H4V21H13.03C13 20.84 13 20.67 13 20.5C13 18.36 14.5 16.57 16.5 16.11M9 13V11.5C9 11.22 9.22 11 9.5 11H14.5C14.78 11 15 11.22 15 11.5V13H9M21 7H3V3H21V7M22 13V15H20V20.5C20 21.88 18.88 23 17.5 23S15 21.88 15 20.5 16.12 18 17.5 18C17.86 18 18.19 18.07 18.5 18.21V13H22Z' />"},
    )
  }
}