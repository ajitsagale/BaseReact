import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'

const LoginLogout = () => {
    const isToday = (date:any) => {
        date = new Date(date)
        const today = new Date();
        return (
          date.getFullYear() === today.getFullYear() &&
          date.getMonth() === today.getMonth() &&
          date.getDate() === today.getDate()
        );
      };
      const getFormattedTime = (date:any) => {
      
      return (new Date(date)).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
    };
const [LoginTime,setclickLogin] = useState(sessionStorage.getItem('LoginTime'))
const clickLogin = () => {
    sessionStorage.setItem('LoginTime', new Date().toString())
    setclickLogin(sessionStorage.getItem('LoginTime'))
}  
return (
    <Grid container>
        <Grid xs={6}>
        {LoginTime!==null?getFormattedTime(LoginTime):null}
        </Grid><Grid xs={6}>
        <Button color="inherit" onClick={clickLogin}>
                {isToday(LoginTime)?'BREAK':'Login'}
                </Button>
                </Grid>
    </Grid>
  )
}

export default LoginLogout