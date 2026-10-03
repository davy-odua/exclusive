import Title from "./Title";
import '../index.css';
import phones3 from '../../images/phones3.jpg';
import phones4 from '../../images/phones4.jpg';
import phones5 from '../../images/phones5.jpg';
import phones6 from '../../images/phones6.jpg';
import Label from "./Label";

function Month(){
    return(
        <>
        <div className="categories">
            <Title name = " This Month" header = "Best Selling Products" left = "←"  right = "→"/>
            <div className="month-row">
                <div className="month-col">
                    <img src={phones3} alt="" />
                    <Label percentage="-40%" name="The north coat" currentAmount = "$260" previousAmount = "$360" />
                </div>
                <div className="month-col">
                    <img src={phones4} alt="" />
                    <Label percentage="-20%" name="Gucci duffle bag" currentAmount = "$960" previousAmount = "$1160"/>
                </div>
                <div className="month-col">
                    <img src={phones5} alt="" />
                    <Label percentage="-35%" name="RGB liquid CPU Cooler" currentAmount = "$160" previousAmount = "$170" />
                </div>
                <div className="month-col">
                    <img src={phones6} alt="" />
                    <Label percentage="-25%" name="Small BookSelf" currentAmount = "$360"/>
                </div>                
            </div>
        </div>
        </>
    )
}

export default Month;