import { useEffect, useState } from "react"
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import {nanoid} from "nanoid"
import Tasks from "./Todo"
import Filter from "./Filter"
import Form from "./Form"


function Main() {   

    const [todo, setTodo] = useState (
        JSON.parse(localStorage.getItem('todo')) || [
            { text: "Complete online JavaScript course", id: `task-${nanoid()}`, completed: true },
            { text: "Jog around the park 3x", id: `task-${nanoid()}`, completed: false },
            { text: "10 minutes meditation", id: `task-${nanoid()}`, completed: false },
            { text: "Read for 1 hour", id: `task-${nanoid()}`, completed: false },
            { text: "Pick up groceries", id: `task-${nanoid()}`, completed: false },
            { text: "Complete Todo App", id: `task-${nanoid()}`, completed: false },
        ]
    )
             
    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo))
    }, [todo])

    // Callback prop to get input data from <Form />
    function addItem(value) {
        setTodo((prevTodo) => {
            return [
                {text: value, id: `task-${nanoid()}`, completed: false },
                ...prevTodo
            ];
        })
    }


    function toggleStatus(id) {
        const updatedTodo =  todo.map((task) => {
            if (id === task.id) {
                return {...task, completed: !task.completed}
            }
            return task;
        });
        setTodo(updatedTodo);
    }

    // filter and exclude item whose id matches the id parameter recieved from <Task />
    function deleteItem(id) {
        const remainingItems = todo.filter((task) => id !== task.id)
        setTodo(remainingItems);
    }
    
    function clearCompleted() {
        console.log('cleared')
        const updatedList = todo.filter((task) =>  !task.completed)
        setTodo(updatedList)
    }

    const [filter, setFilter] = useState('all');
    // callback prop to get new filter value from <Filter />
    function handleFilterChange(newFilter) {
        setFilter(newFilter);
    }

    // display items based on current filter selection
    const todosToShow = todo.filter(task => {
        if (filter === 'all') {
            return true;
        } 
        else if (filter === 'active') {
            return !task.completed;
        } 
        else if (filter === 'completed') {
            return task.completed;
        }
    });

    
    // instead of mapping through [todo] im using the todosToshow 
    // to conditionaly display the selected filter tab 
    const items = todosToShow.map((task, index) => (
        <Tasks
            key={task.id} 
            id={task.id} 
            index={index} 
            task={task.text} 
            completed={task.completed} 
            toggleStatus={toggleStatus}
            deleteItem={deleteItem}
        />          
    ));
    
    function onDragEnd(result) {
        if (!result.destination){return;}
    
        const newTodo = Array.from(todo);
        const [movedTask] = newTodo.splice(result.source.index, 1);
        newTodo.splice(result.destination.index, 0, movedTask);
    
        setTodo(newTodo);
    }

    return (
        <main>
            <Form addItem={addItem}/>

            <DragDropContext onDragEnd={onDragEnd}>
                <div className="task-card">
                    <Droppable droppableId='droppable'>
                        {(provided) => (
                            <ul className="task-list" {...provided.droppableProps} ref={provided.innerRef} >
                                {items}
                                {provided.placeholder}
                            </ul>
                        )}
                    </Droppable>
                    <Filter 
                        filter={filter} 
                        itemsLeft={todo.length} 
                        clearCompleted={clearCompleted}
                        handleFilterChange={handleFilterChange} 
                    />
                </div>
            </DragDropContext>

        </main>
    )
}

export default Main