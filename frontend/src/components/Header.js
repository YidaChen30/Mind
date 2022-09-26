import '../pages/pagestyling.css'
import React, { useState } from 'react'
import { Player } from './Player'
import chen from '../pics/chen.png'
import { useNavigate } from 'react-router-dom'
import { IconButton, Stack, Menu, Box, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {

  const history = useNavigate();
  const [menuOpen, setMenuOpen] = useState(null)
  const open = Boolean(menuOpen)

  const menuItems = [
    {
      text: 'Aim Trainer',
      path: 'aimtrainer'
    }
  ]

  return (
    <div className='headerdiv'>
      <div className="header">
        <Stack direction={'row'} alignItems={'center'} spacing={1}>

          <img src={chen} onClick={() => {
            history("/")
          }} style={{cursor: "pointer", border: "1px solid black", height: '90%'}}/>

          <Box>
            <IconButton
              onClick={(event) => setMenuOpen(event.currentTarget)}
            >
              <MenuIcon fontSize='large'/>
            </IconButton>
            <Menu 
              anchorEl={menuOpen}
              open={open}
              onClose={() => setMenuOpen(null)}
              onClick={() => setMenuOpen(null)}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              {menuItems.map((entry) => {
                return (
                  <MenuItem onClick={() => history('/' + entry.path)}>
                    {entry.text}
                  </MenuItem>
                )
              })}
            </Menu>
          </Box>
        </Stack>
        <Player/>
      </div>
    </div>
  )
}