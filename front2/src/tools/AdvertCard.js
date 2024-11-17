import React from 'react'
import './card.css'

 const AdvertCard = (  {
  key, title,
  price,
  description,
  imageAdvert,city,
  category}) =>  {
  
    return (
      <div>


<div className="container page-wrapper">
  <div className="page-inner">
    <div className="row">
      <div className="el-wrapper">
        <div className="box-up">
          <img className="img" src={imageAdvert} alt />
          <div className="img-info">
            <div className="info-inner">
              <span className="p-name">{title}</span>
              <span className="p-company">{description}</span>
            </div>
            <div className="a-size">Available in :<span className="size"> {city} </span></div>
          </div>
        </div>
        <div className="box-down">
          <div className="h-bg">
            <div className="h-bg-inner" />
          </div>
          <a className="cart" href="#">
            <span className="price">{price} dt</span>
            <span className="add-to-cart">
              <span className="txt">more details</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>


      
      
      </div>
    )
}
export default AdvertCard;
