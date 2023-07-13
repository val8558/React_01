import { useState } from 'react'
import { Head } from './Components/Header'
import './style/global.css'

function App() {

  return (
   <> 
   <Head />
   </>
    
  )
}

export default App

// export default App -> forma padrão de exportar (aceita qualquer nome)
// export function - > named export ajuda a deixar o código mais seguro, pois não permite que na importação use qualquer nome