import '../index.css'
import pad from '../../images/ps.jpg'
import desktop from '../../images/desktop.jpg'
import ps from '../../images/ps2.jpg'

function Categories(){
    return(
        <>
        <div className="categories">
            <div className="intro">
                <div className="title-color"></div>
                <h3>Categories</h3>
            </div>
            <div className="title-text">
                <h1>Browse By Category</h1>
                <div className="arrow">
                    <a>←</a>
                    <a>→</a>
                </div>
            </div>
            <div className="image-categories">
                <div className="img-container"><img src={pad} alt="" /> <p>Phones</p> </div>
                <div className="img-container"><img src={desktop} alt="" /> <p>Computers</p> </div>
                <div className="img-container"><img src={pad} alt="" /> <p>SmartWatch</p> </div>
                <div className="img-container"><img src={ps} alt="" /> <p>Camera</p> </div>
                <div className="img-container"><img src={pad} alt="" /> <p>HeadPhones</p> </div>
                <div className="img-container"><img src={pad} alt="" /> <p>Gaming</p> </div>
            </div>
        </div>
        
        </>
    )
}

export default Categories;