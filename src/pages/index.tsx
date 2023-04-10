import CardToDo from "@/components/molecules/CardToDo"
import { useState } from "react"
import { add_task } from '@/store/ducks/list'
import { RootState } from "@/store"
import { useSelector, useDispatch } from 'react-redux'

export default function Home() {
  
  const list = useSelector((state : RootState) => state.list.arr)
  const dispatch = useDispatch()
  const [ input, setInput ] = useState('')
  const handleSubmit = () => dispatch(add_task(input)) 

  return (
    <main className="bg-slate-300 h-screen flex justify-center items-center flex-col gap-8">

      <h1 className="text-xl font-bold">Todo List Test Redux Toolkit</h1>
      <div className="flex flex-col justify-center items-center gap-4">
        <input 
            className="outline-none rounded-md w-64 h-12 px-2" 
            type="text" 
            onChange={(event) => setInput(event.target.value)}
        />
        <button 
            className="bg-blue-500 w-32 h-12 rounded-md text-slate-200 font-bold" 
            onClick={handleSubmit}
            onKeyDown={(event) => event.key === 'Enter' ? handleSubmit : {}}
        >
        Enviar
        </button>
      </div>
      <div className="bg-slate-400 rounded-md flex flex-col" >
        {
         list.map((task) => <CardToDo key={`${task}-${Date.now()}`}>{task}</CardToDo>)
        }
      </div>
    </main>
  )
}
