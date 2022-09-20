import React from 'react'
import Sellingproducts from './Sellingproducts'
import './Sellingproducts.css'

const Sellingproductspage = () => {
    const onlinesellingproducts = [
        {
            url: "https://oasis.opstatics.com/content/dam/oasis/page/events/ovaltine/in/OnePlusBand.png",
            title: "RADIO + CADRIO PRO",
            para: "SPORTS WATCH",
            img:"https://cdn-icons-png.flaticon.com/128/2377/2377846.png",
            price: "$249.99",
            button: "BUY NOW",
        },


        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaoNCRMvl2rXbXWwItxgQpdQ6RIF4ROt7lMw&usqp=CAU",
            title: "PLASTIC WATER BOTTLE",
            para: "FOR RUNNING",
            image: "https://cdn-icons-png.flaticon.com/128/991/991986.png",
            price: "$16.99",
            button: "BUY NOW",
        },

        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyv2kBSM3fwOwcEi3DN27dCMcCIza5smcdRg&usqp=CAU",
            title: "THERMAL RUNNING",
            para: "GLOVES ELEMENT   ",
            image: "https://cdn-icons-png.flaticon.com/128/991/991985.png",
            price: "$25.99",
            button: "BUY NOW",
        },


        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfbyqhreYDHvkouChUMO9lsecR46LQbhWY1w&usqp=CAU",
            title: "COMPACT RUNNING",
            para: "WAISTPACK",
            image: "https://cdn-icons-png.flaticon.com/128/991/991986.png",
            price: "$34.99",
            button: "BUY NOW",
        },





    ];
  return (
    <>
    <div className='div-of-the-onlinesellingproducts-props'>
    {onlinesellingproducts.map((val, index) => (
          <Sellingproducts sellproducts ={val} />
        ))}
    </div>
    </>
  )
}

export default Sellingproductspage