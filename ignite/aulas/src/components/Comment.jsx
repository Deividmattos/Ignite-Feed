import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/mayBrito.png" alt="" />

        <div className={styles.commentBox}>
           <div className={styles.commentContent}>
              <header>
                <div className={styles.authorAndTime}>
                  <strong>Deivid de Mattos</strong>
                  <time title="03 de Fevereiro as 12:34 "dateTime="2022-05-11 08:13:30">Cerca de uma ha 1ha traz</time>
                </div>

                <button title="Deletar comentario">
                  
                </button>
              </header>

              <p>Muitoss bom Devon, parabens!!</p>
                 </div>  
            <footer>
              <button>
                 
                 Aplaudir <span>20</span>
              </button>
            </footer>
           

        </div>
    </div>
  )
}

