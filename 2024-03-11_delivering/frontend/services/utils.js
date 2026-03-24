/**
 * 
 * @param {string} url 
 * @param {{}} body 
 * @param {string} errorMessage 
 * @returns Object
 */
export async function post(url, body, errorMessage='error') {
    let response;
    try {
        response = await fetch(url, {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(body)
        });
    } catch (error) {
        throw new Error(`${errorMessage}: ${error}`);
    }

    // Comprueba si el fetch fue correcto
    if (!response.ok) {
        throw new Error(`${errorMessage}: [${response.status} ${response.statusText}]`);
    }

    // Comprueba si estoy recibiendo JSON
    let data;
    try {
        data = await response.json();
    } catch (error) {
        throw new Error(`${errorMessage}: ${error}`);
    }

    // // Comprueba si el data es correcto
    // if (!data.ok) {
    //     throw new Error(`${errorMessage}: ${data.message}`);
    // }

    return data;
}