class User {
    constructor(public id: number, public name: string) {}
}


type MyError = {
    message: string;
    resolution?: string | undefined;
}


const enum ErrorMessages {
    DBError = 'Error ocurred while dealing with db.'
}


const isError = (toBeDetermined: any | MyError): toBeDetermined is MyError => {
    return !!(toBeDetermined as MyError)?.message
}


const getUser = (): Promise<User | MyError>  => {
    const result = {
        message: ErrorMessages.DBError,
        resolution: 'Check db connection'
    }
    return Promise.resolve(result)
    // return Promise.resolve(new User(1, 'Pepe López'))
}


const main = async () => {
    const user = await getUser()
    if (isError(user)) {
        if (user.message === ErrorMessages.DBError) {
            console.error(`DATABASE ERROR: ${user.message}`)
            return;
        }
        console.error(user.message)
        return;
    } 
    
    console.log(user)
}


main()


// -------------------------------------------------------

// const getUserTraditional = (): Promise<User> => {
//     return Promise.resolve(new User(1, 'Pepe López'))
//     // throw new Error('Bag db error')
// }

// const mainTraditional = async () => {
//     try {
//         const user = await getUserTraditional()
//         console.log(`Got user: ${JSON.stringify(user)}`)
//     } catch (error) {
//         console.error(`Cautch error: ${error}`)
//     }
// }

// mainTraditional()