interface ToDoFormProps {
    addToDo: () => void,
    settodo: React.Dispatch<React.SetStateAction<string>>,
    todo: string
}

const handleIPChange = (e: React.ChangeEvent<HTMLInputElement>, settodo: React.Dispatch<React.SetStateAction<string>>) => {
    settodo(e.target.value)
    return
}

const ToDoForm: React.FC<ToDoFormProps> = ({addToDo, settodo, todo}) => {
    return (<div>
        <input type="text" style={{margin: "10px"}} placeholder="Enter a Todo" value={todo}
               onChange={(e): void => handleIPChange(e, settodo)}></input>
        <button onClick={addToDo}>Add</button>
    </div>)
}

export default ToDoForm;