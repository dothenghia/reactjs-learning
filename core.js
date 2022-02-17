        // Vì bên script.js là nhận vào 1 chuỗi `...`
        // Nên vẫn sẽ tách ra 3 phần first, string, value
        // Xem lại phần note Tagged Template Literals
        // Giá trị đầu trả về mảng chuỗi, giá trị là ${ }
function html([first, ...string] , ...value) {
    // reduce (callback(accumulator, currentValue, currentIndex, originIndex) , init value)
    // Xem lại reduce() trong sổ tay
    return value.reduce(
        function (acc , cur) {
            return acc.concat(cur , string.shift())
        }
        ,[first]
    )
    .filter(function(value) { // Xét xem có value nào là boolean, null , ... ko ?
        if ((value && (value !== true)) || (value === 0)) {
            return true
        }
        return false
    })
    .join('') // Nối các phần tử
}


                  // Callback
function createStore(reducer) {
    let state = reducer()

    // https://www.w3schools.com/js/js_maps.asp
    // A Map holds key-value pairs where the keys can be any datatype.
    const roots = new Map()

    function render () {
                 // key - value
                 // Vì Map có thể chứa bất kì datatype
                 // Nên chứa root là cái nơi html render ra
                 // component là cái function như bên React
        for (const [root, component] of roots) {
            const htmlOutput = component(); // component sẽ return ra html như bên React
            root.innerHTML = htmlOutput
        }
    }

    // cuối cùng thì return ra 1 cái object chứa những phương thức để làm việc với createStore
    return {
        // attach : function() { /CODE/ }
        // Hoặc là Enhanced object literals
        attach() {

        }
    }
}

export default html