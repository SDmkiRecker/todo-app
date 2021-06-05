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
            placeholder="Please add a task.." 
            value={task}
            className="flex-1 shadow p-2 pl-4 h-10 text-gray-dark mr-2 rounded-full focus:outline-none" 
            onChange={handleChange}
            data-attribute-name="Todo" 
        />
        <button className="bg-blue-500 hover:bg-blue-700 focus:outline-none text-white font-bold py-2 px-4 rounded-full" aria-label="Add a todo">
            Save
        </button>
    </form>
)