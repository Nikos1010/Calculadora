
export default class Calculadora {
    constructor(setResult, result) {
        this.primerValor = 0;
        this.segundoValor = 0;
        this.setResult = setResult;
        this.result = result;
    }

    eventClick(e) {
        this.setResult(this.result.concat(e.target.name));
    }

    clear() {
        this.setResult("");
    }

    backspace() {
        this.setResult(this.result.slice(0, -1));
    }
    calculate(e) {
        switch (e.target.name) {
            case '*':
                this.setResult(String(Number(this.primerValor) * Number(this.segundoValor)));
                break;
            case '+':
                this.setResult(String(Number(this.primerValor) + Number(this.segundoValor)));
                break;
            case '-':
                this.setResult(String(Number(this.primerValor) - Number(this.segundoValor)));
                break;
            case '/':
                this.setResult(String(Number(this.primerValor) / Number(this.segundoValor)));
                break;

            default:
                this.setResult('Error');
                break;
        }
    }
}

// class Calculadora {
//     constructor() {
        
//     }
//     agregarNumero(numero) {
//         const digito = (isNaN(numero)) ? numero : parseInt(numero)
//         this.valorUno.push(digito)
//         this.valordos.push(digito)

//     }
//     imprimirPantalla() {
//         mostrarValorActual.innerText = this.valordos.join('')
//         mostrarValorAnterior.innerText = this.valorUno.join(' ')
//     }
//     borrarUno() {
//         this.valorUno = this.valorUno.slice(0, -1);
//         this.valordos = this.valordos.slice(0, -1);
//     }
//     borrarTodo() {
//         this.valorUno = [];
//         this.valordos = [];
//     }
// }