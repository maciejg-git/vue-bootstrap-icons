import { h } from 'vue'
export default {
  $_icon: {
    name: "MoneyBill",
    vendor: "Fa",
    type: "Solid",
    tags: ["money","bill"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","fill":"currentColor","data-name":"fa-money-bill","innerHTML":"<path d='M512 64C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H512zM128 384C128 348.7 99.35 320 64 320V384H128zM64 192C99.35 192 128 163.3 128 128H64V192zM512 384V320C476.7 320 448 348.7 448 384H512zM512 128H448C448 163.3 476.7 192 512 192V128zM288 352C341 352 384 309 384 256C384 202.1 341 160 288 160C234.1 160 192 202.1 192 256C192 309 234.1 352 288 352z'/>"
      }
    )
  }
}