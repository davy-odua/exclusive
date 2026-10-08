import Title from "./Title";
import '../index.css';
import plays from '../../images/ps5-1.jpg';
import desktop1 from '../../images/desktop1.jpg';
import speakers from '../../images/speakers.jpg';
import perfume from '../../images/perfume.jpg';
import play from '../../images/ps5-2.jpg'

function Featured(){
    return(
        <>
        <div className="featured">
            <Title name = " Featured" header = "New Arrival"/>
            <div className="featured-row">
                <div className="featured-col" id="perfume">
                    <img src={perfume} />
                </div>
                <div className="featured-col">
                    <div className="feature-up">
                        <img src={plays} />
                    </div>
                    <div className="feature-down">
                        <img src={speakers} />
                        <img src={play} />
                    </div>
                </div>                
            </div>
        </div>
        
        </>
    )
}

export default Featured;