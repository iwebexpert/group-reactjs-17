import React, { useState } from 'react'

import { TextField, Button, Box, Container } from '@material-ui/core'

const Profile = ({profile, onSubmit, isLoading, isError}) => {
  const [value, setValue] = useState('')

  const onChangeHandler = (event) => {
    const text = event.target.value
    setValue(text)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()

    if (value.trim()) {
      onSubmit(value)
      setValue('')
    }
  }

  if (isError) {
    return <h1>При обновлении профиля произошла ошибка</h1>
  }

  return (
    <>
      <Box
        align="left"
        ml={10}
      >
        <h1>{ isLoading ? 'Loading...' : profile.name}</h1>
      </Box>
      <Container>
        <form onSubmit={onSubmitHandler}>
          <TextField
            label="Enter your name"
            variant="outlined"
            fullWidth
            value={value}
            onChange={onChangeHandler}
          />
          <Button
            type="submit"
            variant="outlined"
            color="default"
          >
            Change name
          </Button>
        </form>
      </Container>

    </>
  )
}

export default Profile
