import { AppBar, Toolbar, Typography } from '@mui/material';


function Header () {

    return(
        <>
        <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 2 }}>
          PRIME INSURANCE
        </Typography>
        <Typography variant="subtitle1" sx={{ mr: 2 }}>
          Customer Feedback Form
        </Typography>
      </Toolbar>
    </AppBar>
      
   
        </>
    )
}
export default Header;