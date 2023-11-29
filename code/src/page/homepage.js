import React, { useState } from "react";
import { Link  } from 'react-router-dom';

// data
import perfumes from "../data/perfumes";
import summer from "../data/collection";
// componant
import Popup from "../componant/popup";
// css
import './homepage.css'
// ==========================================
function Homepage() {
    const [popUp, setPopup] = useState(null);
    // popup

    function onOpenPopupClick(thePerfume){
        setPopup(thePerfume);
    };

    function onClosePopupClick(){
        setPopup(null);
    };

    let popPlace = null;
    if(!!popUp){
        popPlace = <Popup perfumes={popUp} onClose={onClosePopupClick} />
    }
    // summer collection
    const collecElement = summer.map((sum, index) => {
        return (
            <div className="perfume" key={index} onClick={()=>{onOpenPopupClick(sum)}}>
                <img src={sum.url} alt="unsplash" className="perf" />
                <h4 className="perf-name">{sum.name}</h4>
            </div>
        );
    });
    // perfume
    const perfumeElement = perfumes.map((perfume, index) => {
        return (
            <div className="perfume" key={index}>
                <img src={perfume.url} alt="unsplash" className="perf" />
                <h4 className="perf-name">{perfume.name}</h4>
            </div>
        );
    });

    return (
        <div className="home">
            <div className="bg">
                <div className="bg-context">
                    <h1 className="text-bg">WELCOME TO THE ATLAS</h1>
                    <h4 className="text-off">Get 10% off sitewide until Sept 30</h4>
                    <div className="btn-place">
                        <button className="btn-bg"><h6>SHOP THE SALE</h6></button>
                    </div>
                </div>
            </div>
            <div className="text">
                <h1 className="text-text">Apply Uniqueness on yourself everyday #Confidence</h1>
            </div>
            {popPlace}
            <div className="container">
                <div className="grid">
                    {perfumeElement}
                </div>
                <div className="collection">
                    <div className="collec-text">
                        <h1>Summer 2024 Lookbook</h1>
                        <h4 className="col-off">Summer 2024 Lookbook</h4>
                        <div className="btn-place">
                            <button className="btn-collec">Explore our lookbook!</button>
                        </div>
                    </div>
                </div>
                <div className="col-item">
                    <div className="text">
                        <h1 className="text-text">Atlas Best Seller</h1>
                    </div>
                    <div className="grid">
                        {collecElement}
                    </div>
                </div>
            </div>
            <div className="text">
                <h1 className="text-text">Try Them Out</h1>
            </div>
            <div className="try">
                <div className="try-place">
                    <div className="container">
                        <div className="try-context">
                            <h5>Free Shipping. <span className="icon-place"><iconify-icon className='icon' icon="fluent:ios-arrow-24-regular" rotate="270deg"></iconify-icon>  </span> </h5>
                            <h6>Free shipping over $100 in Canada and the US. Check out ourShipping Information page for more details.</h6>
                        </div>
                        <div className="try-context">
                            <h5>Easy Return. <span className="icon-place"><iconify-icon className='icon' icon="fluent:ios-arrow-24-regular" rotate="270deg"></iconify-icon></span> </h5>
                            <h6>Easy returns as many times as you need to find the right size. Just contact our team for support!.</h6>
                        </div>
                        <div className="try-context">
                            <h5>Pay in 4. <div className="icon-place"><iconify-icon className='icon' icon="fluent:ios-arrow-24-regular" rotate="270deg"></iconify-icon></div> </h5>
                            <h6>Buy now, pay later! Pay in 4 easy instalments.</h6>
                        </div>
                    </div>
                </div>
            </div>
            <footer className='footer'>
                <div className="container">
                    <div className="footer-text">
                        <div className="footer-info">
                            <h1>ATLAS</h1>
                            <div className="info">
                                <h5 className="kom">Socially and environmentally progressive outdoor footwear <hr></hr></h5>
                            </div>
                        </div>
                        <div className="footer-info">
                            <h5>Our Shop</h5>
                            <div className="info">
                                <h6>All Product</h6>
                                <h6>Summer Collection</h6>
                                <h6>Winter Collection</h6>
                                <h6>Autumn Collection</h6>
                                <h6>Accessories</h6>
                                <h6>Atlas Gift Card</h6>
                            </div>
                        </div>
                        <div className="footer-info">
                            <h5>Help</h5>
                            <div className="info">
                                <h6>Shipping Information</h6>
                                <h6>Refund Policy</h6>
                                <h6>Shipping information</h6>
                                <h6>FAQ </h6>
                            </div>
                        </div>
                        <div className="footer-info">
                            <h5>About us</h5>
                            <div className="info">
                                <h6>Value</h6>
                                <h6>Contract Us</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
};

export default Homepage;