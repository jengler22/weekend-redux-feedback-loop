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
        
        </>
    )
}
export default Support;