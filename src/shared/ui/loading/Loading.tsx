import { ReactNode } from "react";

import styles from "./loading.module.scss"

export default function Loading({children}: {children: ReactNode}){
  return(
    <div className={styles.loading}>
      {children}
    </div>
  )
}