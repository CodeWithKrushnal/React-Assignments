import {useState} from "react";
import ToDoForm from "@/components/ToDoForm";
import ToDoList from "@/components/ToDoList";
import {Todo} from "@/types/todo";

const ToDoElementContainer = () => {
    const [todo, settodo] = useState<string>("")
    const [todos, settodos] = useState<Todo[]>([])

    const addToDo: () => void = (): void => {
        if (todo == "") {
            return;
        }
        const newtodo: Todo = {
            id: Date.now(),
            title: todo,
            done: "Pending",
        }
        settodos([...todos, newtodo])
        settodo("")
    }

    const delToDo: (id: number) => void = (id: number): void => {
        settodos(todos.filter(unit => unit.id != id));
    }

    const chnageStatus: (id: number) => void = (id: number): void => {
        const operatedTodos = todos.map((unit: Todo) => {
                if (unit.id === id) {
                    if (unit.done === "Pending") {
                        const newtodo: Todo = {...unit, done: "Complete"}
                        return newtodo
                    } else {
                        const newtodo: Todo = {...unit, done: "Pending"}
                        return newtodo
                    }
                } else {
                    return unit;
                }
            },
        )
        settodos(operatedTodos)
        ;
    }

    return (
        <div>
            <h1>Todo Application</h1>
            <ToDoForm addToDo={addToDo} settodo={settodo} todo={todo}/>
            <h2>My Todos</h2>
            <ToDoList chnageStatus={chnageStatus} delToDo={delToDo} todos={todos}></ToDoList>
        </div>
    )
}

export default ToDoElementContainer;