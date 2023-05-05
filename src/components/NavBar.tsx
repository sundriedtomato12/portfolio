import { AppBar, Box, Button, Typography, useMediaQuery } from '@mui/material'
import React, { type SetStateAction } from 'react'
import { colorPalette } from '../styles/colorTheme'

interface NavBarProps {
  currentPage: string
  setCurrentPage: React.Dispatch<SetStateAction<string>>
}

export function NavBar ({ currentPage, setCurrentPage }: NavBarProps): JSX.Element {
  const isDesktop = useMediaQuery('(min-width:800px)')

  const handleClick = (page: string, event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault()
    setCurrentPage(page)
    const element = document.getElementById(page)
    if (element != null) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navButtonStyle = {
    height: '48px',
    fontSize: isDesktop ? '16px' : '12px',
    fontFamily: 'Fira Code',
    width: 'fit-content',
    marginX: isDesktop ? '10px' : '2px',
    padding: 0,
    lineHeight: '3em',
    '&:hover': {
      color: colorPalette.green.light
    }
  }

  const activeNavBorderBottom = `4px solid ${colorPalette.green.light}`
  const logo = '<f>'

  return (
		<AppBar position='fixed' className='navbar' sx={{ height: '48px', width: '100%', zIndex: 999, backgroundColor: colorPalette.navy.normal, boxShadow: '0 7px 14px 0 rgba(0, 0, 0, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.2)', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', pl: isDesktop ? '22px' : '10px' }}>
      <Box component={'a'} sx={{
        textDecoration: 'none',
        width: 'fit-content',
        height: '100%',
        display: 'flex',
        alignItems: 'center'
      }} href='/' >
        <Typography fontSize={isDesktop ? '20px' : '16px'} fontWeight={700} fontFamily={'Source Code Pro'} color={colorPalette.white} sx={{
          '&:hover': {
            transform: 'translateY(-1px)',
            color: colorPalette.green.light
          }
        }}>{logo}</Typography>
      </Box>
      <Box>
			<Button disableRipple href='/' onClick={(event) => { handleClick('home', event) }} sx={{ ...navButtonStyle, borderBottom: currentPage === 'home' ? activeNavBorderBottom : 'none', color: currentPage === 'home' ? colorPalette.green.light : colorPalette.slate.lightest }}>
      Home
			</Button>
			<Button disableRipple href='/#about' onClick={(event) => { handleClick('about', event) }} sx={{ ...navButtonStyle, borderBottom: currentPage === 'about' ? activeNavBorderBottom : 'none', color: currentPage === 'about' ? colorPalette.green.light : colorPalette.slate.lightest }}>
      About
			</Button>
			<Button disableRipple href='/#projects' onClick={(event) => { handleClick('projects', event) }} sx={{ ...navButtonStyle, borderBottom: currentPage === 'projects' ? activeNavBorderBottom : 'none', color: currentPage === 'projects' ? colorPalette.green.light : colorPalette.slate.lightest }}>
      Projects
			</Button>
			<Button disableRipple href='/#contact' onClick={(event) => { handleClick('contact', event) }} sx={{ ...navButtonStyle, borderBottom: currentPage === 'contact' ? activeNavBorderBottom : 'none', color: currentPage === 'contact' ? colorPalette.green.light : colorPalette.slate.lightest }}>
      Contact
			</Button>
      </Box>
		</AppBar>
  )
}
