import html from "../core.js";

// Lấy connect để lấy dữ liệu từ Store xuất ra màn hình
import { connect } from "../store.js";

// connect(selector = (state) => {return state}) {
//     return (component) => (props, ...args) =>
//     component(Object.assign({}, props, selector(state), ...args))
// }
const connector = connect()

function App ({cars}) {
    return html`
    <ul>
        ${cars.map((car)=>{
            return `<li>${car}</li>`
        })}
    </ul>
    <button onclick="dispatch('ADD', 'Hehe')">Add car</button>
    `;
}

export default connector(App)