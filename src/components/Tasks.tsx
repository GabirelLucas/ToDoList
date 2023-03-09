import Style from './Tasks.module.css'
import {Item} from './Item'
import { NewTasks } from './NewTasks'
import { ChangeEvent, FormEvent, useState } from 'react'


export function Tasks () {

    const [NewTextItem, setNewTextItem] = useState('')
    const [NewItem, setNewItem] = useState([" "])
    const [countTasks, setCountTasks] = useState(0)
    const [taskDoneCounter, setTaskDoneCounter] = useState(0)

    function InitializedList () {
       const toDo = document.getElementsByClassName(Style.table)
       const elChild = toDo[0]
       elChild.innerHTML = "<Item content={item}/>"
    }
    
    function SubmitItem (event: FormEvent ) {
        event.preventDefault()
        CounterTasks()
        InitializedList()
        setNewItem([...NewItem, NewTextItem])
        setNewTextItem('')
        
    }

     function TextNewItem (event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault()
        setNewTextItem(event.target.value)
     }

     function DeleteComent(itemDelete: string) {
        RemoveTasks()
        const newList = NewItem.filter(itemofList => {
            return itemofList != itemDelete
        })
        setNewItem(newList)
     }

     function CounterTasks () {
        const criadas = NewItem.length + 1
        setCountTasks(criadas)
     }

     function RemoveTasks () {
       const removidas = NewItem.length - 1
      setCountTasks(removidas)
     }

     function CompletedCounter () {
        setTaskDoneCounter(taskDoneCounter + 1)
     }

     function CompletedRemoval () {
        setTaskDoneCounter(taskDoneCounter - 1)
     }

    
    return (
        <div>
            <NewTasks submit={SubmitItem} change={TextNewItem} valor={NewTextItem}/>

            <div className={Style.TaskContainer}>
                <header className={Style.info}>
                    <strong className={Style.infostrong}>Tarefas Criadas {countTasks}</strong>
                    <strong  className={Style.teste}>Concluidas {taskDoneCounter}</strong>
                </header>

                <div className={Style.table}>
                    <img id='primogenito' src="/src/assets/Clipboard.svg" />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <small>Crie Tarefas e organize seus itens a fazer</small>
                </div>
                
                {NewItem.map(item =>  {
                    return <Item content={item} DeleteComent={DeleteComent} CompletedCounter={CompletedCounter} CompletedRemoval={CompletedRemoval}/>
                })}
            </div>
        </div>
    )
}