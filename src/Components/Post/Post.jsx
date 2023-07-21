import {formatDistanceToNow} from 'date-fns';
import Avatar from '../Avatar/Avatar';
import Cmt from './Cmt';
import style from './Post.module.css'




function Post({author, publishedAt}) {

    const publishedDateFormat = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: "2-digit"
    }).format(publishedAt)   
    // forma nativa de lidar com datas no js. nesse formato usamos o intl para buscar as datas e aplicamos as propriendades 

    // const publishedDateRelative = formatDistanceToNow(plublishedAt, {
    //     addSuffix: true
    // })

    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar hasBorder src={author.avatarUrl}/>

                    <div className={style.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>


                <time title='' dateTime=''>
                {publishedDateFormat}
                </time>
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