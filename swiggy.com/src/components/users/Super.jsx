import React from 'react'
import supr from "../../Images/my_account_super.webp";
import appstore from "../../Images/icon-AppStore_lg30tv.webp";
import playstore from "../../Images/icon-GooglePlay_1_zixjxl.webp";
const Super = () => {
  return (
    <div className='jsa'>
      <div className="jsaleft">
        <div className='jsah2'>Swiggy One</div>
        <p className='jsap1'>Get free delivery and extra discounts all across Swiggy.
        <br />
        Your Swiggy One benefits can be availed only on the Swiggy App.</p>
        <div className="stores">
          <img src={appstore} alt="" />
          <img src={playstore} alt="" />
        </div>
      </div>
      <div className="jsaright">
        <img src={supr} alt="" />
      </div>
    </div>
  );
}

export default Super