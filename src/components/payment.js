import React from 'react'
import arrowdown from '../assets/arrowdown.svg'
import face from '../assets/face.png'
import lock from '../assets/lock.svg'
import visa from '../assets/visa.png'
import mastercard from '../assets/mastercard.png'
import plus from '../assets/plus.png'
import '../App.css'

function Payment() {
  return (
      <div className="payment">
          <header className="header">
            <div className="personal">
                <h3 className="logo">Trolly</h3>

                <span className="user"><img src={arrowdown} alt="Arrow down" className="arrow" /> <h3 className="name">Annette</h3> <img src={face} alt="Mini human face" className="face" /> </span>
            </div>

            <div className="cardSecurity">
                <h1 className="details">Payment Details</h1>

                <div className="secure">
                    <img src={lock} alt="Lock icon" className="secureStart" />

                    <div className="secureEnd">
                        <h3 className="secureTitle">Card is secure</h3>
                        <span className="secureDescription">Your data is protected, everything will be private</span>
                    </div>
                </div>
            </div>

            <div className="option">
                <span className="optionDetail">Credit Card</span>
                <span className="optionDetail">Paypal</span>
                <span className="optionDetail">Other</span>
            </div>
          </header>
        <div className="cards">
            <div className="cardDetails">

                <div className="cardList">
                    <div className="card one">
                        <span className="card1No">**** 4323</span>
                        <img src={mastercard} alt="mastercard Icon" className="cardIcon" />
                    </div>

                    <div className="card two">
                        <span className="card1No">**** 5442</span>
                        <img src={visa} alt="Visa Icon" className="cardIcon" />
                    </div>

                    <div className="card three">
                        <span className="plus"> <h3 className="plusWord">Add New</h3>  <img src={plus} alt="plus Icon" className="plusIcon" /></span>
                        
                    </div>
                </div>

                </div>

                <div className="cardForm">
                    <div className="cardInfo">
                        <label>Credit Card</label>
                        <input type="textarea" placeholder="4441 2354 3266 5655" className="input"/>
                    </div>

                    <div className="cardInfo">
                        <label>Name</label>
                        <input type="textarea" placeholder="Annette Murphy" className="input"/>
                    </div>

                    <div className="cardMini">
                        <span className="cardInfo mini">
                            <label>Expiration Date</label>
                            <input type="textarea" placeholder="08/2021" className="inputMini" />
                        </span>
                    
                        <span className="cardInfo mini">
                            <label>CVV</label>
                            <input type="textarea" placeholder="407" className="inputMini"/>
                        </span>
                    
                    </div>

                    <div>
                        <button className="buttonBlack">Confirm order</button>
                        <button className="buttonPlain">Cancel and Return</button>
                    </div>
                </div>

            </div>
          
      </div>
  )
}

export default Payment