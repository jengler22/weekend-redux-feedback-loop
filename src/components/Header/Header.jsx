import { AppBar, Toolbar, Typography } from '@mui/material';


function Header () {

    return(
        <>
        <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          PRIME INSURANCE!
        </Typography>
        <Typography variant="subtitle1" sx={{ mr: 1 }}>
          Customer feedback form
        </Typography>
      </Toolbar>
    </AppBar>
      
   
        </>
    )
}
export default Header;