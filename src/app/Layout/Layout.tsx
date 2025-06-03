import { Outlet } from "react-router-dom"
import Header from "../../widgets/Header/Header"
import Footer from "../../widgets/Footer/Footer"
import styles from "./Layout.module.scss"

export default function Layout(){
  return(
    <>
      <Header />
      <main className={styles.content}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}