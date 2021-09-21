import { h } from 'vue'
export default {
  name: "CameraRetake",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor","data-name": "mdi-camera-retake" },
      [ h("path", { "d": "M20,5H17L15,3H9L7,5H4A2,2 0 0,0 2,7V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V7A2,2 0 0,0 20,5M12,18C10.92,18 9.86,17.65 9,17L10.44,15.56C10.91,15.85 11.45,16 12,16A3,3 0 0,0 15,13A3,3 0 0,0 12,10C10.74,10 9.6,10.8 9.18,12H11L8,15L5,12H7.1C7.65,9.29 10.29,7.55 13,8.1C15.7,8.65 17.45,11.29 16.9,14C16.42,16.33 14.38,18 12,18Z" }) ]
    )
  }
}