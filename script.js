import html from './core.js'

const cars = ['BWM', 'Porsche', 'Lambo']

             // Tagged Template Literals
const output = html`
    <h1>${true}</h1>
    <ul>
        ${cars.map((car) => {
            return `<li>${car}</li>`
        }).join('')}
    </ul>
`

console.log(output)

document.getElementById('root').innerHTML = output