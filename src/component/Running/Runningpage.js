import React from 'react'
import Running from './Running';
import "./Running.css";
const Runningpage = () => {
    const runningproduct =[
        {
            url:"https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1264&q=80",
            heading: "MENS",
            para: "RUNNING"
        },

        {
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gCPjtEnuwchafhgNu8GOYyezz3IU6qGqAg&usqp=CAU",
            heading: "WOMENS",
            para: "RUNNING"
        }
    ];
  return (
    <>
    <div className='main-div-of-the-props'>
    <div  className='second-main-div-of-the-props-in-the-ruuningpage'>
    <div className='props-online-product'>
    {runningproduct.map((val, index) => (
          <Running onlineproduct={val}/>
        ))}
    </div>
    </div>
    </div>
    </>
  )
}

export default Runningpage