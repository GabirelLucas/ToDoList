import Style from './Header.module.css'

export function Header () {
  
    return (
        <div className={Style.header}>
            <img src="/src/assets/Logo-ToDoList.svg" />
        </div>
    )
}