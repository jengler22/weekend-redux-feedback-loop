import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { Box } from '@mui/material';

function Feeling () {
    const history = useHistory();
    const dispatch = useDispatch();

    const feelingType = useSelector(store => store.feelingType);
    const handleChange = (e) => {
        const action = { type: 'SET_FEELING_TYPE', payload: event.target.value};
        dispatch(action);
    }
    const nextPage = (event) => {
        event.preventDefault();
        if (feelingType.length > 0) {
            history.push('/understanding');
        } else {
            alert('We would love to know how you feel!');
        }
    }

    return(
        <>

<Box sx={{ p: 10 }}>
  <h3>How do you feel about todays interaction?</h3>
  <form onSubmit={nextPage}>
    <TextField
      sx={{ mr: 5 }}
      id="feeling-type"
      label="Please rate 1-5"
      value={feelingType}
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
export default Feeling;