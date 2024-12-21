
let listItems = document.querySelectorAll('button');
function li(e){
    e.target.style.color = "lightgray"
}
listItems.forEach(list =>{
    list.addEventListener("click" , li)
})



const listItems2 = document.querySelectorAll('button');


listItems2.forEach((item) => {
    item.addEventListener('click', function handleClick() {
    
        item.style.textDecoration = 'line-through';
        item.style.color = 'blue';

   
        item.removeEventListener('click', handleClick);
    });
});


document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        console.log('ENTER');
    }
});

