import { h } from 'vue'
export default {
  $_icon: {
    name: "TableArrowDown",
    vendor: "Mdi",
    type: "",
    tags: ["table","arrow","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-table-arrow-down","innerHTML":"<path d='M4 3H18C19.11 3 20 3.9 20 5V12.08C18.45 11.82 16.92 12.18 15.68 13H12V17H13.08C12.97 17.68 12.97 18.35 13.08 19H4C2.9 19 2 18.11 2 17V5C2 3.9 2.9 3 4 3M4 7V11H10V7H4M12 7V11H18V7H12M4 13V17H10V13H4M15.94 18.5H17.94V14.5H19.94V18.5H21.94L18.94 21.5L15.94 18.5' />"},
    )
  }
}