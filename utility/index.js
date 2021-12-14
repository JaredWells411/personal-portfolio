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

const urlArray = ['https://youtu.be/6Fdpuhib4Dc?t=33', 'https://youtu.be/U9t-slLl30E?t=14', 'https://youtu.be/dQw4w9WgXcQ', 'https://www.youtube.com/watch?v=O6SEXp3-lo8', 'https://www.youtube.com/watch?v=CPRTfs9PYHU', 'https://youtu.be/FKXharUfPVQ?t=2', 'https://media.makeameme.org/created/when-you-trick-5b0431.jpg', 'https://lh3.googleusercontent.com/proxy/ELaLCi97-Izz1PMofEAs2dIhpr5k_2sgvM1O8kq7ptiN54G30y04wGPJiIfcl5uWE4ujQdd6Hv_5yprpM1p0KJ01R_cMsbxjlAnpGzkZJKby5Dm7Ct4TAl4CPGb2-fkH1sPueh-obC23Y8i7HEuPqCfVblsm1PXR03A', 'https://i.annihil.us/u/prod/marvel/i/mg/f/80/5da4ca693ffa6/clean.jpg']

const memes = document.querySelector ('#memes')
memes.addEventListener('click', () => {
    const randomNum = getRandomMeme()
    memes.href = urlArray[randomNum]
})

function getRandomMeme() {
    return Math.floor(Math.random() * urlArray.length)
}
