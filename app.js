
const list = document.querySelector('#book-list ul');

list.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})

var btn = document.getElementById("btn1");
var val = document.getElementById("val");

btn.addEventListener('click',function(e){
e.preventDefault();
console.log(val.value)

const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  bookName.className = 'name';
  deleteBtn.className = 'delete';

  bookName.textContent = val.value;
  deleteBtn.textContent = 'delete'

  li.appendChild(bookName);
  li.appendChild(deleteBtn)
  list.appendChild(li);
})


const bar = document.getElementById("search");
bar.addEventListener("keyup",function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) !== -1){
            book.style.display = 'block';
        }else{
            book.style.display = 'none'
        }
    })
})