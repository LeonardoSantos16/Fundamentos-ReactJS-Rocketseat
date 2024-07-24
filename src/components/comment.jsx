import styles from './comment.module.css';
import { Avatar } from './Avatar';
import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment(){
    setLikeCount(likeCount + 1);
  }

  function handleDeleteComment(){
    onDeleteComment(content);
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/LeonardoSantos16.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Leonardo Ferreira</strong>
              <time title="23 de Junho às 16:44h" dateTime="2024-07-23 16:44:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{ content }</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>  
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
          
        </footer>
      </div>
    </div>
  )
}