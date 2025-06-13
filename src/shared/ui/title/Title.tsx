import { JSX } from "@emotion/react/jsx-runtime"
import styles from "./Title.module.scss"

type TitleProps = {
  align?: "left" | "right" | "center";
  title?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: any | "";
  textCase?: "upper" | "lower";
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  className?: string;
}

export default function Title({
  align = "center",
  title = "h1",
  children = "",
  textCase = "lower",
  size = 4,
  className }: TitleProps) {
  const HeadingTagTitle = title as keyof JSX.IntrinsicElements // переводим строку в HTML элемент


  const titleClasses = [
    styles.title,
    styles[`title--${align}`],
    styles[`title--${size}`],
    styles[`title--${textCase}`],
    className && className,
  ].filter(Boolean).join(' ');


  return (
    <HeadingTagTitle className={titleClasses} >
      {children}
    </HeadingTagTitle>
  )

}