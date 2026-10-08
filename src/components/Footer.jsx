import "../index.css";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { RxPaperPlane } from "react-icons/rx";
import { BiCopyright } from "react-icons/bi";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-1">
          <div className="footer-col">
            <h2>Exclusive</h2>
            <h3>Subscribe</h3>
            <p>Get 10% off your first order</p>
            <div className="messager">
              <input type="text" placeholder="Enter you Email" />
              <RxPaperPlane className="sender" />
            </div>
          </div>
          <div className="footer-col">
            <h3>Support</h3>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+254-707-070-707</p>
          </div>
          <div className="footer-col">
            <h3>Account</h3>
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>
          <div className="footer-col">
            <h3>Quick Link</h3>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
          <div className="footer-col">
            <h3>Download App</h3>
            <p>Save $3 with App New User Only</p>
            <div className="google">
              <FaGooglePlay className="googlePlay" />
              <p>
                GET IT ON <h3>Google Play</h3>
              </p>
            </div>
            <div className="apple">
              <FaApple className="appleStore" />
              <p>
                Download on The <h3>App Store</h3>
              </p>
            </div>
            <div className="social-icons">
              <TiSocialFacebook className="social" />
              <FaXTwitter className="social" />
              <IoLogoInstagram className="social" />
              <FaLinkedinIn className="social" />
            </div>
          </div>
        </div>
        <div className="copy-right">
            <p> <span><BiCopyright /></span> Copyright Davy 2026. All right reserved</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
