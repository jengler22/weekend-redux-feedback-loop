import { useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import axios from "axios";

function Review () {

    const history = useHistory();
    const feelingType = useSelector(store => store.feelingType);
    const understandingInfo = useSelector(store => store.understandingInfo);
    const supportType = useSelector(store => store.supportType);
    const addComments = useSelector(store => store.addComments);

    const sendToServer = () => {
        axios.post('/feedback', {
            feelingType: feelingType,
            understandingInfo: understandingInfo,
            supportType: supportType,
            addComments: addComments,
        
        }).then(response => {
            
            history.push('/success');
        }).catch(error => {
            alert('Something went wrong!');
            console.log(error);
        })
    }


    return(
        <>
         <h3>Review</h3>
        <div>{feelingType}</div>
        <div>{understandingInfo}</div>
        <div>{supportType}</div>
        <div>{addComments}</div>
        <button onClick={sendToServer}>Submit</button>
        </>
    )
}
export default Review;