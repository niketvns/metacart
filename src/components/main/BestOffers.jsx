import React from 'react';
import offer1 from '../../images/best-offer-1.png';
import offer2 from '../../images/best-offer-2.png';
import offer3 from '../../images/best-offer-3.png';
import offer4 from '../../images/best-offer-4.png';
import offer5 from '../../images/best-offer-5.png';
import offer6 from '../../images/best-offer-6.png';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { NavLink } from 'react-router-dom';

const BestOffers = () => {
    return (
        <>
            <div className="best-offers">
                <h2>Best Offers Today</h2>
                <div className="items">
                    <div className="item item1">
                        <span><LocalOfferIcon />-10%</span>
                        <img src={offer1} alt="image" />
                    </div>
                    <div className="item item2">
                        <span><LocalOfferIcon />-13%</span>
                        <img src={offer2} alt="image" />
                    </div>
                    <div className="item item3">
                        <span><LocalOfferIcon />-25%</span>
                        <img src={offer3} alt="image" />
                    </div>
                    <div className="item item4">
                        <span><LocalOfferIcon />-40%</span>
                        <img src={offer4} alt="image" />
                    </div>
                    <div className="item item5">
                        <span><LocalOfferIcon />-33%</span>
                        <img src={offer5} alt="image" />
                    </div>
                    <div className="item item6">
                        <span><LocalOfferIcon />-60%</span>
                        <img src={offer6} alt="image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestOffers;