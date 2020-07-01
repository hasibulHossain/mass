import React from 'react';
import './Footer.scss';

//icon
import {BsArrowRight} from 'react-icons/bs';

const HELP = ["shop at mass fashion", "product", "gift card", "gift receipt", "payment shipping", "exchanges and returns", "shops and company", "my account"]
const COMPANY = ["web development", "web design", "gift receipt", "payment shipping", "exchanges and returns", "shops and company", "my account"]

function Footer() {
   return (
      <>
      <footer className="footer">
         <div className="row">
            <div className="footer__inner">
               <ul className="footer__lists">
                  <h4 className="footer__lists-heading">help</h4>
                  <List targetArr={HELP} />
               </ul>
               <ul className="footer__lists">
                  <h4 className="footer__lists-heading">company</h4>
                  <List targetArr={COMPANY} />
               </ul>
               <ul className="footer__lists">
                  <h4 className="footer__lists-heading">company</h4>
                  <List targetArr={COMPANY} />
               </ul>
            </div>
         </div>
      </footer>
      <footer className="footer-last">
         <div className="row">
            <div className="footer-last__inner">
               <p>
                  Mass Impressions - &#169; {new Date().getFullYear()} Designed by Tran Mau Tri Tam &amp; development by Hasib 
               </p>
               <div>
                  <p>
                     enter your email here
                  </p>
                  <div>
                     <BsArrowRight />
                  </div>
               </div>
            </div>
         </div>
      </footer>
      </>
   )
}

function List({targetArr}) {
   
   return targetArr.map((item, index) => (
      <li className="footer__list" key={index}>
         <a href="#">
            {item}
         </a>
      </li>
   ))
   
}


export default Footer;
