import { FaTruckFast } from "react-icons/fa6";
import { FaHeadphonesAlt } from "react-icons/fa";
import { RiShieldCheckFill } from "react-icons/ri";


function Customer (){
    return(
        <>
        <div className="customer">
            <div className="customer-col">
                <div className="c-icons"><FaTruckFast className="customer-icons"/></div>
                <h3>FREE AND FAST DELIVERY</h3>
                <p>Free delivery for all orders over $140</p>
            </div>
            <div className="customer-col">
                <div className="c-icons"><FaHeadphonesAlt className="customer-icons"/></div>
                <h3>24/7 CUSTOMER SERVICE</h3>
                <p>Friendly 24/7 customer support</p>                   
            </div>
            <div className="customer-col">
                <div className="c-icons"><RiShieldCheckFill className="customer-icons"/></div>
                <h3>MONEY BACK GUARANTEE</h3>
                <p>We reurn money within 30 days</p>                   
            </div>                                
        </div>
        </>
    )
}

export default Customer;