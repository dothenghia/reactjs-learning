import { createStore } from "./core.js";
import reducer from "./reducer.js";

// Vì createStore cần có tham số là reducer
// và nó trả ra 1 object gồm 3 method để handle
const {attach, connect, dispatch} = createStore(reducer);

// Đặt 1 biến global để ở đâu cũng gọi được
window.dispatch = dispatch;

export {
    attach,
    connect
}