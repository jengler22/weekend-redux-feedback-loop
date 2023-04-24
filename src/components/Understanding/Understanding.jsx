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
          <h3>Understand?</h3>
            <form onSubmit={nextPage}>
                <label htmlFor="understanding-info">.....</label><br />
                <input id="understanding-info" value={understandingInfo} onChange={handleChange}
                type="number" />
                <input type="submit" value="Next" />
            </form>
        
        </>
        
    )
}
export default Understanding;