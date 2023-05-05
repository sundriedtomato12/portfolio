import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import { colorPalette } from '../styles/colorTheme'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'

export function Slide (props: { isDesktop: boolean, setIsSlideClicked: (arg0: boolean) => void, name: string, description: string, thumbnail?: string, url?: string, githubUrl?: string }): JSX.Element {
  return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Paper sx={{ backgroundColor: colorPalette.slate.lightest, height: props.isDesktop ? '43vh' : '31vh', width: props.isDesktop ? '33vw' : '100%', padding: '14px 18px 14px 18px', '&:hover': { cursor: 'pointer' } }} onClick={() => { props.setIsSlideClicked(true) }}>
          <Box sx={{ mb: props.isDesktop ? '12px' : '6px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{ fontFamily: 'Fira Code', fontSize: props.isDesktop ? '20px' : '14px', fontWeight: 700 }}>{props.name}</Typography>
            {(props.githubUrl != null) && <GitHubIcon
          sx={{ '&:hover': { color: colorPalette.green.light, cursor: 'pointer' }, fontSize: props.isDesktop ? '24px' : '14px', fontWeight: '700', color: colorPalette.slate.dark }} onClick={() => window.open(props.githubUrl, '_blank')} />}
            {(props.url != null) && <LaunchIcon
          sx={{ '&:hover': { color: colorPalette.green.light, cursor: 'pointer' }, fontSize: props.isDesktop ? '24px' : '14px', fontWeight: '700', color: colorPalette.slate.dark }} onClick={() => window.open(props.url, '_blank')} />}
            </Box>
            <Typography sx={{ fontFamily: 'Roboto', fontSize: props.isDesktop ? '16px' : '12px' }}>{props.description}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: props.isDesktop ? '33vh' : '22vh' }}>
            <Box component={'img'} src={props.thumbnail} maxHeight={'100%'} maxWidth={'98%'} sx={{ borderRadius: '4px' }} />
          </Box>
        </Paper>
      </Box>
  )
}
