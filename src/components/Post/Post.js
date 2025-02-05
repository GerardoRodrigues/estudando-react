import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'

export function Post(props) {
    const dateTitle = format(props.publishedAt, "dd 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR
    })

    const dateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={props.author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.profession}</span>
                    </div>
                </div>

                <time title={dateTitle} dateTime={props.publishedAt.toISOString()}>{dateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {props.content.map(line => {
                    if(line.type === 'paragraph') {
                        return <p>{line.content}</p>
                    } else if(line.type === 'link') {
                        return <p><a href='#'>{line.content}</a></p>
                    }
                })}
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário' />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}
