import React from 'react'
import "./Sellingproducts.css"

const Sellingproducts = (props) => {
  return (
    <>
    <div className='main-div-of-the-selling-products'>
<div className='main-div-of-the-smart-watch'>
    <img className='img-of-smart-watch' src={props.sellproducts.url} alt=""/>
    </div>
    <div className='main-div-of-content-in-the-smart-watch'>
    <div>
        <h5 className='div-of-cardio-and-radio-pro'>{props.sellproducts.title}</h5>
    </div>
    <div>
    <h5 className='div-of-cardio-and-radio-pro'>{props.sellproducts.para}</h5>
    </div>
    <div>
      <img className='rating-star-icon' src={props.sellproducts.image}/>
    </div>
    <div><h5 className='div-of-price-tag'>{props.sellproducts.price}</h5>
    </div>
    <div className='div-of-the-buy-now-products'>
    <button className='buy-now-button' type="button"><b>{props.sellproducts.button}</b></button>
    </div>
    </div>
    </div>	
    </>	
  )
}

export default Sellingproducts