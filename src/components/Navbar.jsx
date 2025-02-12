import React from 'react'
import Styles from './navbar.modules.css'
import Logo from './Logo1'
import Menu from './Menu'
const Navbar = () => {
  return (
    <section id={Styles.navBlock}>
        <article>
            <Logo/>
            <Menu/>
        </article>

    </section>
  )
}

export default Navbar