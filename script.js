const theme = document.getElementById('theme');
const newItemInput = document.getElementById('addItem');
const todoList = document.getElementById('.content ul');
const itemsLeft = document.getElementById('.items-left span');

itemsLeft.innerText = document.querySelectorAll('.list-item input[type="checkbox"]');

theme.addEventListener('click', () => {
    document.body.classList.toggle('theme-light', theme.checked);
});


document.querySelector('add-new-item span').addEventListener('click', () =>{
    if(newItemInput.value.length > 0){
        createNewTodoItem(newItemInput.value);
        newItemInput.value= ''
    }
});
newItemInput.addEventListener('keypress', (e) => {
    if (e.charCode === 13 && newItemInput.value.length > 0){
        createNewTodoItem(newItemInput.value);
        newItemInput.value = '';
    }
});
// function createNewTodoItem(text)








// const theme = document.getElementById('theme');
// const newItemInput = document.getElementById('addItem');
// const todoList = document.querySelector('.content ul');
// const itemsLeft = document.querySelector('.items-left span');

// // Update items left count
// itemsLeft.innerText = document.querySelectorAll('.list-item input[type="checkbox"]').length;

// // Toggle theme
// theme.addEventListener('click', () => {
//     document.body.classList.toggle('theme-light', theme.checked);
// });

// // Add new todo item
// document.querySelector('.add-new-item span').addEventListener('click', () => {
//     if (newItemInput.value.length > 0) {
//         createNewTodoItem(newItemInput.value);
//         newItemInput.value = '';
//     }
// });
