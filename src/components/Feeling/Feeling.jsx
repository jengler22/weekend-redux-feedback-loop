import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

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

<h3>All the feels</h3>
            <form onSubmit={nextPage}>
                <label htmlFor="feeling-type">.....</label><br />
                <input id="feeling-type" value={feelingType} onChange={handleChange}
                type="number" />
                <input type="submit" value="Next" />
            </form>
        
        </>
    )
}
export default Feeling;