import * as React from "react";
import {Todo} from "@/assignment-1/types/todo.ts";
import {Button} from "@/assignment-1/components/ui/button.tsx";

interface ToDoListProps {
    chnageStatus: (id: number) => void;
    delToDo: (id: number) => void;
    todos: Todo[];
}

const ToDoList: React.FC<ToDoListProps> = ({todos, chnageStatus, delToDo}) => {
    return (<ul>
        {todos.map((unit: Todo) => <>
                <li key={unit.id}>{unit.title}<em style={{margin: "10px"}}>Status:{unit.done}</em>
                    <Button style={{margin: "10px"}} onClick={() => chnageStatus(unit.id)}>Change Status
                    </Button>
                    <Button key={unit.id} style={{margin: "10px"}} onClick={() => delToDo(unit.id)}>Delete
                    </Button>
                </li>
            </>
        )}
    </ul>)
}

export default ToDoList