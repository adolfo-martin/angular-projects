async function getImage(productId) {
    const url = `https://dummyjson.com/products/${productId}?limit=10&delay=2000`;
    const response = await fetch(url);
    const data = await response.json();
    const image = data.images[0];
    return image;
}


// async function getTenProductsWithForOf() {
//     const url = 'https://dummyjson.com/products?limit=10&delay=2000';
//     const response = await fetch(url);
//     const data = await response.json();
//     const products = data.products.map(({ id, title: name }) => ({ id, name }));

//     for (const product of products) {
//         const image = await getImage(product.id);
//         console.log(image);
//         product.image = image;
//     }

//     return products;
// }

// const products = await getTenProductsWithForOf();
// console.log('1111111111111111111111111111111111111');
// console.log(products);

// setTimeout(() => {
//     console.log('2222222222222222222222222222222222222');
//     console.log(products);
// }, 5000);




// async function getTenProductsWithForEach() {
//     const url = 'https://dummyjson.com/products?limit=10&delay=2000';
//     const response = await fetch(url);
//     const data = await response.json();
//     const products = data.products.map(({ id, title: name }) => ({ id, name }));

//     products.forEach(async product => {
//         const image = await getImage(product.id);
//         console.log(image);
//         product.image = image;
//     });

//     return products;
// }

// const products = await getTenProductsWithForEach();
// console.log('1111111111111111111111111111111111111');
// console.log(products);

// setTimeout(() => {
//     console.log('2222222222222222222222222222222222222');
//     console.log(products);
// }, 5000);



async function getTenProductsWithPromiseAll() {
    const url = 'https://dummyjson.com/products?limit=10&delay=2000';
    const response = await fetch(url);
    const data = await response.json();
    const products = data.products.map(({ id, title: name }) => ({ id, name }));

    products.forEach(async (product, i) => {
        const image = await getImage(product.id);
        console.log(`${i}) ${image}`);
        product.image = image;
    });

    const promises = products.map(product => getImage(product.id));
    const images = await Promise.all(promises);
    products.forEach((product, i) => product.image = images[i]);

    return products;
}

const products = await getTenProductsWithPromiseAll();
console.log('1111111111111111111111111111111111111');
console.log(products);
