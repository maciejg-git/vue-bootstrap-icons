import { h } from 'vue'
export default {
  $_icon: {
    name: "MusicNoteOff",
    vendor: "Mdi",
    type: "",
    tags: ["music","note","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-music-note-off"},
      [ 
        h(
          "path",
          {"d":"M4.27 3L3 4.27L12 13.27V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V15.27L19.73 21L21 19.73L4.27 3M14 7H18V3H12V8.18L14 10.18Z"}
        ) 
      ]
    )
  }
}