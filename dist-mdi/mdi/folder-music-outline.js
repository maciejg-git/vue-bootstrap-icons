import { h } from 'vue'
export default {
  $_icon: {
    name: "FolderMusicOutline",
    vendor: "Mdi",
    type: "",
    tags: ["folder","music","outline"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-folder-music-outline","innerHTML":"<path d='M22 8V11H20V8H4V18H13.78C13.38 18.59 13.13 19.26 13.04 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.89 4 4 4H10L12 6H20C21.1 6 22 6.89 22 8M18.5 13V18.21C18.19 18.07 17.86 18 17.5 18C16.12 18 15 19.12 15 20.5S16.12 23 17.5 23 20 21.88 20 20.5V15H22V13H18.5Z' />"
      }
    )
  }
}