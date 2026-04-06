function getNumberV1(condition) {
    return new Promise(function (resolve, reject) {
        if (condition) {
            resolve(10);
        } else {
            reject(new Error('The condition was false'));
        }
    })
}


async function getNumberV2(condition) {
    if (condition) {
        return 10;
    } else {
        throw new Error('The condition was false');
    }
}


function runV1() {
    getNumberV1(false)
        .then(console.log)
        .catch(console.error);
}


async function runV2() {
    try {
        number = await getNumberV2(false);
        console.log(number);
    } catch (error) {
        console.error(error.message);
    }
}


function runV3() {
    console.log('\nVERSION 3');

    getNumberV2(true)
        .then(console.log)
        .then(_ => getNumberV1(false))
        .then(console.log)
        .catch(error => console.error(error.message));
}


async function runV4() {
    console.log('\nVERSION 4');

    try {
        number1 = await getNumberV1(true);
        console.log(number1);
        number2 = await getNumberV1(false);
        console.log(number2);
    } catch (error) {
        console.error(error.message)
    }
}

runV4();
console.log('FIN!');