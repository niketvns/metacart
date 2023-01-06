import React from 'react';
import './footer.css';
import googlePlay from '../../images/play-store.svg';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {

    let newYear = new Date().getFullYear();

    return (
        <>
            <div className="bg-img">
                <a href='https://twitter.com/Niketmishravns'>Follow Us On Twitter</a>
            </div>
            <footer>
                <div className="details">
                    <div className="about">
                        <h3>MetaCart</h3>
                        <p>About Us</p>
                        <p>Browse Product</p>
                        <p>Contact Us</p>
                        <p>FAQs</p>
                    </div>
                    <div className="connect">
                        <h3>Follow Us</h3>
                        <p>LinkedIn</p>
                        <p>Twitter</p>
                        <p>GitHub</p>
                        <p>Instagram</p>
                    </div>
                    <div className="collection">
                        <h3>Collections</h3>
                        <p>Summer 2022</p>
                        <p>Winter 2022</p>
                        <p>Men's Collection</p>
                        <p>Women's Collection</p>
                        <p>Shoes</p>
                    </div>
                    <div className="customer-care">
                        <h3>Customer Care</h3>
                        <p>Order Tracking</p>
                        <p>Privacy Policy</p>
                        <p>Payments and Returns</p>
                        <p>FAQs</p>
                    </div>
                </div>
                <div className="get-app">
                    <div className="icon-text">
                        <img src={googlePlay} alt="" />
                        <p>Get the App</p>
                    </div>
                    <div className="social-media">
                        <a href=""><GitHubIcon /></a>
                        <a href=""><LinkedInIcon /></a>
                        <a href=""><TwitterIcon /></a>
                        <a href=""><InstagramIcon /></a>
                    </div>
                </div>
                <hr />
                <div className="copyright">
                    &#169; Copyright {newYear} | MetaCart
                </div>
            </footer>
        </>
    )
}
