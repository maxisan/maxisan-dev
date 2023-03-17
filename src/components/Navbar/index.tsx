import React, { useState } from 'react'
import { Box } from '@shared/Box'
import { MainContainer } from './styles'
import { IMenuItem } from 'types/index'
import MenuItem from './MenuItem'
import { useRouter } from 'next/router'
import menuItems from 'data/menuItems.json'

const Navbar = () => {
  const router = useRouter()
  const [activeMenuItemId, setActiveMenuItemId] = useState(() => menuItems.find(menuItem => router.pathname === menuItem.link)?.id)

  return (
    <MainContainer>
      <ul>
        {menuItems.map((menuItem) => <MenuItem
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