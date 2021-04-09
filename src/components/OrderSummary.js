import React from 'react'
import cartoutline from '../assets/cartoutline.png'
import cardoutline from '../assets/cardoutline.png'
import refresh from '../assets/refresh.png'
import arrowup from '../assets/arrowup.svg'
import arrowdown from '../assets/arrowdown.svg'
import '../App.css'

function OrderSummary() {
    return (
        <div className="order">
            <h1 className="orderTitle">Order summary</h1>

            <div className="orderProcess">
                <div className="orderCard">
                    <div className="cartContain contain">
                        <img src={cartoutline} alt="Cart" className="cart orderIcon" />
                    </div>
                    
                    <span className="orderStep">
                        Step 1 <br/> Shipping
                    </span>
                </div>

                <div className="orderCard">
                    <div className="cardContain contain">
                        <img src={cardoutline} alt="Card" className="card orderIcon" />
                    </div>
                    
                    <span className="orderStep">
                        Step 2 <br/> Payment
                    </span>
                </div>

                <div className="orderCard">

                    <div className="review contain">
                    <img src={refresh} alt="review" className="review orderIcon" />
                    </div>
                    
                    <span className="orderStep">
                        Step 3 <br/> Review
                    </span>
                </div>

            </div>

            <div className="orderDetails">
                <span className="orderDetail brands">
                    <p>Prada</p>
                    <img src={arrowup} alt="Arrow" className="arrow" />
                </span>

                <span className="orderDetail">
                    <p>Leather mini-bag</p>
                    <p>$1850.00</p>
                </span>

                <span className="orderDetail">
                    <p>Estimated shipping</p>
                    <p>$370.00</p>
                </span>

                <span className="orderDetail">
                    <p>Discount</p>
                    <p>$0.00</p>
                </span>

                <span className="orderDetail">
                    <p>Total</p>
                    <p>$2220.00</p>
                </span>

                <span className="orderDetail brands">
                    <p>Dr.Martens</p>
                    <img src={arrowdown} alt="Arrow" className="arrow" />
                </span>

                <span className="orderDetail brands">
                    <p>Chanel</p>
                    <img src={arrowdown} alt="Arrow" className="arrow" />
                </span>

                <span className="total">
                    <p>Total Amount:</p>
                    <p>$3680.60</p>
                </span>
            </div>
        </div>
    )
}

export default OrderSummary