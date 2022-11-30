import './pagestyling.css'
import React from 'react'
import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { Stack, 
  Typography, 
  Box, 
  Button, 
  Card, 
  CardContent, 
  Paper, 
  CardActions,
  CardActionArea,
  Grid
} from '@mui/material'

export const Homepage = () => {

  const history = useNavigate();
  const [posts, setPosts] = useState([])

  const GetPosts = async () => {
    await fetch('http://localhost:6161/getposts', {
      method: 'GET'
    }).then(res => res.json())
      .then(data => {setPosts(data); console.log(data)})
      .catch(err => {throw(err)})
  }

  const GetPost = async (id) => {
    await fetch('http://localhost:6161/getpost/' + id, {
      method: 'GET'
    }).then(res => res.json())
      .then(data => console.log(data))
  }

  const DeletePost = async (id) => {
    await fetch('http://localhost:6161/deletepost', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        'id': id,
      })
    }).then(res => res.text())
      .then(res => console.log(res))
  }

  /*useEffect(() => {
    setPosts(GetPosts)
  }, [GetPosts])*/

  useEffect(() => {
    GetPosts()
  }, [])

  return (
    <Grid container justifyContent={'center'}>
      <Header/>
      <Grid item xs={6}>
        <Typography marginTop='50px' variant='h4'>
          Posts
        </Typography>
        <Box display={'flex'} flexDirection={'row'} sx={{overflow: 'scroll', p: 0.2, overflowY: 'hidden'}} >
          {posts.map((post, i) => 
            {
              return (
                <Card key={i} sx={{minWidth: '310px', maxWidth: '310px', minHeight: '310px' , mr:1}}>
                  <Stack alignItems={'flex-end'}>
                    <Button onClick={() => DeletePost(post.id)}>Delete</Button>
                  </Stack>
                  <CardContent>
                    <Typography variant='h5' fontWeight={600} gutterBottom
                      sx={{
                        height: '75px',
                        overflow: 'elipsis'
                      }}>
                      {post.title}
                    </Typography>
                    <Typography variant='body2' gutterBottom
                      sx={{
                        height: '120px',
                        overflow: 'elipsis'
                      }}>
                      {post.content}
                    </Typography>
                    
                  </CardContent>
                  <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Button onClick={() => history('/post/' + post.id)}>
                      View Post
                    </Button>
                    <Typography variant='h6' marginRight='7.5px'>
                      {post.author}
                    </Typography>
                  </CardActions>
                </Card>
              )
            }
          )}
        </Box>
      </Grid>
    </Grid>
  )
}