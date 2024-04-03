import {useReducer, useState} from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import {useImmer, useImmerReducer} from "use-immer";

export default function Example27() {

    // const [tasks, setTasks] = useState(initialTasks);
    // const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
    const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);
    function taskReducer(draft, action) {
        switch (action.type) {
            case 'add':
                draft.push({
                    id: action.id
                    , text: action.text
                    , done: action.done
                })
                break;
            case 'change':
                const index = draft.findIndex((t) => t.id === action.task.id);
                draft[index] = action.task
                break;
            case 'delete':
                return draft.filter((t) => t.id !== action.id);
                break;
            default:
                throw new Error('Unknown action type', action);
        }
    }

    function handleAddTask(text) {
        dispatch({
            type: 'add'
            , id: nextId++
            , text: text
            , done: false
        })
    }

    function handleChangeTask(task) {
        dispatch({
            type: 'change'
            , task: task
        })
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type: 'delete'
            , id: taskId
        })
    }

    return (
        <>
            <h1>Example 27 SS</h1>
            <h2>Prague itinerary</h2>
            <AddTask onAddTask={handleAddTask}/>
            <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
    );
};

let nextId = 3;
const initialTasks = [
    {id: 0, text: 'Visit Kafka Museum', done: true},
    {id: 1, text: 'Watch a puppet show', done: false},
    {id: 2, text: 'Lennon Wall pic', done: false},
];
