
import {Item} from '../item/Item'
import { NewTasks } from '../newTask/NewTasks'
import { useState  } from 'react'
import { IconImage, Infos, InfoStrong, MessageOfInfo, TaskContainer, TasksFinalized } from './Tasks.style'



export function Tasks () {

    const [listOfTasks, setListOfTasks] = useState<string[]>([])
    const [countTasks, setCountTasks] = useState(0)
    const [taskDoneCounter, setTaskDoneCounter] = useState(0)
   
    function SubmitItem ( NewTextItem: string ) {
        CounterTasks()
        setListOfTasks([...listOfTasks, NewTextItem])  
    }

     function CounterTasks () {
        setCountTasks(listOfTasks.length + 1)
     }

     function CompletedCounter () {
        setTaskDoneCounter(taskDoneCounter + 1)
     }

     function CompletedRemoval () {
        if(taskDoneCounter > 0){
        setTaskDoneCounter(taskDoneCounter - 1)
        }
     }
     
    
    return (
        <div>
            <NewTasks submit={SubmitItem}/>

            <TaskContainer >
                <Infos>
                    <InfoStrong>Tarefas Criadas {countTasks}</InfoStrong>
                    <TasksFinalized>Concluidas {`${taskDoneCounter} de ${countTasks}`}</TasksFinalized>
                </Infos>
               {
                listOfTasks.length == 0 ? (
                    <MessageOfInfo>
                        <IconImage id='primogenito' src="/src/assets/Clipboard.svg" />
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <small>Crie Tarefas e organize seus itens a fazer</small>
                    </MessageOfInfo>
                ) 
                    : 
                (
                    listOfTasks.map(item =>  {
                       
                        return (
                            <Item 
                                content={item}
                                key={item}
                                CompletedCounter={CompletedCounter} 
                                CompletedRemoval={CompletedRemoval}
                                listOfTasks={listOfTasks}
                                setListOfTasks={setListOfTasks}
                                setCountTasks={setCountTasks}
                            />
                        )
                    })
                )
               }
            </TaskContainer>
        </div>
    )
}