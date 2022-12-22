import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SubMenu from './SubMenu'
interface MenuItem {
  name: string;
  target: string;
}

interface MenuTypes extends MenuItem {
  subMenu?: { name: string; subMenuItems: MenuItem[] }[];
}

const Navigation = ({
  menuItems,
  showMenu,
  onClick,
}: {
  menuItems: MenuTypes[];
  showMenu: boolean;
  onClick: React.MouseEventHandler<HTMLElement>;
}) => {
  const router = useRouter();
  return (
    <nav
      id="main__menu"
      className={showMenu ? 'show__menu' : ''}
      onClick={onClick}
    >
      <ul className="menu__list">
        <li className="menu__item">
          <Link
            href="/"
            className={
              router.asPath === '/' ? 'menu__link--active' : 'menu__link'
            }
          >
            Home
          </Link>
        </li>
        {menuItems.map((menuItem, index) => {
          const matcher = new RegExp(menuItem.target + '/', 'g');
          return (
            <li className="menu__item" key={index}>
              {Boolean(menuItem.subMenu) ? (
                <>
                <p>{menuItem.name}</p>
                <SubMenu subMenu={menuItem.subMenu} />
                </>
              ) : (
                <Link
                  href={menuItem.target}
                  className={
                    router.asPath === menuItem.target ||
                    matcher.test(router.asPath)
                      ? 'menu__link--active'
                      : 'menu__link'
                  }
                >
                  {menuItem.name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
