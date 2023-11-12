// const todosTemplate = todos.map(t => {
        //     return '<li>' + t + '</li>';
        // })    
        // console.log(todosTemplate); Version compleja de Map.
        //Verion simple de map.

const todos = JSON.parse(localStorage.getItem('todos')) || [];
const todosALL = [];
const render = () => {
    const todoList  = document.getElementById('toDo-list');
    const todosTemplate = todos.map(t => '<li>' + t + '</li>') ; 
    todoList.innerHTML = todosTemplate.join('');
    const elementos = document.querySelectorAll('#toDo-list li')
    elementos.forEach((elemento, i) => {
        elemento.addEventListener('click',() =>{
            elemento.parentNode.removeChild(elemento);
            todos.splice(i, 1);
            actualizaTodos();
            render();
        })
    })
}
const actualizaTodos = (todosAll) =>{
    const todoStrings = JSON.stringify(todosALL);
    localStorage.setItem('todos', todoStrings);
}

window.onload = () => {
    render();
    const form = document.getElementById('toDo-form');
    
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value = '';
        todos.push(todoText);
        actualizaTodos(todos);
        render();
    };
}
