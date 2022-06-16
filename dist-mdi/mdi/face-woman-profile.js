import { h } from 'vue'
export default {
  $_icon: {
    name: "FaceWomanProfile",
    vendor: "Mdi",
    type: "",
    tags: ["face","woman","profile"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-face-woman-profile","innerHTML":"<path d='M17.25 13C17.25 13.69 16.69 14.25 16 14.25S14.75 13.69 14.75 13 15.31 11.75 16 11.75 17.25 12.31 17.25 13M22 12C22 17.5 17.5 22 12 22H2V12C2 6.5 6.5 2 12 2S22 6.5 22 12M7 18C8.41 19.23 10 20 12 20C16.41 20 20 16.41 20 12C20 11.21 19.88 10.45 19.67 9.74C18.95 9.91 18.2 10 17.42 10C15.42 10 13.57 9.4 12 8.39C12 8.39 10.54 13.76 8.03 13C7.37 12.8 7 13.31 7 14' />"
      }
    )
  }
}