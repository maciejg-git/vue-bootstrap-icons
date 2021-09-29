import { h } from 'vue'
export default {
  name: "FighterJetSolid",
  vendor: "Fa",
  tags: ["fighter","jet"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","class":"vi-icon","fill":"currentColor","data-name":"fa-fighter-jet","innerHTML":"<path d='M544 224l-128-16-48-16h-24L227.158 44h39.509C278.333 44 288 41.375 288 38s-9.667-6-21.333-6H152v12h16v164h-48l-66.667-80H18.667L8 138.667V208h8v16h48v2.666l-64 8v42.667l64 8V288H16v16H8v69.333L18.667 384h34.667L120 304h48v164h-16v12h114.667c11.667 0 21.333-2.625 21.333-6s-9.667-6-21.333-6h-39.509L344 320h24l48-16 128-16c96-21.333 96-26.583 96-32 0-5.417 0-10.667-96-32z'/>"},
    )
  }
}