import style from './Comment.module.css'
import deleteBin from  '../../assets/icon.svg'
import Avatar from '../Avatar/Avatar'
import { useState } from 'react'

function Cmt({content, deleteComment}) {

    const [likeCount, setLikeCount] = useState (0) 

    function handleDeleteComment() {
          return (deleteComment(content ))
          console.log("teste")
    }
    function handleLikeComment (){
        setLikeCount(likeCount + 1)
    }

    return (
        <>
            <div className={style.comment}>
                <Avatar hasBorder={false}  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXZhdGFyZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60" alt="" />



                <div className={style.commentBox}>
                    <div className={style.commentContent}>
                        <header>

                            <div className={style.author}>
                                <strong>Larissa Fernande</strong>
                                <time title='Publicado em 17/07' dateTime='2023-17-07 17:34:22' >Publicado há 1 hora</time>

                            </div>
                        
                            <button onClick={handleDeleteComment} title='Deletar Comentário'> Deletar
                            </button>
                        </header>
                        <p>{content}</p>
                    </div>
                    <footer>
                        <button onClick={handleLikeComment}>
                            Aplaudir <span>{likeCount}</span>
                        </button>

                    </footer>
                </div>
            </div>
        </>
    )
}

export default Cmt 

//