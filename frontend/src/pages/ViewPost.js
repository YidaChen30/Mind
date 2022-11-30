import React from 'react'
import { Button, Grid, Typography, Stack, TextField, Snackbar, Alert, AlertTitle, Box } from '@mui/material'
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header'
import { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';

export const ViewPost = () => {

  const { id } = useParams()

  const [post, setPost] = useState({})
  const [comment, setComment] = useState('')
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [otherComments, setOtherComments] = useState([])
  const [isAdmin, setIsAdmin] = useState(true)

  const GetPost = async () => {
    await fetch('http://localhost:6161/getpost/' + id, {
      method: 'GET'
    }).then(res => res.json())
      .then(data => {setPost(data[0])})
  }

  const GetComments = async () => {
    await fetch('http://localhost:6161/getcomments/' + id, {
      method: 'GET'
    }).then(res => res.json())
      .then(data => {setOtherComments(data); console.log(data)})
  }

  const AddComment = async () => {
    await fetch('http://localhost:6161/addcomment', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        'id': id,
        'content': comment,
        'author': 'gotta change website structure'
      })
    }).then(res => res.text())
      .then(res => console.log(res))
  }

  const DeleteComment = async (commentAuthor, commentTime) => {
    await fetch('http://localhost:6161/deletepostcomment', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        author: commentAuthor,
        'time added': commentTime 
      })
    }).then(res => res.text())
      .then(res => console.log(res))
  }

  const handleAddComment = () => {
    if ( comment === '') {
      setOpenSnackbar(true)
      return
    }
    AddComment()
  }

  useEffect(() => {
    GetPost()
    GetComments()
  }, [])


  return (
    <Grid container>
      <Grid item xs={12}>
        <Header/>
      </Grid>
      <Grid container justifyContent={'center'} mt={'50px'}>
        <Grid item xs={6}>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography variant='h4' fontWeight={600}>
              {post.title}
            </Typography>
            <Typography variant='h4' fontWeight={600}>
            By: {post.author} 
            </Typography>
          </Stack>
          <Typography>
            {post.content}
          </Typography>
        </Grid>
        <Grid container justifyContent={'center'} mt={'50px'}>
          <Grid item xs={6}>
            <Stack alignItems={'flex-end'}>
              <TextField placeholder='Go on, write a comment' sx={{width: '100%'}} onChange={(event) => setComment(event.target.value)} multiline/>
              <Button onClick={handleAddComment}>
                Send the comment
              </Button>
            </Stack>
            <Typography variant='h5'>
              Comments
            </Typography>
            <Box sx={{width: '95%', mr: 'auto', ml: 'auto'}}>
              {otherComments.map((postComment, i) => {
                  return (
                    <Grid container key={i}>
                      <Grid item xs={11.9}>
                        <Stack direction={'row'} justifyContent={'space-between'} sx={{mt: '5px'}}>
                          <Typography sx={{ width: '80%', minHeight: '80px', overflow:'hidden'}}>
                            {postComment.content}
                          </Typography>
                          <Stack>
                            <Typography>
                              {postComment.author}
                            </Typography>
                            <Typography alignItems={'flex-end'} variant='subtitle2'>
                              Posted at: {postComment['time added']}
                            </Typography>
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid item xs={0.1}>
                        <CloseIcon fontSize='large' 
                        onClick={() => DeleteComment(postComment.author, postComment['time added'])} 
                        sx={{':hover': {cursor: 'pointer'}}}/>
                      </Grid>
                      <Grid item xs={12}>
                        <Stack alignItems={'flex-end'}>
                          <Button sx={{width:'70px'}}>
                            Reply
                          </Button>
                        </Stack>
                      </Grid>
                    </Grid>
                  )
                })}
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={(event, reason) => {
          if (reason === 'clickaway') {
            return
          }
          setOpenSnackbar(false)
        }}
      >
        <Alert severity='error'>
          <AlertTitle>Ruh Roh</AlertTitle>
          Why you trying to add a comment with nothing you donut
        </Alert>
      </Snackbar>
    </Grid>
  )
}