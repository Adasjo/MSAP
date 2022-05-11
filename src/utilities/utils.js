function debounce(func, timeout = 500) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => func(...args), timeout)
    }
}

function setTheme(theme) {
    let properties
    if(theme == "dark") {
        properties = {
            "--bg1": "rgb(10, 10, 10)",
            "--bg2": "rgb(20, 20, 20)",
            "--bg3": "rgb(31, 31, 31)",
            "--bg4": "rgb(46, 46, 46)",
            "--bordercol": "none",
            "--hovcol": "rgb(100, 100, 100)",
            "--textcol": "rgb(230, 230, 230)",
            "--textlight": "rgb(150, 150, 150)",
            "--sectextcol": "rgb(223, 223, 223)",
            "--imgcol": "invert(100%)",
            "--hovertrack": "rgb(31, 31, 31)",
            "--green": "#2ba54a",
            "--greenhover": "#3bc268",
            "--greenactive": "rgb(9, 172, 58)",
            "--red": "rgb(185, 80, 80)",
            "--redhover": "rgb(210, 100, 100)",
            "--redactive": "rgb(170, 88, 88)",
        }
    } else {
        properties = {
            "--bg1": "white",
            "--bg2": "white",
            "--bg3": "white",
            "--bg4": "rgb(243, 243, 243)",
            "--bordercol": "lightgrey",
            "--hovcol": "rgb(223, 223, 223)",
            "--textcol": "black",
            "--texthov": "rgb(160, 160, 160)",
            "--textlight": "rgb(100, 100, 100)",
            "--sectextcol": "grey",
            "--imgcol": "invert(0%)",
            "--hovertrack": "rgb(220, 220, 220)",
            "--green": "rgb(47, 175, 85)",
            "--greenhover": "rgb(72, 224, 118)",
            "--greenactive": "rgb(41, 167, 79)",
            "--red": "rgb(248, 97, 97)",
            "--redhover": "rgb(248, 134, 134)",
            "--redactive": "rgb(231, 117, 117)",
        }
    }
    Object.entries(properties).forEach(([key, value]) => {
        document.body.style.setProperty(key, value)
    })
}

export {
    debounce,
    setTheme
}