export function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if(url.charAt(start) === '/') {
        start++ 
    }
    return url.slice(start, end)
}

export function removeChildren(container) {
    while (container.firstChild) {
    container.removeChild(container.firstChild)
    }
}

//function getRandomMeme(arr) {
    //const randomMeme = Math.floor(Math.random() * arr.length)
    //const meme = arr[randomMeme]
    ///return meme
//}

///const array = [1, 'hello', 5, 8]
//const result = getRandomMeme(array)

//console.log(result)

//const memes = document.querySelector



