// Make a div

const div = document.createElement('div')
// add a class of wrapper to it
div.classList.add('wrapper')


// put it into the body
document.body.appendChild(div)

// make an unordered list
// add three list items with the words "one, two three" in them

const ul = `
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
`

// put that list into the above wrapper
div.innerHTML = ul;

// create an image
const img = document.createElement('img')


// set the source to an image
img.src = 'https://picsum.photos/500'


// set the width to 250
img.width = 250
img.height = 250

// add a class of cute
img.classList.add('cute')
// add an alt of Cute Puppy
img.alt = 'Cute Puppy'
// Append that image to the wrapper
div.appendChild(img)

// with HTML string, make a div, with two paragraphs inside of it
const div2 = `
  <div class="div2">
    <p>One</p>
    <p>Two</p>
  </div>
`

const ulElement = div.querySelector('ul')
// put this div before the unordered list from above
ulElement.insertAdjacentHTML('beforebegin', div2)

// add a class to the second paragraph called warning

const div2Element = div.querySelector('.div2')
div2Element.children[1].classList.add('warning')

// remove the first paragraph

div2Element.firstElementChild.remove()

// create a function called generatePlayerCard that takes in three arguments: name, age, and height


// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  const html = `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
      <button type="button" class="delete">&times Delete</button>
    </div >
  `
  return html
}


// make a new div with a class of cards

const card = document.createElement('div')
card.classList.add('cards')

// Have that function make 4 cards

let cardHtml = generatePlayerCard('Panther', 22, 200)
cardHtml += generatePlayerCard('Vnk', 25, 200)
cardHtml += generatePlayerCard('Dgen', 25, 200)
cardHtml += generatePlayerCard('Sherry', 22, 200)

// append those cards to the div

card.innerHTML = cardHtml
div.insertAdjacentElement('beforebegin', card)

// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener

const buttons = document.querySelectorAll('.delete')

function deleteCard(event) {
  console.log('Event :', event)
  const btnClicked = event.currentTarget
  btnClicked.parentElement.remove()
}

buttons.forEach(button => button.addEventListener('click', deleteCard))

console.log('test :', div)