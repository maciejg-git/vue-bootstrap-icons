import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowsLeftRight",
    vendor: "Fa",
    type: "Solid",
    tags: ["arrows","left","right"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-arrows-left-right","innerHTML":"<path d='M502.6 278.6l-96 96C400.4 380.9 392.2 384 384 384s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L402.8 288h-293.5l41.38 41.38c12.5 12.5 12.5 32.75 0 45.25C144.4 380.9 136.2 384 128 384s-16.38-3.125-22.62-9.375l-96-96c-12.5-12.5-12.5-32.75 0-45.25l96-96c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224h293.5l-41.38-41.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l96 96C515.1 245.9 515.1 266.1 502.6 278.6z'/>"
      }
    )
  }
}