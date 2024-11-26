
import { useState, Dispatch, SetStateAction } from 'react'
import { ContainerButton, ContainerCheck, ContainerItem, TrashContainer, NameOfTask } from './Item.style';

interface PropsItem {
   content : string;
   CompletedCounter: () => void;
   CompletedRemoval: () => void;
   listOfTasks : string[];
   setCountTasks: Dispatch<SetStateAction<number>>;
   setListOfTasks: Dispatch<SetStateAction<string[]>>;
}
export function Item ({content, CompletedCounter, CompletedRemoval, listOfTasks, setListOfTasks, setCountTasks} : PropsItem) {
   
    const[checkIn, setCheckIn] = useState(false)
    const [path, setPath] = useState("/src/assets/check.svg")

    function CheckItem () {
     const valor = checkIn.valueOf()
     if(valor === false) {
        CompletedCounter()
        setCheckIn(true)
        setPath("/src/assets/check-ok.svg")
     } else  {
        CompletedRemoval() 
        setCheckIn(false)
        setPath("/src/assets/check.svg")
     }
     
    }

    function DeleteTask () {
      let taskDeleted = listOfTasks.indexOf(content)
      listOfTasks.splice(taskDeleted, 1)
      setCountTasks(listOfTasks.length)
      let completedTaskRemoved = "/src/assets/check-ok.svg"
      if (completedTaskRemoved == path) {
         CompletedRemoval()
      } 
    }

    return (
        <ContainerItem>
           <ContainerCheck onClick={CheckItem}> <img src={path}/></ContainerCheck>
            <NameOfTask>{content}</NameOfTask>
           <ContainerButton onClick={DeleteTask} ><TrashContainer src="/src/assets/trash.svg"/> </ContainerButton>
        </ContainerItem>
    )
}