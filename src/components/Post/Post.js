import styles from './Post.module.css'

export function Post(props) {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.auhtor}>
                    <img className={styles.avatar} src='https://github.com/GerardoRodrigues.png'></img>
                    <div className={styles.authorInfo}>
                        <strong>Gerardo Rodrigues</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de Maio ás 08:13h' dateTime='2025-05-11 08:13:30'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera</p>
                <p>Fala galeraFala galeraFala galeraFala galeraFala galeraFala galeraFala galeraFala galera</p>
                <p>Fala galeraFala galera</p>
            </div>
        </article>
    );
}
