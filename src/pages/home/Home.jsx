import './Home.css'
import Sidebar from '../../components/Sidebar'
import main from '../../../images/main.jpg'

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
        </>
    )
}

export default Home