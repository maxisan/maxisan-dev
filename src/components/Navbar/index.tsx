import menuItems from 'data/menuItems.json'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import MenuItem from './MenuItem'
import { MainContainer } from './styles'

const Navbar = () => {
  const router = useRouter()
  const [activePath, setActivePath] = useState(router.pathname)

  useEffect(() => {
    setActivePath(router.pathname)
  }, [router.pathname])

  const checkIsActive = (menuItemLink: string): boolean => (
    menuItemLink === router.pathname ||
    menuItemLink !== '/' && router.pathname.includes(menuItemLink)
  )

  return (
    <MainContainer>
      <ul>
        {menuItems.map((menuItem) => <MenuItem
          {...menuItem}
          key={menuItem.id}
          isActive={checkIsActive(menuItem.link)}
          />)}
      </ul>
    </MainContainer>
  )
}

export default Navbar