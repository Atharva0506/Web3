function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function callback(x=5000) {
    console.log(`${x} seconds have passed!`)
}
let ms = 5000
setTimeoutPromisified(ms).then(callback)