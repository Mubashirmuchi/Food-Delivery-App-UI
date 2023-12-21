import React from 'react'
import "./Singlecard.css"
function Singlecard({data,image,index}) {
  const title = data?.info?.name;
  const cover = data?.info?.image?.url;
          console.log(data);

          

  return (


<div class="card flex flex-col justify-between max-h-[408px]">
  <div className="ima">
  <img src={cover} className='h-full ' alt="Restaurant Image" />

  </div>
  <div class="card-content">
    <div class="restaurant-name">{title}</div>
    
    <div class="additional-details">Free Delivery above $30</div>
  </div>
</div>

   )
}

export default Singlecard