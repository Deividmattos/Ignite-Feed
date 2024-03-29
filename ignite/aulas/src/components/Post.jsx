import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return(
      <article className={styles.post}>
            <header>
                <div className={styles.author}>
                  <Avatar  src="https://github.com/maykbrito.png" alt="" /> 
                   <div className={styles.authorInfo}>
                     <strong>Deivid de Mattos </strong>
                     <span>Web Developer</span>
                    </div>
                </div>

               <time title="03 de Fevereiro as 12:34 "dateTime="2022-05-11 08:13:30">Publicado ha 1h</time>
            </header>

            <div className={styles.content}>
           
               <p>Fala galeraa 👋</p>
               <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
               <p><a href="">👉 jane.design/doctorcare</a></p>

                 <p>
                    <a href="">#Novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rockeseat</a>
                  </p>   
            </div>

            <form className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>

                    <textarea placeholder="Deixe um comentario" />
                    <footer>
                       <button type="submit">Publicar</button>
                    </footer>  
            </form>
            <div className={styles.commentList}>
               <Comment/>

            </div>
            
      </article>
  )
}