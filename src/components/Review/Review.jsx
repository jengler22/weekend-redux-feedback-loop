import { useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import axios from "axios";
import { Box, Button, Typography } from '@mui/material';


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
          <Box sx={{ maxWidth: 600, mx: 'auto', px: 2 }}>
      <Typography variant="h3" gutterBottom>Review</Typography>
      <Typography variant="body1" gutterBottom>Overall Feelings: {feelingType}</Typography>
      <Typography variant="body1" gutterBottom>Understanding of policy: {understandingInfo}</Typography>
      <Typography variant="body1" gutterBottom>Support recived from Agent: {supportType}</Typography>
      <Typography variant="body1" gutterBottom>Additional comments: {addComments}</Typography>
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" onClick={sendToServer}>Submit</Button>
      </Box>
    </Box>
        </>
    )
}
export default Review;