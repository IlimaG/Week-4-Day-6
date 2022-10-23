// Ejercicio 2

const ice = prompt("¿Qué topping quieres para tu helado?")
let topping = ''

switch (ice.toLowerCase()) {
    case 'oreo':
        topping = '2.90'
        break
    case 'kitkat':
        topping = '3.40'
        break
    case 'brownie':
        topping = '2.65'
        break
    case 'lacasitos':
        topping = '2.85'
        break
    default:
        topping = 'no tenemos este topping, lo sentimos. El precio de su helado es: 1.90'
}

alert(`Su helado de ${ice}, ${topping} €`)

