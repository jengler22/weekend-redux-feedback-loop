import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
        
        </>
    )
}
export default Understanding;