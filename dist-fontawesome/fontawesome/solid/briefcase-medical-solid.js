import { h } from 'vue'
export default {
  $_icon: {
    name: "BriefcaseMedical",
    vendor: "Fa",
    type: "Solid",
    tags: ["briefcase","medical"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-briefcase-medical","innerHTML":"<path d='M464 96H384V48C384 21.5 362.5 0 336 0h-160C149.5 0 128 21.5 128 48V96H48C21.5 96 0 117.5 0 144v288C0 458.5 21.5 480 48 480h416c26.5 0 48-21.5 48-48v-288C512 117.5 490.5 96 464 96zM176 48h160V96h-160V48zM368 314c0 8.836-7.164 16-16 16h-54V384c0 8.836-7.164 16-15.1 16h-52c-8.835 0-16-7.164-16-16v-53.1H160c-8.836 0-16-7.164-16-16v-52c0-8.838 7.164-16 16-16h53.1V192c0-8.838 7.165-16 16-16h52c8.836 0 15.1 7.162 15.1 16v54H352c8.836 0 16 7.162 16 16V314z'/>"
      }
    )
  }
}