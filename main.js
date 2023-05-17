window.addEventListener('load', () => {
  const menu = document.getElementById('menu')
  const links = document.getElementById('links')
  
  menu.addEventListener('click', () => {
    links.classList.toggle('open-menu')
  })
})