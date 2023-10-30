let addBtn =document.querySelector(`.addbtn`)
let openModal =document.querySelector(`.modal`)
let modalClose =document.querySelector(`.close-btn`)
let titl = document.querySelector(`#title`)
let autho = document.querySelector(`#author`)
let page = document.querySelector(`#pages`)
let red =document.querySelector(`#read`)
let btn = document.querySelector(`.btn`)
let container = document.querySelector(`.content`)

addBtn.addEventListener(`click`,()=>{openModal.style.display=`block`})
modalClose.addEventListener(`click`,()=>{openModal.style.display=`none`})
window.addEventListener(`click`,(e)=>{
  if(e.target=== openModal){openModal.style.display=`none`}
})
const myLibrary = [];

function Book(title,author,pages,read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}
function addBookToLibrary(title, author, pages,read) {
  // do stuff here
  newBook = new Book(title, author, pages,read); 
  myLibrary.push(newBook); 
}

btn.addEventListener(`click`,function addbook(e){
  container.innerHTML = ''; // Clear the existing content in the container

  addBookToLibrary(titl.value,autho.value,page.value,red.value)
  openModal.style.display=`none`
  for(let i=0; i<myLibrary.length; i++){
    /*console.log(`${myLibrary[i].title}, ${myLibrary[i].author}, ${myLibrary[i].pages}, ${myLibrary[i].read}`)*/
    let bookInfo= document.createElement(`div`)
    let authorInput= document.createElement(`p`)
    let titleInput= document.createElement(`p`)
    let pageInput= document.createElement(`p`)
    let readInput= document.createElement(`button`)
    bookInfo.classList= `child`
    authorInput.textContent= `AUTHOR: ${myLibrary[i].author}`
    titleInput.textContent= `TITLE: ${myLibrary[i].title}`
    pageInput.textContent= `PAGES: ${myLibrary[i].pages}`
    if(red.value==`read`){
      readInput.textContent= `read`
    }
    else{
      readInput.textContent= ` not read`
    }
    readInput.addEventListener('click', function() {
      myLibrary[i].read = !myLibrary[i].read; // Toggle the "read" status
      // Update the button text based on the new "read" status
      readInput.textContent = myLibrary[i].read ? 'Read' : 'Unread';
    });

    bookInfo.appendChild(authorInput)
    bookInfo.appendChild(titleInput)
    bookInfo.appendChild(pageInput)
    bookInfo.appendChild(readInput)
    container.appendChild(bookInfo)

  }
  e.preventDefault()
})



