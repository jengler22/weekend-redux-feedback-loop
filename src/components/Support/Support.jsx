import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { Box } from '@mui/material';


function Support() {
    const history = useHistory();
    const dispatch = useDispatch();

    const supportType = useSelector(store => store.supportType);
    const handleChange = (e) => {
        const action = { type: 'SET_SUPPORT', payload: event.target.value};
        dispatch(action);
    }
    const nextPage = (event) => {
        event.preventDefault();
        if (supportType.length > 0) {
            history.push('/comments');
        } else {
            alert('Let us know how we did!');
        }
    }

    return (
        <>
        <Box sx={{ p: 10 }}>
  <h3>Do you feel your Agent provided enough support during your claim?</h3>
  <form onSubmit={nextPage}>
    <TextField
      sx={{ mr: 5 }}
      id="support-type"
      label="Please rate 1-5"
      value={supportType}
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
export default Support;