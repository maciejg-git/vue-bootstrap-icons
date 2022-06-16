import { h } from 'vue'
export default {
  $_icon: {
    name: "Bacon",
    vendor: "Fa",
    type: "Solid",
    tags: ["bacon"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","fill":"currentColor","data-name":"fa-bacon","innerHTML":"<path d='M29.34 432.5l-18.06-20.15c-9.406-10.47-13.25-25.3-10.31-39.65c2.813-13.71 11.23-24.74 23.09-30.23l68.88-31.94c47.95-22.25 87.64-60.2 114.8-109.8l20.66-37.76c28.77-52.59 70.98-92.93 122.1-116.6l92.75-42.99c14.84-6.812 32.41-3.078 43.69 9.518l34.08 38.01l-104.8 48.56c-55.72 25.83-101.7 69.73-133 127L261.3 266.5c-28.03 51.22-69 90.42-118.5 113.4L29.34 432.5zM564.7 99.68l-21.4-23.87l-113.6 52.68c-49.47 22.94-90.44 62.11-118.5 113.3L289.3 281.9c-31.33 57.27-77.34 101.2-133.1 127l-104.5 48.43l37.43 41.74C96.64 507.5 106.1 512 117.5 512c5.188 0 10.41-1.11 15.33-3.375l92.75-42.99c51.13-23.69 93.34-64.03 122.1-116.6l20.66-37.76c27.11-49.56 66.8-87.5 114.8-109.8l68.88-31.94c11.86-5.486 20.28-16.52 23.09-30.23C577.1 124.1 574.1 110.1 564.7 99.68z'/>"
      }
    )
  }
}