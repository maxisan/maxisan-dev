import React, { useState } from 'react'
import { Box } from '@shared/Box'
import { MainContainer } from './styles'
import { IMenuItem } from 'types/index'
import MenuItem from './MenuItem'
import { useRouter } from 'next/router'

const ItemsMenu: IMenuItem[] = [
  {
    id: '1',
    name: 'home',
    icon: 'AiOutlineHome',
    link: '/'
  },
  {
    id: '2',
    name: 'projects',
    icon: 'AiOutlineLaptop',
    link: '/projects'
  },
  {
    id: '3',
    name: 'about',
    icon: 'AiOutlineSmile',
    link: '/about'
  },
  {
    id: '4',
    name: 'contact',
    icon: 'AiOutlineMail',
    link: '/contact'
  },
]

const Navbar = () => {
  const router = useRouter()
  const [activeMenuItemId, setActiveMenuItemId] = useState(() => ItemsMenu.find(itemMenu => router.pathname === itemMenu.link)?.id)

  return (
    <MainContainer>
      <ul>
        {ItemsMenu.map((menuItem) => <MenuItem
          {...menuItem}
          key={menuItem.id}
          isActive={activeMenuItemId === menuItem.id}
          setActiveMenuItem={setActiveMenuItemId}
          />)}
      </ul>
    </MainContainer>
  )
}

export default Navbar