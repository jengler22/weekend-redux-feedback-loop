import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { Box } from '@mui/material';



function Comments() {

    const history = useHistory();
    const dispatch = useDispatch();

    const addComments = useSelector(store => store.addComments);
    const handleChange = (e) => {
        const action = { type: 'SET_COMMENTS', payload: event.target.value};
        dispatch(action);
    }
    const nextPage = (event) => {
        event.preventDefault();
        if (addComments.length > 0) {
            history.push('/review');
        } else {
            alert('Anything else we should know?');
        }
    }

   return(
        <>
        <Box sx={{ p: 10 }}>
  <h3>Anything else you would like us to know?</h3>
  <form onSubmit={nextPage}>
    <TextField
      sx={{ mr: 5 }}
      id="add-comments"
      label="Add comments here"
      value={addComments}
      onChange={handleChange}
      type="text"
    />
    <Button variant="contained" type="submit">
      Next
    </Button>
  </form>
</Box>
        
        </>
    )
}
export default Comments;