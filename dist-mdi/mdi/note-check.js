import { h } from 'vue'
export default {
  name: "NoteCheck",
  vendor: "Mdi",
  tags: ["note","check"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"mdi-note-check","innerHTML":"<path d='M19 13C19.7 13 20.37 13.13 21 13.35V9L15 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H13.35C13.13 20.37 13 19.7 13 19C13 15.69 15.69 13 19 13M14 4.5L19.5 10H14V4.5M22.5 17.25L17.75 22L15 19L16.16 17.84L17.75 19.43L21.34 15.84L22.5 17.25Z' />"},
    )
  }
}