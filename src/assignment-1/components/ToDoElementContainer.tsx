import {useState} from "react";
import ToDoForm from "@/assignment-1/components/ToDoForm.tsx";
import ToDoList from "@/assignment-1/components/ToDoList.tsx";
import {Todo} from "@/assignment-1/types/todo.ts";

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
        const operatedTodos = todos.filter(unit => unit.id != id)
        settodos(operatedTodos);
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
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl py-10">Todo Application</h1>
            <ToDoForm addToDo={addToDo} settodo={settodo} todo={todo}/>
            <h2>My Todos</h2>
            <ToDoList chnageStatus={chnageStatus} delToDo={delToDo} todos={todos}></ToDoList>
        </div>
    )
}

export default ToDoElementContainer;