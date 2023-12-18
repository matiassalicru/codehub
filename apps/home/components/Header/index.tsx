'use client'
import { Box, Typography } from '@mui/material'

export const Header = () => {
  return (
    <Box
      sx={({ palette }) => ({
        display: 'flex ',
        alignItems: 'center',
        justifyContent: 'center',
        background: palette.primary.light,
      })}
    >
      <Typography>Home Apps</Typography>
    </Box>
  )
}
