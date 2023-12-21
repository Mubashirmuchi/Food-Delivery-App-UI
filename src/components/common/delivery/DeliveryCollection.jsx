import React from "react";
import Nextarrow from "../carousal/Nextarrow.jsx";
import Previousarrow from "../carousal/Previousarrow.jsx";
import Slider from "react-slick";
import Delcard from "./Delcard.jsx";
import "./Deliverycollection.css"

const Deliverycollections = [
  {
    id: "1",
    title: "Biryani",
    cover:
      "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
  },
  {
    id: "2",
    title: "Chicken",
    cover:
      "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png?fit=around|120:120&crop=120:120;*,*",
  },
  {
    id: "3",
    title: "Fried rice",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png?fit=around|120:120&crop=120:120;*,*",
  },
  {
    id: "4",
    title: "Pizza",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png?fit=around|120:120&crop=120:120;*,*",
  },
  {
    id: "5",
    title: "Cake",
    cover:
      "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png?fit=around|120:120&crop=120:120;*,*",
  },
  {
    id: "6",
    title: "Veg meal",
    cover:
      "https://b.zmtcdn.com/data/dish_photos/bda/9cdab6d5f275b8d2532e3878134ddbda.jpg?fit=around|120:120&crop=120:120;*,*",
  },
  {
    id: "7",
    title: "Paneer",
    cover:
      "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png?fit=around|120:120&crop=120:120;*,*",
  },
  {
    id: "4",
    title: "Chowmein",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/c21624eac87ed1c8c87ef1ea52980ded1632716659.png?fit=around|120:120&crop=120:120;*,*",
  },
  {
    id: "5",
    title: "Chicken Mandi",
    cover: "https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg",
  },
];

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextarrow: <Nextarrow />,
  previousarrow: <Previousarrow />,
};

function DeliveryCollection() {
  return (
    <div>
      <h1 className="my-[32px] text-4xl font-normal">DeliveryCollection</h1>

      <div className="max-h-[330px] flex">
        <Slider {...settings}>
          {Deliverycollections.map((itm,i) => {
            return <Delcard key={i} itemname={itm.title} itemimg={itm.cover} />;
          })}
        </Slider>
      </div>
    </div>
  );
}

export default DeliveryCollection;
