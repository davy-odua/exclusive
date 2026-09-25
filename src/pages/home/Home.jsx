import './Home.css'
import Sidebar from '../../components/Sidebar'
import main from '../../../images/main.jpg'
import pad from '../../../images/ps2.jpg'
import laptop from '../../../images/laptop.jpg'
import desktop from '../../../images/desktop.jpg'
import chair from '../../../images/chair.jpg'
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Categories from '../../components/Categories'


function Home(){
    return(
        <>
        <div className='home-container'>
            <div className='left-1'>
                <Sidebar/>
            </div>
            <div className='right-1'>
                <img src={main} />
            </div>
        </div>
        <div className="today">
            <div className="today-title">
                <div className='todo-color'></div>
                <h3>Today's</h3>
            </div>
            <div className="sales">
                <h2>Flash Sales</h2>
                <div className="time"> <h1>03  :  23  :  19  :  56</h1> </div>
                <div className="time-name"> <h4>Days  Hours  Minutes  Seconds</h4> </div>
                <div className="arrow">
                    <a>←</a>
                    <a>→</a>
                </div>
            </div>
        </div>
        <div className="today-container">
            <div className="today-img"> <img src={pad} alt="" />
                <p>-40%</p>
                <div className='like'><FaRegHeart className='like-icon' /></div>
                <h4>HAVIT HV-G92 Gamepad</h4>
                <a>$120 <span> <i>$160</i> </span> </a>
                <div className="star"><FaStar className='goldish' /> <FaStar className='goldish' /> <FaStar className='goldish' /> <FaStar className='goldish' /> <FaStar className='goldish' />(88) </div>
            </div>
            <div className="today-img"> <img src={laptop} alt="" />
                <p>-40%</p>
                <div className='like'><FaRegHeart className='like-icon' /></div>
                <h4> AK-900 Wired Keyboard </h4>
                <a>$960 <span> <i>$1160</i> </span> </a>
                <div className="star"><FaStar className='goldish' /> <FaStar className='goldish' /> <FaStar className='goldish' /> <FaStar className='goldish' /> <FaRegStar className='goldish' /> (75) </div>
            </div>
            <div className="today-img"> <img src={desktop} alt="" />
                <p>-40%</p>
                <div className='like'><FaRegHeart className='like-icon' /></div>
                <h4> IPS LCD Gaming Monitor </h4>
                <a>$370 <span> <i>$400</i> </span> </a>
                <div className="star"><FaStar className='goldish' /> <FaStar className='goldish' /> <FaStar className='goldish' /> <FaStar className='goldish' /> <FaStar className='goldish' /> (99) </div>
            </div>
            <div className="today-img"> <img src={chair} alt="" />
                <p>-40%</p>
                <div className='like'><FaRegHeart className='like-icon' /></div>
                <h4> S-Series Comfort Chair  </h4>
                <a>$375 <span> <i>$400</i> </span> </a>
                <div className="star"><FaStar className='goldish' /> <FaStar className='goldish' /> <FaStar className='goldish' /> <FaStar className='goldish' /> <FaStarHalfAlt className='goldish' /> (99)</div>
            </div>
        </div>
        <div className='view'>
            <h2>View All Products</h2>
        </div>
        <hr />
        <Categories/>
        </>
    )
}

export default Home