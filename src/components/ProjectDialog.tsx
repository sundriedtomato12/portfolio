import { Dialog, Box, Typography, Paper } from '@mui/material'
import React from 'react'
import { colorPalette } from '../styles/colorTheme'
import { StyledButton } from './StyledButton'
import GitHubIcon from '@mui/icons-material/GitHub'

export function ProjectDialog (props: { name: string, description: string, video: string, technologies: string[], githubUrl?: string, url?: string, handleDialogClose: () => void, isSlideClicked: boolean, isDesktop: boolean }): JSX.Element {
  return (
      <Dialog onClose={props.handleDialogClose} open={props.isSlideClicked}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Paper sx={{ backgroundColor: colorPalette.slate.lightest, height: props.isDesktop ? '60vh' : '70%', width: props.isDesktop ? '44vw' : '100%', padding: '16px 20px 16px 20px' }}>
          <Box sx={{ mb: props.isDesktop ? '14px' : '8px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '8px' }}>
            <Typography sx={{ fontFamily: 'Fira Code', fontSize: props.isDesktop ? '22px' : '14px', fontWeight: 700 }}>{props.name}</Typography>
            {(props.url != null) && <StyledButton label='Try it!' url={props.url} />}
            {(props.githubUrl != null) && <GitHubIcon sx={{ '&:hover': { color: colorPalette.green.light, cursor: 'pointer' }, fontSize: props.isDesktop ? '24px' : '14px', fontWeight: '700', color: colorPalette.slate.dark }} onClick={() => window.open(props.githubUrl, '_blank')} />}
            </Box>
            <Typography sx={{ fontFamily: 'Roboto', fontSize: props.isDesktop ? '16px' : '12px' }}>{props.description} Built using {props.technologies.map((tech, index) => {
              if (index === props.technologies.length - 1) {
                return <React.Fragment key={index}><b>{tech}</b>.</React.Fragment>
              } else {
                return <React.Fragment key={index}><b>{tech}</b>, </React.Fragment>
              }
            })}
</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: props.isDesktop ? '44vh' : '60%' }}>
            <Box component={'video'} src={props.video} autoPlay loop playsInline muted disablePictureInPicture maxHeight={'100%'} maxWidth={'100%'} sx={{ borderRadius: '4px' }} />
          </Box>
        </Paper>
      </Box>
      </Dialog>
  )
}
