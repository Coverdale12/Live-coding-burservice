import { Toolbar } from "@mui/material"
import styles from "./Footer.module.scss"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <Toolbar color="black" sx={{
          backgroundColor: '#292929', // Синий цвет
          color: 'white',            // Цвет текста
        }}>
          Все права защищенны

        </Toolbar>
      </div>
    </footer>
  )
}