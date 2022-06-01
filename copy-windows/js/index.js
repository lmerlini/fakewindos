const menu = document.querySelector('[data-toggle="toggleMenu"]')

menu.addEventListener('click', (e) => {
    const activeMenu = document.querySelector('[data-toggle="active"]')
    activeMenu.classList.toggle('dados')
    activeMenu.classList.toggle('dados-off')
    menu.classList.toggle('checked')
})