function debounce(func, timeout = 500) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => func(...args), timeout)
    }
}

function setTheme(theme) {
    if(theme == "dark") {
        document.documentElement.style.setProperty("--backg", "black")
        document.documentElement.style.setProperty("--hovcol", "grey")
        document.documentElement.style.setProperty("--textcol", "white")
        document.documentElement.style.setProperty("--sectextcol", "rgb(223, 223, 223)")
        document.documentElement.style.setProperty("--imgcol", "invert(100%)")
    } else {
        document.documentElement.style.setProperty("--backg", "white")
        document.documentElement.style.setProperty("--hovcol", "rgb(223, 223, 223)")
        document.documentElement.style.setProperty("--textcol", "black")
        document.documentElement.style.setProperty("--sectextcol", "grey")
        document.documentElement.style.setProperty("--imgcol", "invert(0%)")
    }
}

export {
    debounce,
    setTheme
}