import { AppBar, Box, Typography, useMediaQuery } from '@mui/material'
import React, { type SetStateAction } from 'react'
import { colorPalette } from '../styles/colorTheme'
import { NavBarButtons } from './NavBarButtons'

interface NavBarProps {
  currentPage: string
  setCurrentPage: React.Dispatch<SetStateAction<string>>
}

export function NavBar ({ currentPage, setCurrentPage }: NavBarProps): JSX.Element {
  const isDesktop = useMediaQuery('(min-width:800px)')
  const logo = '<f>'

  return (
		<AppBar position='fixed' className='navbar' sx={{ height: '48px', width: '100%', zIndex: 999, backgroundColor: colorPalette.navy.normal, boxShadow: '0 7px 14px 0 rgba(0, 0, 0, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.2)', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', px: isDesktop ? '22px' : '14px' }}>
      <Box component={'a'} sx={{
        textDecoration: 'none',
        width: 'fit-content',
        height: '100%',
        display: 'flex',
        alignItems: 'center'
      }} href='/' >
        <Typography fontSize={isDesktop ? '20px' : '18px'} fontWeight={700} fontFamily={'Source Code Pro'} color={colorPalette.white} sx={{
          '&:hover': {
            transform: 'translateY(-1px)',
            color: colorPalette.green.light
          }
        }}>{logo}</Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <NavBarButtons isDesktop={isDesktop} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </Box>
		</AppBar>
  )
}
