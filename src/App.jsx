import { useState } from 'react'
import { Head } from './Components/Header'
import './style/global.css'
import style from './style/wrapper.module.css'
import SideBar from './Components/SideBar'
import Post from './Components/Post/Post'


const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXZhdGFyZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60",
      name:   "Cintia devos",
      role: 'CTO'
    },

      content: [
          {
            type: 'paragraph', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perferendis error libero distinctio voluptatum officia quidem, voluptates, ducimus suscipit aperiam adipisci. Rerum alias tempore esse molestias, veritatis corrup",
          },
          {
            type: 'paragraph', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perferendis error libero distinctio voluptatum officia quidem, voluptates, ducimus suscipit aperiam adipisci. Rerum alias tempore esse molestias, veritatis corrup"
          },
          {
            type: "link", content: "www.linkedin.com/feed/" 
          }
      ],

      publishedAt: new Date('2023-21-07 20:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      name:   "Roberto Barros",
      role: 'Full Stack Developer'
    },

      content: [
          {
            type: 'paragraph', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perferendis error libero distinctio voluptatum officia quidem, voluptates, ducimus suscipit aperiam adipisci. Rerum alias tempore esse molestias, veritatis corrup",
          },
          {
            type: 'paragraph', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perferendis error libero distinctio voluptatum officia quidem, voluptates, ducimus suscipit aperiam adipisci. Rerum alias tempore esse molestias, veritatis corrup"
          },
          {
            type: "link", content: "www.linkedin.com" 
          }
      ],

      publishedAt: new Date('2023-21-07 10:00')
    
  }
]




function App() {

  return (
   <> 
   <Head />
 
    <div className={style.wrapper}>
    <SideBar />
    <main>
      {post.map(post => {
        return (
        <Post 
          author={post.author}
          content ={post.content}
          Date ={post.publishedAt}


        
        />)
      })}
    </main>
    </div>



   </>
    
  )
}

export default App

// export default App -> forma padrão de exportar (aceita qualquer nome)
// export function - > named export ajuda a deixar o código mais seguro, pois não permite que na importação use qualquer nome deve sempre usar chaves na importação