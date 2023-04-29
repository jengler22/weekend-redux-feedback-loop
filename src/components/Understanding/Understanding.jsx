import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { Box } from '@mui/material';


function Understanding () {
    const history = useHistory();
    const dispatch = useDispatch();

    const understandingInfo = useSelector(store => store.understandingInfo);
    const handleChange = (e) => {
        const action = { type: 'SET_UNDERSTANDING', payload: event.target.value};
        dispatch(action);
    }
    const nextPage = (event) => {
        event.preventDefault();
        if (understandingInfo.length > 0) {
            history.push('/support');
        } else {
            alert('We would love to the oppourtunity to improve!');
        }
    }


    return(
        <>
          <Box sx={{ p: 10 }}>
  <h3>How well did your Agent explain the situation and your options?</h3>
  <form onSubmit={nextPage}>
    <TextField
      sx={{ mr: 5 }}
      id="understanding-info"
      label="Please rate 1-5"
      value={understandingInfo}
      onChange={handleChange}
      type="number"
    />
    <Button variant="contained" type="submit">
      Next
    </Button>
  </form>
</Box>
        
        </>
        
    )
}
export default Understanding;