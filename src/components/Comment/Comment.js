import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "../Avatar/Avatar";
import { useState } from "react";

export function Comment(props) {

  const [likeCount, setLikeCount] = useState(0);

  function liked() {
    setLikeCount(likeCount + 1);
  }

  function deletComment() {
    props.deleteComment(props.content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/GerardoRodrigues.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gerardo Rodrigues</strong>
              <time title="11 de Maio ás 08:13h" dateTime="2025-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={deletComment} title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>{props.content}</p>
        </div>

        <footer>
          <button onClick={liked}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
