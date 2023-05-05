import React from 'react'
import { colorPalette } from '../styles/colorTheme'
import { Button } from '@mui/material'

export function StyledButton (props: { label: any, url: any }): JSX.Element {
  const { label, url } = props
  return <Button variant='contained' sx={{ padding: '2px', color: colorPalette.white, textTransform: 'none', fontWeight: '700', '&:hover': { backgroundColor: colorPalette.green.dark, transform: 'translateY(-1px)', cursor: 'pointer' }, backgroundColor: colorPalette.green.dark }} onClick={() => window.open(url, '_blank')}>
      {label}
    </Button>
}
