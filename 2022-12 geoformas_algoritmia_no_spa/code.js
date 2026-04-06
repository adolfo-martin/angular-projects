export function redirectToErrorPage(message) {
    const url = `./error.htm?message=${message}`;
    window.location = url;
}

export function redirectToLandformPage(continent) {
    const url = `./landforms.htm?continent=${continent}`;
    window.location = url;
}