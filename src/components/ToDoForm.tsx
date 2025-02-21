import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";

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
    return (<div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" className="m-10 items-center text-center max-w-md " placeholder="Enter a Todo" value={todo}
               onChange={(e): void => handleIPChange(e, settodo)}></Input>
        <Button className="items-center" onClick={addToDo}>Add</Button>
    </div>)
}

export default ToDoForm;