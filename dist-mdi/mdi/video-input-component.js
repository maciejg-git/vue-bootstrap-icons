import { h } from 'vue'
export default {
  name: "VideoInputComponent",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-video-input-component","innerHTML":"<path d='M5,2A1,1 0 0,0 4,1A1,1 0 0,0 3,2V6H1V12H7V6H5V2M9,16C9,17.3 9.84,18.4 11,18.82V23H13V18.82C14.16,18.41 15,17.31 15,16V14H9V16M1,16C1,17.3 1.84,18.4 3,18.82V23H5V18.82C6.16,18.4 7,17.3 7,16V14H1V16M21,6V2A1,1 0 0,0 20,1A1,1 0 0,0 19,2V6H17V12H23V6H21M13,2A1,1 0 0,0 12,1A1,1 0 0,0 11,2V6H9V12H15V6H13V2M17,16C17,17.3 17.84,18.4 19,18.82V23H21V18.82C22.16,18.41 23,17.31 23,16V14H17V16Z' />"},
    )
  }
}