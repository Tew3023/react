import React from "react";
import { LoremIpsum } from 'react-lorem-ipsum';

import './popup.css'

function Popup(props) {
    const { perfumes, onClose } = props;
    return (
        <div className="popup">
            <div className="pop-bg" onClick={onClose}></div>
                <div className="pop-content">
                    <div className="pop-img">
                        <img className="img" src={perfumes.url} alt="" />
                    </div>
                    <div className="pop-detail">
                        <div className="container">
                            <h4>{perfumes.nameSub}</h4>
                            <hr />
                            <LoremIpsum p={1} />
                            <div className="btn-flex">
                                <button className="btn1">1</button>
                                <button className="btn1">2</button>
                                <button className="btn1">3</button>
                                <button className="btn1">4</button>
                                <button className="btn1">5</button>               
                            </div> 
                            <hr />
                            <button className="btn2">Purchase</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Popup;