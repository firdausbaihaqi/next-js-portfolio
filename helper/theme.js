const initTheme = () => {
    if (localStorage.getItem('theme') === null) {
        localStorage.setItem('theme', 'light')
    } else {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }
}

const toggleTheme = () => {
    if (localStorage.theme === 'dark') {
        localStorage.theme = 'light'
        document.documentElement.classList.remove('dark')
    } else {
        localStorage.theme = 'dark'
        document.documentElement.classList.add('dark')
    }

    // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem('theme')
}

const isDarkTheme = () => {
    if (localStorage.getItem('theme') === null) {
        return false
    } else {
        if (localStorage.theme === 'dark') {
            return true
        }
        return false
    }
}

export { initTheme, toggleTheme, isDarkTheme }