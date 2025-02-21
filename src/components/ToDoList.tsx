import * as React from "react";
import {Todo} from "../types/todo.ts";

interface ToDoListProps {
    chnageStatus: (id: number) => void;
    delToDo: (id: number) => void;
    todos: Todo[];
}

const ToDoList: React.FC<ToDoListProps> = ({todos, chnageStatus, delToDo}) => {
    return (<ul>
        {todos.map((unit: Todo) => <>
                <li key={unit.id}>{unit.title}<em style={{margin: "10px"}}>Status:{unit.done}</em>
                    <button style={{margin: "10px"}} onClick={() => chnageStatus(unit.id)}>Change Status
                    </button>
                    <button key={unit.id} style={{margin: "10px"}} onClick={() => delToDo(unit.id)}>Delete
                    </button>
                </li>
            </>
        )}
    </ul>)
}

export default ToDoList