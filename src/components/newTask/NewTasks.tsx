import { ContaineNewTask, CreateButton, FormContainer, InputNewTask } from './NewTasks.style';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const TasksFormSchema = z.object({
    newTask: z.string().min(1, 'informe a tarefa')
})

type TaskFormInputs = z.infer<typeof TasksFormSchema>


interface NewTasksProps {
    submit : (NewTextItem: string) => void;
}

export function NewTasks({ submit }:NewTasksProps) {
    
    const {register, handleSubmit, reset, watch} = useForm<TaskFormInputs>({
        resolver: zodResolver(TasksFormSchema),
        defaultValues : {
            newTask : ""
        }
    })
    const taskInvalid = watch('newTask')

    function handleAddNewTask (data: TaskFormInputs) {
       submit(data.newTask)
       reset()
    } 
    
    return (
        <ContaineNewTask >
            <FormContainer onSubmit={handleSubmit(handleAddNewTask)} >
                <InputNewTask 
                    required type="text" 
                    placeholder="Adicione Uma Nova Tarefa"
                    {...register("newTask")}
                /> 
                <CreateButton  type='submit' disabled={!taskInvalid} >
                    Criar 
                    <img src='/src/assets/plus.svg'/> 
                </CreateButton>
            </FormContainer>
        </ContaineNewTask>
    )
}

