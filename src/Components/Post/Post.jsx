
import Avatar from '../Avatar/Avatar';
import Cmt from './Cmt';
import style from './Post.module.css'
import { useState } from 'react';


function Post({ author, publishedAt, content }) {

    const [comments, setComment] = useState([
        "Teste de comentário",
    ])

    const [NewCommentText, setNewCommentText] = useState('')

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

    function CreateNewComment() {
        event.preventDefault()

        const NewCommentText = event.target.comment.value

        setComment([...comments, NewCommentText]);
        setNewCommentText('');

    }
    // o ... serve para ler o conteudo do array, enquanto o comments.lenght + 1 serve para adicionar sempre um comentário na lista, ou seja ele le a lista determina quantos tem e adiciona mais um

    function newCommentChange (){
        setNewCommentText (event.target.value)
    }

    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar hasBorder src={author.avatarUrl} />

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

                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>
                    }
                    else if (line.type === 'link') {
                        return <p><a href="">{line.content}</a></p>
                    }
                })}

            </div>

            <form onSubmit={CreateNewComment} className={style.commentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea name='comment' placeholder='Deixe um comentário'  onChange={newCommentChange} value={NewCommentText}/>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>

            </form>

            <div className={style.commentList}>
                {comments.map(comment => {
                    return <Cmt content={comment} />
                })}

            </div>
        </article>
    )
}

export default Post