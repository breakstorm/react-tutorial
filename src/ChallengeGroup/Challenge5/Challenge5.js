import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat tacos', done: false },
    { id: 2, title: 'Brew tea', done: false },
];

export default function Challenge5() {
    const [todos, setTodos] = useState(
        initialTodos
    );

    function handleAddTodo(title) {
        console.log('handleAddTodo ::: title:', title);
        const newId = todos.length;
        const newTodos = [...todos, {
            id: newId,
            title: title,
            done: false
        }];
        setTodos(newTodos);
        // not working
        /*todos.push({
            id: nextId++,
            title: title,
            done: false
        });*/
    }

    function handleChangeTodo(nextTodo) {
        const newTodos = todos.map(todo => {
            if (todo.id === nextTodo.id) {
                return {
                    ...todo,
                    title: nextTodo.title,
                    done: nextTodo.done
                }
            } else {
                return todo;
            }
        });
        setTodos(newTodos);
        // not working
        /*const todo = todos.find(t =>
            t.id === nextTodo.id
        );
        todo.title = nextTodo.title;
        todo.done = nextTodo.done;*/
    }

    function handleDeleteTodo(todoId) {
        const newTodos = todos.filter(todo => {
            return (todo.id === todoId) ? false : true;
        });
        setTodos(newTodos);

        // not working
        /*const index = todos.findIndex(t =>
            t.id === todoId
        );
        todos.splice(index, 1);*/
    }

    return (
        <>
            <h1>example 5</h1>
            <AddTodo
                onAddTodo={handleAddTodo}
            />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    );
}
