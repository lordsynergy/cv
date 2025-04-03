document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle')
    if (!toggleBtn) return

    const icon = toggleBtn.querySelector('i')
    const savedTheme = localStorage.getItem('theme')

    const setDarkTheme = (isDark) => {
        document.body.classList.toggle('dark-theme', isDark)
        if (icon) {
            icon.classList.remove('bi-moon', 'bi-sun')
            icon.classList.add(isDark ? 'bi-sun' : 'bi-moon')
        }
        localStorage.setItem('theme', isDark ? 'dark' : 'light')
    }

    setDarkTheme(savedTheme === 'dark')

    toggleBtn.addEventListener('click', () => {
        const isDark = !document.body.classList.contains('dark-theme')
        setDarkTheme(isDark)
    })

    if (window.AOS) {
        AOS.init({ duration: 700, once: true })
    }
})
