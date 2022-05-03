        // Vì bên script.js là nhận vào 1 chuỗi `...`
        // Nên vẫn sẽ tách ra 3 phần first, string, value
        // Xem lại phần note Tagged Template Literals
        // Giá trị đầu trả về mảng chuỗi, giá trị là ${ }
function html([first, ...string] , ...value) {
    // reduce (callback(accumulator, currentValue, currentIndex, originIndex) , init value)
    // Xem lại reduce() trong sổ tay
    return value.reduce(
        function (acc , cur) {
            return acc.concat(cur).concat(string.shift())
        }
        ,[first]
    )
    .filter(function(value) { // Xét xem có value nào là boolean, null , ... ko ?
        if ((value && (value != true)) || (value == 0)) {
            return true
        }
        return false
    })
    .join('') // Nối các phần tử
}


                  // Callback
export function createStore(reducer) {
    // Dữ liệu trong Store ko gọi là data, mà gọi là State (Trạng thái)
    let state = reducer() // Gán cái dữ liệu mà reducer return lại

    // A Map holds key-value pairs where the keys can be any datatype.
    const roots = new Map()

    function render () {
                 // key - value
                 // Vì Map có thể chứa bất kì datatype
                 // Nên chứa root là cái nơi html render ra
                 // component là cái function như bên React
        for (const [root, component] of roots.entries()) {
            const outputHTML = component(); // component sẽ return ra html như bên React
            root.innerHTML = outputHTML
        }
    }

    // cuối cùng thì return ra 1 cái object chứa những phương thức để handle với createStore
    return {
        // attach : function() { /CODE/ }
        // Hoặc là Enhanced object literals
        // Attach là method dùng để nhận cái View rồi hiện ra root
        // giống như React.render(<App/>, document,getElementById('root'))
        attach(component, root) {
            roots.set(root, component);
            render();
        },

        // Connect giúp đẩy dữ liệu từ Store vào View
        // selector giúp chọn dữ liệu cụ thể từ Store
        // ,vì ko phải lúc nào cũng cần lấy hết dữ liệu
        // Nếu ko có cái cụ thể thì sẽ trả về mặc định là state
        connect(selector = (state) => {return state}) {
            return (component) => (props, ...args) =>
            component(Object.assign({}, props, selector(state), ...args))
        },

        // View muốn thực hiện 1 cái hành động thì phải dispatch (gửi đi)
        // thì để dispatch thì cần nhận lệnh action, và những cái như index, data...
        dispatch(action, ...args) {
            // lúc nãy reducer có return cho state ròi , nên h vẫn cần init value 
            state = reducer(state, action, args)
            render()
        }
    }
}

export default html