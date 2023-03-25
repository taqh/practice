import cross from '../assets/icon-cross.svg'
import { Draggable } from 'react-beautiful-dnd'


function Tasks(props) {
    return (
        <Draggable key={props.id} draggableId={props.id} index={props.index}>
            {(provided, snapshot) => (
                <li 
                    className={`task ${snapshot.isDragging ? "dragging" : ""}`}
                    ref={provided.innerRef} 
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps}      
                >
                    <label className='wrap'>
                        <input 
                            id={props.id}
                            type="checkbox" 
                            className="done" 
                            checked={props.completed}
                            onChange={() => props.toggleStatus(props.id)}
                        />
                        <p className='text'>{props.task}</p>
                        <button onClick={() => props.deleteItem(props.id)} className='delete'>
                            <img src={cross} className='cross' alt='delete icon'/>
                            <span className='visually-hidden'>Delete item</span>
                        </button>
                    </label>
                </li>
            )}
        </Draggable>
    )
} 

export default Tasks