// https://docs.google.com/document/d/1nUwLQwbkK4K0uthiljKA3jp-Xny_09PMAfqdmbhHhM4/edit

document.body.style.width = '100%'
document.body.style.display = 'flex'
document.body.style.flexFlow = 'column'
document.body.style.alignItems = 'center'
document.body.style.overflow = "hidden"

//top color = hsl(120, 90%, 85%)  pale green

// bottom color = hsl(200, 90%, 85%) pale blue

//diffrence between top adn bottom color in Hue, in hsl
let diffInHue = 80

//starting number, and ending number of for loop 
let startingPointOfLoop = 1
let endingPointOfLoop = 5
let amountOFLoops = endingPointOfLoop - startingPointOfLoop


//font size, in %
let startingFontSize = 69
let EndingFontSize = 269
let diffInFontSize = EndingFontSize - startingFontSize


//margin, in rem
let startingMargin = 0.3
let endingMargin = 2
let diffInMargin = endingMargin - startingMargin 


const ol = document.createElement("ol")

ol.style.paddingLeft = "0"
ol.style.width = "50%"
//variable that will be printed on each row
let stringToShow = "Rad"

//variable that show what iteration of the loop you are on
let currentLoop = 0

//creates and styles the first part of the assignment
for (let index = startingPointOfLoop; index <= endingPointOfLoop; index++) {
    
    //creates list item 
    let li = document.createElement("li")

    // sets what text will be shown on each line
    li.innerText = `${stringToShow} ${index}`
    
    // calculates what Hue, and what fontSize, and what margin, li should have each iteration of the loop
    let hueThisLoop = 120 + (diffInHue/amountOFLoops * currentLoop )
    let fontSizeThisLoop = startingFontSize + (diffInFontSize/amountOFLoops * currentLoop)
    let marginSizeThisLoop = startingMargin + (diffInMargin/amountOFLoops * currentLoop)

    //styling 
    li.style.listStyle = "none"
    li.style.textAlign = "center"
    li.style.marginTop = `${marginSizeThisLoop}rem`
    li.style.marginBottom = `${marginSizeThisLoop}rem`
    li.style.fontSize = `${fontSizeThisLoop}%`
    li.style.fontWeight = "bold"
    li.style.background = `hsl(${hueThisLoop}, 90%, 85%)`
    li.style.color = "hsl(239, 89%, 69%)" //blueish


    //appends to ol
    ol.appendChild(li)
    

    //variable that show how many iterations have been run
    currentLoop += 1
}

document.body.appendChild(ol);






//NEXT PART 






//contains the three lists
const div = document.createElement("div")

div.style.width = "50%"

let amountofIterationsForUl = 10 //defined up to 20

//the three lists
const ulLeft = document.createElement("ul")
const ulCenter = document.createElement("ul")
const ulRight = document.createElement("ul")

//styles list and sets text.alignment
styleUl(ulLeft)
ulLeft.style.textAlign = "left"

//styles list and sets text.alignment
styleUl(ulCenter)
ulCenter.style.textAlign = "center"

//styles list and sets text.alignment
styleUl(ulRight)
ulRight.style.textAlign = "right"


//loop for the left list
for (let index = 0; index < amountofIterationsForUl; index++) {

    //creates list item
    const li = document.createElement("li")

    li.innerText = index;


    //if index is even current li is styled with white text on black background
    if(index % 2 == 0){
        styleWhiteOnBlack(li)
    }
    
    //if index is 4 current li is styled with white text on lilac background
    if(index == 4){
        styleWhiteOnLilac(li)
    }

    //this iterations li is added to ulLeft
    ulLeft.appendChild(li)
}
//adds entire ulLeft list to div 
div.appendChild(ulLeft)


//loop for the center list
for (let index = 0; index < amountofIterationsForUl; index++) {
    //creates list item
    const li = document.createElement("li")

    //sets inner text to the current index
    li.innerText = index;


    //if index is even number current li is styled with white text on black background
    if(index % 2 == 0){
        styleWhiteOnBlack(li)
    }

    //if index is 8 current li is styled with white text on lilac background
    if(index == 8 ){
        styleWhiteOnLilac(li)
    }

    
    //this iteration's li is added to ulCenter
    ulCenter.prepend(li)
}

//adds entire ulCenter list to div
div.appendChild(ulCenter)


//array of the words
const numberNames = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio", "elva", "tolv", "tretton", "fjorton", "femton", "sexton", "sjuton", "arton", "nitton", "tjugo"]


//loop for the right list
for (let index = 0; index < amountofIterationsForUl; index++) {
    //creates list item
    const li = document.createElement("li")

    // sets this iteration's inner text to numberNames[index]
    li.innerText = numberNames[index]

    //numberNames[] starts with "ett", it is therfore one off, since arrays start at zero
    //line 165 will run when index is even, but numberNames[] is odd
    if(index % 2 == 0){
        styleWhiteOnBlack(li)
    }

    //if index is 5 styles with black text on lilac background 
    if(index == 5){
        styleBlackOnLilac(li)
    }
    
    
    //this iteration's li is added to ulRight
    ulRight.appendChild(li)
}
//adds entire ulRight list to div
div.appendChild(ulRight)



//div styling
div.style.display = "flex"
div.style.justifyContent = "space-evenly"
div.style.borderStyle = "solid"

//adds div to DOM 
document.body.appendChild(div)



//  whiteOnBlack     => white text on black background
function styleWhiteOnBlack(element){
    element.style.background = "hsl(0, 0%, 0%)" //black 
    element.style.color = "hsl(0, 0%, 100%)" //white
}

//  blackOnWhite     => black text on white background
function styleBlackOnWhite(element){
    element.style.background = "hsl(0, 0%, 100%)" //white 
    element.style.color = "hsl(0, 0%, 0%)" //black
}

//  whiteOnLilac     => white text on lilac background
function styleWhiteOnLilac(element){
    element.style.background = "hsl(240, 71%, 80%)" //kinda lilac 
    element.style.color = "hsl(0, 0%, 100%)" //white
}

//  blackOnLilac     => black text on lilac background
function styleBlackOnLilac(element){
    element.style.background = "hsl(240, 71%, 80%)" //kinda lilac 
    element.style.color = "hsl(0, 0%, 0%)" //black
}

//styles each of the three ul lists 
function styleUl (element){
    element.style.borderWidth = ".6rem"
    element.style.borderStyle = "solid"
    element.style.borderColor = "hsl(240, 71%, 80%)" //kinda lilac
    element.style.listStyle = "none"
    element.style.padding = "0"
    element.style.margin = "1%"
    element.style.width = "9%"
}