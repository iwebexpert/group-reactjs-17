import React, { useState } from 'react'
import { Container, Typography } from '@material-ui/core'
import { DefaultLayout } from '@components/layout'

import { TextField, Button } from '@material-ui/core'

const ProfilePage = ({profile, onSubmit, isLoading, isError}) => {
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
    <DefaultLayout>
      <Typography
        variant="h1"
        align="center"
      >
        Имя: { isLoading ? 'Loading...' : profile.name}
      </Typography>
  
      <Container>
        <form onSubmit={onSubmitHandler}>
          <TextField
            label="Введите имя"
            variant="filled"
            fullWidth
            value={value}
            onChange={onChangeHandler}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Изменить имя
          </Button>
        </form>
      </Container>
      
    </DefaultLayout>
  )
}

export default ProfilePage
