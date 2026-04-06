import Either from './Either'

export default class Calculator {
    static divide(
        dividend: number, 
        divider: number
    ): Either<Error, number> {
        if (divider === 0) {
            // @ts-ignore: Unreachable code error
            return new Either(new Error('You cannot divide by zero.'), null)
        }

        const quotient = dividend / divider
        // @ts-ignore: Unreachable code error
        return new Either(null, quotient)
    }
}