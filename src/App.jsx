import { useState } from 'react'
import { Head } from './Components/Header'
import './style/global.css'
import style from './style/wrapper.module.css'
import SideBar from './Components/SideBar'
import Post from './Components/Post/Post'





function App() {

  return (
   <> 
   <Head />
 
    <div className={style.wrapper}>
    <SideBar />
    <Post />
    </div>



   </>
    
  )
}

export default App

// export default App -> forma padrão de exportar (aceita qualquer nome)
// export function - > named export ajuda a deixar o código mais seguro, pois não permite que na importação use qualquer nome deve sempre usar chaves na importação