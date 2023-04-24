import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


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
        <h3>Tell us more</h3>
            <form onSubmit={nextPage}>
                <label htmlFor="add-comments">.....</label><br />
                <input id="add-commemts" value={addComments} onChange={handleChange}
                type="number" />
                <input type="submit" value="Next" />
            </form>
        
        </>
    )
}
export default Comments;