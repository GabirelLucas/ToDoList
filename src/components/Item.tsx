import Style from './Item.module.css'
import { useState } from 'react'

interface PropsItem {
   content : string;
   DeleteComent: (itemdeletado: string) => void;
   CompletedCounter: () => void;
   CompletedRemoval: () => void;
}
export function Item ({content, DeleteComent, CompletedCounter, CompletedRemoval} : PropsItem) {
   
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

    function CallDeleteComent () {
      
      DeleteComent(content)
    }

    return (
        <div className={Style.containerItem}>
           <button onClick={CheckItem} className={Style.check}> <img src={path}/></button>
            <p>{content}</p>
           <button onClick={CallDeleteComent} ><img src="/src/assets/trash.svg"  /> </button>
        </div>
    )
}