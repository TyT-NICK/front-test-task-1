const transitionTimer = 0.2
let isInTransition = false

const sideOverlay = document.querySelector('.side-overlay')
const sideTrigger = document.querySelector('.side-trigger')
const sideNav = document.querySelector('#sidenav')

sideOverlay.style.transition = `all ${transitionTimer}s ease-in-out`
sideNav.style.transition = `all ${transitionTimer}s ease-in-out`

const closeSideNav = (e) => {
  if (e.target === sideNav || isInTransition) {
    return
  }

  isInTransition = true

  sideOverlay.style.opacity = 0
  sideNav.classList.toggle('shown')

  setTimeout(() => {
    sideOverlay.style.display = 'none'
    isInTransition = false
  }, transitionTimer * 1000)

  toggleSideNav = openSideNav
}

const openSideNav = (e) => {
  if (isInTransition) {
    return
  }

  isInTransition = true

  sideNav.classList.toggle('shown')
  sideOverlay.style.display = 'block'

  setTimeout(() => {
    sideOverlay.style.opacity = 0.5
  }, 1)

  setTimeout(() => {
    isInTransition = false
  }, transitionTimer * 1000)

  toggleSideNav = closeSideNav
}

let toggleSideNav = openSideNav

sideOverlay.addEventListener('click', closeSideNav)

sideTrigger.addEventListener('click', (e) => {
  toggleSideNav(e)
})
