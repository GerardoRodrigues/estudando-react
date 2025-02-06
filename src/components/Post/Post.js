/* eslint-disable no-restricted-globals */
import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import styles from "./Post.module.css";
import { useState } from "react";

export function Post(props) {
  const [comments, setComments] = useState(["Post massa demais mano"]);

  const [newCommentText, setNewCommentText] = useState([""]);

  const dateTitle = format(props.publishedAt, "dd 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  });

  const dateRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function createNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function newCommentChange() {
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const newCommentList = comments.filter(comment => {
      return comment !== commentToDelete;
    });
    setComments(newCommentList);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.profession}</span>
          </div>
        </div>

        <time title={dateTitle} dateTime={props.publishedAt.toISOString()}>
          {dateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {props.content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={createNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea name="comment" placeholder="Deixe um comentário" onChange={newCommentChange} value={newCommentText} />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment key={comment} content={comment} deleteComment={deleteComment} />;
        })}
      </div>
    </article>
  );
}
