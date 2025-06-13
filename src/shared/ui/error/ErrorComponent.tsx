import styles from "./error.module.scss"


export default function ErrorComponent({children}: {children: Error}){
  return(
    <div className={styles.error}>
      Ошибка: {children.name}! {children.message}!
    </div>
  )
}