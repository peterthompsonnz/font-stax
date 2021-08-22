const fontStacks = {
    'Droid Serif': 'DroidSerif, serif',
    'Times New Roman Stack': 'Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',
    'Verdana Stack': 'Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif',
    'Georgia Stack': 'Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif',
    'Helvetica Stack': 'Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif',
    'Garamond Stack': '"Palatino Linotype", Palatino, Palladio, "URW Palladio L", "Book Antiqua", Baskerville, "Bookman Old Style", "Bitstream Charter", "Nimbus Roman No9 L", Garamond, "Apple Garamond", "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook", "Century Schoolbook L", Georgia, serif'
}

const main = document.querySelector('main')
const mainHeading = document.querySelector('.main-heading')
const links = document.querySelectorAll('nav a')

links.forEach(link => addEventListener('click', handleNavigation))

function handleNavigation(evt) {
    evt.preventDefault()

    const currentLink = evt.target
    links.forEach(link => {
        if (link === currentLink) {
            link.classList.replace("link-colour", "current-link");
        } else {
            link.classList.replace("current-link", "link-colour");
        }
    })

    const fontName = currentLink.dataset.font
    main.style.fontFamily = fontStacks[fontName]
    mainHeading.innerHTML = fontName
}