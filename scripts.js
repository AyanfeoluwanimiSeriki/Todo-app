const themeToggle = document.getElementById('theme');
const newItemInput = document.getElementById('addItem');
const todoList = document.querySelector('.content ul');
const itemsLeft = document.querySelector('.items-left span');
const clearCompleted = document.querySelector('.clear');
const filterOptions = document.querySelectorAll('.filter input');


window.addEventListener('DOMContentLoaded', () => {
    todoList.innerHTML = ''; 
    updateItemsLeft();
});


function updateItemsLeft() {
    const uncheckedItems = document.querySelectorAll('.list-item input[type="checkbox"]:not(:checked)');
    itemsLeft.innerText = uncheckedItems.length;
}


function createNewTodoItem(value) {
    const li = document.createElement('li');
    li.className = 'flex-row';

    li.innerHTML = `
        <label class="list-item">
            <input type="checkbox" name="todoItem">
            <span class="checkmark"></span>
            <span class="text">${value}</span>
        </label>
        <span class="remove"></span>
    `;

    
    const checkbox = li.querySelector('input[type="checkbox"]');
    const removeBtn = li.querySelector('.remove');

    
    checkbox.addEventListener('change', () => {
        updateItemsLeft();
        filterTodos();
    });

    
    removeBtn.addEventListener('click', () => {
        li.remove();
        updateItemsLeft();
    });

    todoList.appendChild(li);
    updateItemsLeft();
}


document.querySelector('.add-new-item span').addEventListener('click', () => {
    if (newItemInput.value.trim().length > 0) {
        createNewTodoItem(newItemInput.value);
        newItemInput.value = '';
    }
});


newItemInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && newItemInput.value.trim().length > 0) {
        createNewTodoItem(newItemInput.value);
        newItemInput.value = '';
    }
});


themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.add('theme-light');
        document.body.classList.remove('theme-dark');
    } else {
        document.body.classList.add('theme-dark');
        document.body.classList.remove('theme-light');
    }
});


clearCompleted.addEventListener('click', () => {
    const completedItems = document.querySelectorAll('.list-item input[type="checkbox"]:checked');
    completedItems.forEach(item => item.closest('li').remove());
    updateItemsLeft();
});


filterOptions.forEach(option => {
    option.addEventListener('change', filterTodos);
});


function filterTodos() {
    const allItems = document.querySelectorAll('.content ul li');
    filterOptions.forEach(option => {
        if (option.checked) {
            allItems.forEach(item => {
                const isChecked = item.querySelector('input[type="checkbox"]').checked;
                if (option.id === 'active' && isChecked) {
                    item.style.display = 'none';
                } else if (option.id === 'completed' && !isChecked) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'flex';
                }
            });
        }
    });
}


updateItemsLeft();
