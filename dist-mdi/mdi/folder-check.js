import { h } from 'vue'
export default {
  $_icon: {
    name: "FolderCheck",
    vendor: "Mdi",
    type: "",
    tags: ["folder","check"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-folder-check","innerHTML":"<path d='M20 6H12L10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6M14.2 16.2L11.4 13.2L12.6 12L14.2 13.6L17.8 10L19 11.4L14.2 16.2Z' />"},
    )
  }
}