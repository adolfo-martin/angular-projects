import Calculator from "./Calculator";

class Application {
    run() {
        const error = (error: Error) => console.log(error.message)
        const exito = (resultado: number) => console.log(`El resultado es ${resultado}`)
        Calculator.divide(10, 2).match(error, exito)
        Calculator.divide(10, 0).match(error, exito)
        Calculator.divide(10, 5).match(error, exito)
    }
}

new Application().run()