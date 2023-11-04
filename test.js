import van from "mini-van-plate/van-plate"
import {LinkedinSvg} from "./src/svg.js"

const { div } = van.tags;

console.log(div('qwe', LinkedinSvg, 123, 'zzz').render())