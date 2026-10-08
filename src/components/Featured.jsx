import Title from "./Title";
import '../index.css';
import plays from '../../images/ps5-1.jpg';
import speakers from '../../images/speakers.jpg';
import perfume from '../../images/perfume.jpg';
import play from '../../images/ps5-2.jpg';
import ColTitle from "./ColTitle";
import { FaTruckFast } from "react-icons/fa6";
import { FaHeadphonesAlt } from "react-icons/fa";
import { RiShieldCheckFill } from "react-icons/ri";

function Featured(){
    return(
        <>
        <div className="featured">
            <Title name = " Featured" header = "New Arrival"/>
            <div className="featured-row">
                <div className="featured-col" id="perfume">
                    <img src={perfume} />
                    <ColTitle heading = "PlayStation 5" paragraph = "Black and White version of the PS5 coming out on sale." btn = "Shop Now" />
                </div>
                <div className="featured-col">
                    <div className="feature-up">
                        <img src={plays} />
                        <ColTitle heading = "Women’s Collections" paragraph = "Featured woman collections that give you another vibe." btn = "Shop Now" />
                    </div>
                    <div className="feature-down">
                        <div className="down">
                            <img src={speakers} />
                            <ColTitle heading = "Speakers" paragraph = "Amazon wireless speakers" btn = "Shop Now" />                            
                        </div>
                        <div className="down">
                            <img src={play} />
                            <ColTitle heading = "Perfume" paragraph = "GUCCI INTENSE OUD EDP" btn = "Shop Now" />
                        </div>
                    </div>
                </div>                
            </div>
        </div>
        
        </>
    )
}

export default Featured;