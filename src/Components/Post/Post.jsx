
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

    function deleteComment (commentToDelete) {
        const commentsWithoutDeleteCommente = comments.filter(comment => {
            return comment !== commentToDelete;
        }) 
        setComment(commentsWithoutDeleteCommente);
    }
// o metodo .filter que percorre os itens do array e filtra com base na propriedade aplicada

// imutabilidade -> nós nunca alteramos uma variavel na memoria da aplicação, ao inves disso criamos um novo espaço na memória, ou seja, quando usamos a função set do hook state não estamos atualizando o estado e criando um novo espaço. Isso acontece para que a aplicação seja mais performartico, já que ao criar um novo valor o React é mais rapido para ver as alteraçãoes e aplicar
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
                        return <p key={content.type}>{line.content}</p>
                    }
                    else if (line.type === 'link') {
                        return <p key={line.content}><a href="">{line.content}</a></p>
                    }
                })}
{/* no caso acima a key é colocada em ambos os objetos que poderam aparecer na tela, sendo que é sempre apresentada no primeiro elemento em tela */}
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
                    return <Cmt key={comment} content={comment} deleteComment={deleteComment}/>
                })}

            </div>
        </article>
    )
}

export default Post