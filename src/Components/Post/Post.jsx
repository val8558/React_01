import Avatar from '../Avatar/Avatar'
import Cmt from './Cmt'
import style from './Post.module.css'




function Post() {
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar hasBorder src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXZhdGFyZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60"/>

                    <div className={style.authorInfo}>
                        <strong>Laura Rizzi</strong>
                        <span>psicologa</span>
                    </div>
                </div>


                <time title='Publicado em 17/07' dateTime='2023-17-07 17:34:22' >Publicado há 1 hora</time>
            </header>

            <div className={style.content}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque excepturi temporibus natus illo aliquid a. Deleniti dolor quos facere architecto possimus, dignissimos mollitia a quam harum magni, doloribus enim maiores?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque excepturi temporibus natus illo aliquid a. Deleniti dolor quos facere architecto possimus, dignissimos mollitia a quam harum magni, doloribus enim maiores?</p>
            </div>

            <form className={style.commentForm}>

                <strong>Deixe seu Feedback</strong>

                <textarea placeholder='Deixe um comentário' />

                <footer><button type='submit'>Publicar</button>
                </footer>

            </form>

            <div className={style.commentList}>
               <Cmt />
               <Cmt />
               <Cmt />
            </div>
        </article>
    )
}

export default Post