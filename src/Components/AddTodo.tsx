import { ChangeEvent, FormEvent } from "react"

export type AddTodoProps = {
    task: string,
    handleSubmitTodo: (e:FormEvent) => void
    handleChange: (e:ChangeEvent) => void
}

export const AddTodo = ({ 
    task,
    handleSubmitTodo,
    handleChange
    }: AddTodoProps) => (
    <form onSubmit={handleSubmitTodo} className="flex justify-between w-full">
        <input 
            type="text" 
            name="task"
            placeholder="Please add a todo.." 
            value={task}
            className="flex-1 rounded shadow p-2 text-gray-dark mr-2" 
            onChange={handleChange} 
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" aria-label="Add a todo">
            Add Task
        </button>
    </form>
)