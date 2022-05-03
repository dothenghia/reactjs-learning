
const init = {
    cars: ['Mazda']
}

                // State mặc định là = init
function reducer (state=init, action, args) {
    console.log(action, args)
    switch (action) {
        case 'ADD':
            var [newCar] = args; // Gán args mới vào biến phần tử newCar
            return {
                ...state,
                cars: [...state.cars, newCar]
            }
            break;
        default:
            return state;
            break;
    }
}

export default reducer;