import Title from "./Title";
import '../index.css';
import phones3 from '../../images/phones3.jpg';
import phones4 from '../../images/phones4.jpg';
import phones5 from '../../images/phones5.jpg';
import phones6 from '../../images/phones6.jpg'

function Month(){
    return(
        <>
        <div className="categories">
            <Title name = " This Month" header = "Best Selling Products" left = "←"  right = "→"/>
            <div className="month-row">
                <div className="month-col">
                    <img src={phones3} alt="" />
                </div>
                <div className="month-col">
                    <img src={phones4} alt="" />
                </div>
                <div className="month-col">
                    <img src={phones5} alt="" />
                </div>
                <div className="month-col">
                    <img src={phones6} alt="" />
                </div>                
            </div>
        </div>
        </>
    )
}

export default Month;