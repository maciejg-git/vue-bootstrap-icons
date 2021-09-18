import { h } from 'vue'
export default {
  name: "Navigation",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-navigation","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon" },
      [ h("path", { "d": "M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" }) ]
    )
  }
}