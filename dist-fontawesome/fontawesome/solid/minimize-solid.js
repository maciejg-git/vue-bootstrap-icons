import { h } from 'vue'
export default {
  $_icon: {
    name: "Minimize",
    vendor: "Fa",
    type: "Solid",
    tags: ["minimize"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-minimize","innerHTML":"<path d='M200 287.1H64c-12.94 0-24.62 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.937 34.87l30.06 30.06l-62.06 62.07c-12.49 12.5-12.5 32.75-.0012 45.25l22.62 22.62c12.5 12.5 32.76 12.5 45.26 .0012l62.06-62.07l30.06 30.06c6.125 6.125 14.31 9.375 22.62 9.375c4.125 0 8.281-.7969 12.25-2.437c11.97-4.953 19.75-16.62 19.75-29.56V311.1C224 298.7 213.3 287.1 200 287.1zM312 224h135.1c12.94 0 24.62-7.797 29.56-19.75c4.969-11.97 2.219-25.72-6.937-34.87l-30.06-30.06l62.06-62.07c12.5-12.5 12.5-32.76 .0003-45.26l-22.62-22.62c-12.5-12.5-32.76-12.5-45.26-.0003l-62.06 62.07l-30.06-30.06c-9.156-9.141-22.87-11.84-34.87-6.937C295.8 39.39 288 51.06 288 64v135.1C288 213.3 298.7 224 312 224zM204.3 34.44C192.3 29.47 178.5 32.22 169.4 41.38L139.3 71.44L77.25 9.374C64.75-3.123 44.49-3.123 31.1 9.374l-22.63 22.63c-12.49 12.49-12.49 32.75 .0018 45.25l62.07 62.06L41.38 169.4C35.25 175.5 32 183.7 32 192c0 4.125 .7969 8.281 2.438 12.25C39.39 216.2 51.07 224 64 224h135.1c13.25 0 23.1-10.75 23.1-23.1V64C224 51.06 216.2 39.38 204.3 34.44zM440.6 372.7l30.06-30.06c9.141-9.156 11.84-22.88 6.938-34.87C472.6 295.8 460.9 287.1 448 287.1h-135.1c-13.25 0-23.1 10.75-23.1 23.1v135.1c0 12.94 7.797 24.62 19.75 29.56c11.97 4.969 25.72 2.219 34.87-6.937l30.06-30.06l62.06 62.06c12.5 12.5 32.76 12.5 45.26 .0002l22.62-22.62c12.5-12.5 12.5-32.76 .0002-45.26L440.6 372.7z'/>"},
    )
  }
}