import { useDispatch } from "react-redux"
import { remove_task } from "@/store/ducks/list/"

interface CardToDoProps {
    children: React.ReactNode
}

export default function CardToDo ({children} : CardToDoProps) {
    const dispatch = useDispatch()
    const handleOnClick = () => dispatch(remove_task(children?.toString()))

    return (
        <div className="max-w-lg min-w-[240px] min-h-[64px] mx-6 flex justify-between items-center">
            <p>
                {children}
            </p>
            <button 
                className="bg-red-500 p-2 hover:opacity-40 rounded-xl text-slate-300"
                onClick={handleOnClick}
            >Remove</button>
        </div>
    )
}