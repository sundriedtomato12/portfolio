import React, { useState, type SetStateAction } from 'react'
import {
  Button,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItemButton
} from '@mui/material'
import { colorPalette } from '../styles/colorTheme'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

interface NavBarButtonsProps {
  isDesktop: boolean
  currentPage: string
  setCurrentPage: React.Dispatch<SetStateAction<string>>
}

export function NavBarButtons ({ isDesktop, currentPage, setCurrentPage }: NavBarButtonsProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (page: string, event: React.MouseEvent<HTMLAnchorElement>): void => {
    if (isDesktop) {
      event.preventDefault()
    } else {
      setIsOpen(false)
    }
    setCurrentPage(page)
    const element = document.getElementById(page)
    if (element != null) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  function toggleSidebar (): void {
    setIsOpen(!isOpen)
  }

  const navBarMenuItemsStyle = {
    fontSize: '18px',
    fontFamily: 'Fira Code',
    lineHeight: '3em',
    '&:hover': {
      color: colorPalette.green.light
    }
  }

  const navButtonStyle = {
    height: '48px',
    fontSize: '16px',
    fontFamily: 'Fira Code',
    width: 'fit-content',
    marginX: '10px',
    padding: 0,
    lineHeight: '3em',
    '&:hover': {
      color: colorPalette.green.light
    }
  }

  const activeNavBorderBottom = `4px solid ${colorPalette.green.light}`

  const navBarItems = ['home', 'about', 'projects', 'contact']

  return (
    <>
    {isDesktop
      ? (<>
      {navBarItems.map((item) => <Button key={item} disableRipple href={`/${item === 'home' ? '' : '#' + item}`} onClick={(event) => { handleClick(item, event) }} sx={{ ...navButtonStyle, borderBottom: currentPage === item ? activeNavBorderBottom : 'none', color: currentPage === item ? colorPalette.green.light : colorPalette.slate.lightest }}>
      {item.charAt(0).toUpperCase() + item.slice(1)}
			</Button>)}
      </>)
      : (
        <>
      <IconButton
        sx={{ color: colorPalette.slate.lightest, px: 0 }}
        aria-label="menu"
        onClick={toggleSidebar}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={isOpen} onClose={toggleSidebar} PaperProps={{ sx: { backgroundColor: colorPalette.navy.dark, width: '40%' } }}>
        <List>
          <ListItemButton sx={{ display: 'flex', justifyContent: 'right' }}>
            <CloseIcon sx={{ fontSize: '22px', color: colorPalette.white }} onClick={() => { setIsOpen(false) }} />
          </ListItemButton>
          {navBarItems.map((item) => <ListItemButton key={item} disableRipple href={`/${item === 'home' ? '' : '#' + item}`} onClick={(event) => { handleClick(item, event) }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography sx={{ ...navBarMenuItemsStyle, color: currentPage === item ? colorPalette.green.light : colorPalette.slate.lightest, fontWeight: currentPage === item ? 700 : 400 }}>{item.charAt(0).toUpperCase() + item.slice(1)}</Typography>
          </ListItemButton>)}
        </List>
      </Drawer>
        </>
        )}
    </>)
}
