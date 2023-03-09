import { ChangeEvent, FormEvent } from 'react';
import Style from './NewTasks.module.css'

interface NewTasksProps {
    submit : (event: FormEvent) => void;
    change :(event: ChangeEvent<HTMLInputElement>) => void ;
    valor: string;
}

export function NewTasks({submit, change, valor}:NewTasksProps) {
    
    
    return (
        <div className={Style.submit} >
            <form onSubmit={submit}  >
                <input className={Style.input} onChange={change} value={valor} required type="text" placeholder="Adicione Uma Nova Tarefa" /> 
                <button className={Style.create} type='submit'>Criar <img src='/src/assets/plus.svg'/> </button>
            </form>
        </div>
    )
}

