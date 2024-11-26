
import styles from './App.module.css'

import {Header} from "./components/header/Header"
import {Tasks} from './components/tasks/Tasks'


function App() {
  
  return (
    <div className={styles.container}>
      <Header/>

      <Tasks/>
      
    </div>
    
  )
}

export default App
