import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';
import styles from './Post.module.css'

export function Post(props) {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src='https://github.com/RomuloLim.png'/>
                    <div className={styles.authorInfo}>
                        <strong>{props.author}</strong>
                        <span>{props.profession}</span>
                    </div>
                </div>

                <time title='11 de Maio ás 08:13h' dateTime='2025-05-11 08:13:30'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera</p>
                <p>Fala galeraFala galeraFala galeraFala galeraFala galeraFala galeraFala galeraFala galera</p>
                <p><a href='#'>Fala galeraFala galera</a></p>
                <p>
                    <a href='#'>Fala galera </a>
                    <a href='#'>Fala galera</a>
                </p>
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
