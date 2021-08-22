const fontStacks = {
    'droid-serif': 'DroidSerif, serif',
    'times-new-roman': 'Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',
    'verdana': 'Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif',
    'georgia': 'Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif',
    'helvetica': 'Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif',
    'garamond': '"Palatino Linotype", Palatino, Palladio, "URW Palladio L", "Book Antiqua", Baskerville, "Bookman Old Style", "Bitstream Charter", "Nimbus Roman No9 L", Garamond, "Apple Garamond", "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook", "Century Schoolbook L", Georgia, serif'
}

const main = document.querySelector('main')
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
}