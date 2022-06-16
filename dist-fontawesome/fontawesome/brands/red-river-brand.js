import { h } from 'vue'
export default {
  $_icon: {
    name: "RedRiver",
    vendor: "Fa",
    type: "Brand",
    tags: ["red","river"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor","data-name":"fa-red-river","innerHTML":"<path d='M353.2 32H94.8C42.4 32 0 74.4 0 126.8v258.4C0 437.6 42.4 480 94.8 480h258.4c52.4 0 94.8-42.4 94.8-94.8V126.8c0-52.4-42.4-94.8-94.8-94.8zM144.9 200.9v56.3c0 27-21.9 48.9-48.9 48.9V151.9c0-13.2 10.7-23.9 23.9-23.9h154.2c0 27-21.9 48.9-48.9 48.9h-56.3c-12.3-.6-24.6 11.6-24 24zm176.3 72h-56.3c-12.3-.6-24.6 11.6-24 24v56.3c0 27-21.9 48.9-48.9 48.9V247.9c0-13.2 10.7-23.9 23.9-23.9h154.2c0 27-21.9 48.9-48.9 48.9z'/>"
      }
    )
  }
}