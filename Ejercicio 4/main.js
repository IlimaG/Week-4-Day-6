// Ejercicio 4

const language = prompt("In which language do you want to see the message?")
let greetings = ''

switch (language) {
    case 'Spanish':
        greetings = '¡Hola, mundo!'
        break
    case 'French':
        greetings = 'Bonjour tout le monde'
        break
    case 'Japanese':
        greetings = 'ハロー、ワールド'
        break
    case 'Portuguese':
        greetings = 'olá mundo!'
        break
    case 'Italian':
        greetings = 'Ciao mondo!'
        break
    case 'Polish':
        greetings = 'Witaj świecie!'
        break
    case 'Romanian':
        greetings = 'Bună ziua lume!'
        break
    default:
        greetings = 'Hello, world!'
}

alert(`Your language of choice is  ${language}, ${greetings}.`)

