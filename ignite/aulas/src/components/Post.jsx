import styles from './Post.module.css'

export function Post() {
  return(
      <article classAName={styles.Post}>
            <header>
                <div classAName={styles.author}>
                  <img classAName={styles.avatar} src="" alt="" /> 
                   <div classAName={styles.authorInfo}>
                     <strong>Deivid de Mattos Silva</strong>
                     <span>Web Developer</span>
                    </div>
                </div>

             <time dateTime="">Publicado ha 1h</time>
            </header>
      </article>
  )
}