const elements = {
  mobileNav: document.getElementById('myLinksMobile'),
  mobileNavItems: document.querySelectorAll('#myLinksMobile a')
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
const toggleNav = () => {
  if (elements.mobileNav.style.display === 'block') {
    elements.mobileNav.style.display = 'none'
  } else {
    elements.mobileNav.style.display = 'block'
  }
}

elements.mobileNavItems.forEach(el => {
  el.addEventListener('click', () => {
    console.log('clicked')
    elements.mobileNav.style.display = 'none'
  })
})