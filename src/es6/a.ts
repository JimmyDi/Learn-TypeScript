export let a = 1;

let b = 2;
let c = 3;
export {b, c};

const g = () => {}
export {g as G};

export { str as hello } from './b';