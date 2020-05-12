import React, { Component } from 'react';
import '../todo.css'

export class ToDo extends Component {
    state = {
        todoItems : []
    }

    componentDidMount=()=>{
        var list = document.querySelector('.js-todo-list');
        list.addEventListener('click',event=>{
            if(event.target.classList.contains("js-tick")){
                var itemkey = event.target.parentElement.dataset.key;
                this.toggleDone(itemkey);
            }
            if(event.target.classList.contains('js-delete-todo')){
                var itemkey = event.target.parentElement.dataset.key;
                this.deleteTodo(itemkey);
            }
        });
    }

    toggleDone=(key)=>{
        const {todoItems} = this.state
        var index = todoItems.findIndex(item => item.id===Number(key));
        todoItems[index].checked = !todoItems[index].checked;

        var item = document.querySelector(`[data-key='${key}']`);
        if (todoItems[index].checked){
            item.classList.add("done");
        }else{
            item.classList.remove("done");
        }
    }

    deleteTodo=(key)=>{
        let todoItems = [...this.state.todoItems]
        todoItems = todoItems.filter(item=> item.id!==Number(key))
        var item = document.querySelector(`[data-key='${key}']`);
        item.remove();

        var list = document.querySelector('.js-todo-list');
        if (todoItems.length === 0) {list.innerHTML = '';}

        this.setState({ todoItems });
    }

    addTodo=(text)=>{

        let todoItems = [...this.state.todoItems]

        var todo = {
            text,
            checked: false,
            id: Date.now(),
        };
    
        todoItems.push(todo);

        this.setState({ todoItems });

        var todolist = document.querySelector(".js-todo-list");
        todolist.insertAdjacentHTML('beforeend',
        `<li class="todo-item" data-key="${todo.id}">
          <input id="${todo.id}" type="checkbox"/>
          <label for="${todo.id}" class="tick js-tick"></label>
          <span>${todo.text}</span>
          <button class="delete-todo js-delete-todo">
            <svg><use href="#delete-icon"></use></svg>
          </button>
        </li>
        `);
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        var input = document.querySelector(".js-todo-input");

        var text = input.value.trim();
        if(text!==""){
            this.addTodo(text);
            input.value = "";
            input.focus();
        }
    }

    handleClick=(event)=>{
        if(event.target.classList.contains("js-tick")){
            var itemkey = event.target.parentElement.dataset.key;
            this.toggleDone(itemkey);
        }
        if(event.target.classList.contains('js-delete-todo')){
            var itemkey = event.target.parentElement.dataset.key;
            this.deleteTodo(itemkey);
        }
    }

    render() {
        return (
            <div>
                <div className="todo">
                <h1 className="app-title">todos</h1>
                <ul className="todo-list js-todo-list"></ul>
                <div className="empty-state">
                    <svg className="checklist-icon"><use href="#checklist-icon"></use></svg>
                    <h2 className="empty-state__title">Add your first todo</h2>
                    <p className="empty-state__description">What do you want to get done today?</p>
                </div>
                <form className="js-form" onSubmit={this.handleSubmit}>
                    <input autofocus type="text" aria-label="Enter a new todo item" placeholder="E.g. Build a web app" className="js-todo-input" />
                </form>
                </div>
            </div>
        )
    }
}

export default ToDo
