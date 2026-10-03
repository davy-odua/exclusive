import '../index.css'
import pad from '../../images/ps.jpg'
import desktop from '../../images/desktop.jpg'
import ps from '../../images/ps2.jpg'
import Title from './Title'

function Categories(){
    return(
        <>
        <div className="categories">
            <Title name = " Categories" header = "Browse by Category" left = "←"  right = "→"/>
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