/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"


const Button = ({ children, disabled, to, type, onClick }) => {
  const base = "inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 hover:bg-yellow-300 transition-colors duration-500 disabled:cursor-not-allowed mt-4 text-xs"

  const style = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5",
    secondary: "inline-block rounded-full bg-stone-100 font-semibold uppercase tracking-wide text-stone-600 hover:bg-stone-300 transition-colors duration-500 disabled:cursor-not-allowed mt-4 text-xs border-2 border-stone-300 px-4 py-3 md:px-6 md:py-4"
  }
  if (to) {
    return <Link className={style[type]} to={to}>{children}</Link>
  }

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={style[type]} >{children}</button>
    )
  }

  return (
    <button disabled={disabled} className={style[type]} >{children}</button>
  )
}

export default Button