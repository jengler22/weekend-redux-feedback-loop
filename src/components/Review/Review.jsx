import { useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import axios from "axios";
import { Box, Button, TextField, Typography } from '@mui/material';


function Review () {

    const history = useHistory();
    const feelingType = useSelector(store => store.feelingType);
    const understandingInfo = useSelector(store => store.understandingInfo);
    const supportType = useSelector(store => store.supportType);
    const addComments = useSelector(store => store.addComments);

    const sendToServer = () => {
        axios.post('/feedback', {
            feeling: feelingType,
            understanding: understandingInfo,
            support: supportType,
            comments: addComments,
        
        }).then(response => {
            
            history.push('/success');
        }).catch(error => {
            alert('Something went wrong!');
            console.log(error);
        })
    }


    return(
        <>
        <Box sx={{ maxWidth: 800, mx: "auto", px: 10 }}>
        <Typography variant="h3" gutterBottom>
          Review
        </Typography>
        <Box sx={{ my: 2 }}>
          <TextField
            fullWidth
            id="outlined-basic-feelings"
            label="Overall Feelings"
            variant="outlined"
            value={feelingType}
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <TextField
            fullWidth
            id="outlined-basic-understanding"
            label="Understanding of policy"
            variant="outlined"
            value={understandingInfo}
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <TextField
            fullWidth
            id="outlined-basic-support"
            label="Support received from Agent"
            variant="outlined"
            value={supportType}
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <TextField
            fullWidth
            id="outlined-basic-comments"
            label="Additional comments"
            variant="outlined"
            value={addComments}
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <Button variant="contained" onClick={sendToServer}>
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Review;