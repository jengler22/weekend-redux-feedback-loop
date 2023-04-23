import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
        <h3>Support?</h3>
            <form onSubmit={nextPage}>
                <label htmlFor="support-type">.....</label><br />
                <input id="support-type" value={supportType} onChange={handleChange} type="text" />
                <input type="submit" value="Next" />
            </form>
        </>
    )
}
export default Support;