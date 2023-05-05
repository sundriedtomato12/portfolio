import React from 'react'
import { Stack, Box, useMediaQuery } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { colorPalette } from '../styles/colorTheme'

export function SocialsBar (): JSX.Element {
  const iconStyle = {
    fontSize: '32px',
    color: colorPalette.white,
    '&:hover': {
      color: colorPalette.green.light,
      cursor: 'pointer'
    }
  }
  const isDesktop = useMediaQuery('(min-width:800px)')

  return (
    <Box sx={{ width: '30px', height: '200px', position: 'absolute', left: isDesktop ? '20px' : '2.5vw', bottom: '10px' }}>
    <Stack direction='column' spacing={2} alignItems={'center'}>
            <MailIcon
            sx={{ ...iconStyle }}
            onClick={() => window.open('mailto:felicia.tanwp@gmail.com', '_blank')}
            />
            <LinkedInIcon
            sx={{ ...iconStyle }}
            onClick={() => window.open('https://www.linkedin.com/in/-fel', '_blank')}
            />
            <GitHubIcon
            sx={{ ...iconStyle }}
            onClick={() => window.open('https://www.github.com/sundriedtomato12', '_blank')}
            />
            <Box sx={{ width: '1px', height: '100px', backgroundColor: colorPalette.white }}>
            </Box>
    </Stack>
    </Box>
  )
}
