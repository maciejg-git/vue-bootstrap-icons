import { h } from 'vue'
export default {
  $_icon: {
    name: "MusicAccidentalNatural",
    vendor: "Mdi",
    type: "",
    tags: ["music","accidental","natural"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-music-accidental-natural"},
      [ 
        h(
          "path",
          {"d":"M10 8.75V3.5H8V17.5L14 15.25V20.5H16V6.5L10 8.75M14 13.25L10 14.75V10.75L14 9.25V13.25Z"}
        ) 
      ]
    )
  }
}