import style from './Comment.module.css'
import deleteBin from  '../../assets/icon.svg'
import Avatar from '../Avatar/Avatar'

function Cmt() {
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
                        
                            <button title='Deletar Comentário'> Deletar
                            </button>
                        </header>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quasi voluptatibus repudiandae consequatur porro ex, iure repellat? Nesciunt optio quidem maxime ipsam sed, veritatis laborum, nihil consequuntur nam ea obcaecati?</p>
                    </div>
                    <footer>
                        <button>
                            Aplaudir <span>20</span>
                        </button>

                    </footer>
                </div>
            </div>
        </>
    )
}

export default Cmt 