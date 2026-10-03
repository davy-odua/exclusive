import '../index.css';
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function Label({percentage, name, currentAmount, previousAmount}){
    return(
        <>
            <p>{percentage}</p>
            <div className='like'><FaRegHeart className='like-icon' /></div>
            <h4>{name}</h4>  
            <a> {currentAmount} <span> <i>{previousAmount}</i> </span> </a>
            <div className="star"><FaStar className='goldish' /> <FaStar className='goldish' /> <FaStar className='goldish' /> <FaStar className='goldish' /> <FaStar className='goldish' />(88) </div>
        </>
    )
}

export default Label;