import { h } from 'vue'
export default {
  $_icon: {
    name: "PlaylistStar",
    vendor: "Mdi",
    type: "",
    tags: ["playlist","star"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-playlist-star"},
      [ 
        h(
          "path",
          {"d":"M17,19.09L19.45,20.58L18.8,17.77L21,15.89L18.11,15.64L17,13L15.87,15.64L13,15.89L15.18,17.77L14.5,20.58L17,19.09M4,14H12V16H4V14M4,6H16V8H4V6M4,10H16V12H4V10Z"}
        ) 
      ]
    )
  }
}