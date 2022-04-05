import { h } from 'vue'
export default {
  $_icon: {
    name: "Icicles",
    vendor: "Fa",
    type: "Solid",
    tags: ["icicles"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-icicles","innerHTML":"<path d='M511.4 37.87l-87.54 467.6c-1.625 8.623-14.04 8.634-15.67 .0104L341.4 141.7L295.7 314.2c-2.375 7.624-12.98 7.624-15.36 0L246.3 180.9l-46.49 196.9c-1.875 8.373-13.64 8.373-15.51 0L139.1 190.5L103.6 314.5c-2.375 7.124-12.64 7.198-15.14 .0744L1.357 41.24C-4.768 20.75 10.61 0 31.98 0h448C500 0 515.2 18.25 511.4 37.87z'/>"},
    )
  }
}