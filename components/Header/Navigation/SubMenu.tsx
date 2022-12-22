import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


const SubMenu = ({subMenu}:{ name: string; subMenuItems: MenuItem[] }[])=>{
    return (<div className="submenu__wrapper">
        {subMenu.map(subItems=>(
            <div className="subitems__wrapper">
            <p>{subItems.name}</p>
            <ul>
                {subItems.subMenuItems.map(subItem=>(
                    <li>
                        <Link href={`/blog${subItem.target}`}>
                        
                        {subItem.name}
                         </Link>
                        </li>
                       
                ))}
                
            </ul>
            </div>
        ))}
    </div>
        )
}


export default SubMenu;