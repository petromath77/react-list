import React from 'react';
import { NavLink } from 'react-router-dom';
import uniqueId from 'uniqid';
import content from '../../content';
import style from '../MenuHeader/MenuHeader.module.scss';

const NavItem = props => { 
  const { link } = props;
  const { name, href } = link;
  return (
    <li className={style.item}>
      <NavLink className={style.link} to={href} >{name}</NavLink>
    </li>
  );
}

const NavList = props => { 

  const links = content.navLinks.map(link => { 
    return (
      <NavItem key={uniqueId()} link={link}/>
    );
  });

  return (
    <nav className={style.menu}>
      <ul className={style.nav}>
        {links}
      </ul>
    </nav>
  );
}

const MenuHeader = () => { 
  return (
    <NavList/>
  );
}

export default MenuHeader;