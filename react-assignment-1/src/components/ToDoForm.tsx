import {ChangeEvent} from "react";

interface ToDoFormProps {
    addToDo: () => void,
    settodo: React.Dispatch<React.SetStateAction<string>>,
    todo: string
}

const ToDoForm: React.FC<ToDoFormProps> = ({addToDo, settodo, todo}) => {
    return (<div>
        <input type="text" style={{margin: "10px"}} placeholder="Enter a Todo" value={todo}
               onChange={(e: ChangeEvent<HTMLInputElement>): void => settodo(e.target.value)}></input>
        <button onClick={addToDo}>Add</button>
    </div>)
}

export default ToDoForm;