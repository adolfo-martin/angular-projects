(async function() {
    try {
        var token = await getToken();
    } catch (e) {
        console.log(`[IIFE] ERROR: ${e.message}`);
        return;
    };
    await getProducts(token);
})();


async function getToken(username = 'emilys', password = 'emilyspass') {
    try {
        var response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username,
            password,
            expiresInMins: 30,
        }),
        credentials: 'include'
        });
    } catch (e) {
        console.log(`[getToken] ERROR: ${e.message}`);
        return;
    };  
    
    if (!response.ok) {
        throw new Error(`[getToken] (${response.status} '${response.statusText}' ${response.url})`);
    }

    try {
        var data = await response.json();
    } catch (e) {
        console.log(`[getToken] ERROR: ${e.message}`);
        return;
    }; 

    const token = data.accessToken;
    return token;
}



async function getProducts(token) {
    try {
        const response = await fetch('https://dummyjson.com/auth/products', {
            method: 'GET',
            headers: {
                'Authorization': token
            },
            credentials: 'include' // Include cookies (e.g., accessToken) in the request
        });
        const data = await response.json();
        console.log(data.products.length);
    } catch (e) {
        console.log(e.message);
    }
}


