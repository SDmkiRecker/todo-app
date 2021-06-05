type Todo = {
    id: string,
    task: string,
    isCompleted: boolean
}

type TodoProps = {
    todo: Todo
    handleDeleteTodo: (id: string) => void
    handleCheckTodo: (id: string) => void
}

export const Row = ({ 
    todo: { task, isCompleted, id },
    handleDeleteTodo,
    handleCheckTodo,
    }: TodoProps) => (
        
    <div
        className={`
            flex w-full p-4 mb-6 ml-auto mr-auto justify-between items-center shadow-lg rounded-full
            ${isCompleted ? "bg-green-400" : "bg-white"}
        `}        
    >
        <p
            className={`
                ml-2 font-sans font-medium
                ${isCompleted ? "text-white line-through" : "text-gray-700"} 
            `} 
        >{task}</p>
        <div className="w-auto flex justify-between items-center mr-2">
            <button 
                aria-label="Delete a todo"
                className="px-2 py-1 flex justify-center items-stretch bg-red-400 hover:bg-red-500 focus:outline-none text-white font-bold rounded-full"
                onClick={() => handleDeleteTodo(id)}>
                Delete
            </button>
            <input 
                type="checkbox"
                id="checkbox" 
                checked={isCompleted} 
                onChange={() => handleCheckTodo(id)}
                className="form-checkbox ml-2 h-7 w-7 rounded-full" 
            />
            <label htmlFor="checkbox"></label>
        </div>
    </div>
)