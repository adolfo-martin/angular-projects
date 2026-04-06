export function redirectToErrorPage(message) {
    const url = `./error.htm?message=${message}`;
    window.location = url;
}

export function redirectToOrderPage(genre) {
    const url = `./order.htm`;
    window.location = url;
}