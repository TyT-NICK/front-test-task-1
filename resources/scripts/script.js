const currentUrlPath = window.location.pathname

const sideNavItems = document.querySelectorAll('.sidenav__item')
sideNavItems.forEach((item) => {
  const itemHref = item.getAttribute('href')
  if (itemHref === currentUrlPath) item.classList.add('active')
})

window.onscroll = (e) => {
  const header = document.querySelector('.header')
  const scrollTop = window.scrollY

  if (scrollTop > 60) header.classList.add('scrolled')
  else header.classList.remove('scrolled')
}
