import React from 'react'
import './Header.css'
import { HomeFilled } from '@ant-design/icons';
export default function Header() {
  return (
    <div>
       <header className="header">
       <HomeFilled className="header__logo"/>
        <h2 className= "header__h2">NPM Package Comparator  </h2>
        <span className="header__span">Compare & Recommend the best NPM package</span>
      </header>
    </div>
  )
}
