import { h } from 'vue'
export default {
  $_icon: {
    name: "AccountMinus",
    vendor: "Mdi",
    type: "",
    tags: ["account","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-account-minus"},
      [ 
        h(
          "path",
          {"d":"M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M1,10V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z"}
        ) 
      ]
    )
  }
}