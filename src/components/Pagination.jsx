import { useDispatch, useSelector } from "react-redux"
import { nextPage, prevPage } from "../store/personajes";

export const Pagination = () => {

    const { info } = useSelector(state => state.personajes);

    const dispatch = useDispatch();

    const handlePrevious = () => {
        console.log('Previous');
        dispatch( prevPage() );
    }

    const handleNext = () => {
        console.log('Next');
        dispatch( nextPage() );
    }

    return (
        <nav>
            <ul className="pagination justify-content-center">
                { 
                    (info.prev) && 
                        <li className="page-item">
                            <button className="page-link" onClick={ handlePrevious }>Previous</button>
                        </li>
                }
                
                { 
                    (info.next) && 
                        <li className="page-item">
                            <button className="page-link" onClick={ handleNext }>Next</button>
                        </li>  
                }
            </ul>
        </nav>
    )
}
