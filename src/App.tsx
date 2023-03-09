
import styles from './App.module.css'

import {Header} from "./components/Header"
import {Tasks} from './components/Tasks'


function App() {
  
  return (
    <div className={styles.container}>
      <Header/>

      <Tasks/>
      
    </div>
    
  )
}

export default App
