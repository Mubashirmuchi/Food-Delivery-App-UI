import React from "react";

function Navbar() {
  return (
    <div className="navbar w-full flex items-center mb-2  h-[72px]">
      <div className="logo max-w-[120px] mr-3">
       <img
          className="w-[126px] h-[27px] block cursor-pointer"
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt=""
        />
      </div>

      <ul className="flex items-center justify-between py-1 w-full  h-[62px]">
        <li className="w-[70%] m-1 h-full">
          <div
            style={{ boxShadow: "rgba(28, 28, 28, 0.08) 0px 2px 8px" }}
            className="input flex h-full rounded-lg items-center"
          >
            <div className="location py-[10px] px-3 flex max-w-[243px] h-[100%]  rounded-[0.8rem]py-[1rem]   content-center item-center">
              <i className="max-w-[20px] max-h-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FF7E8B"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  class="sc-rbbb40-0 iRDDBk"
                >
                  <title>location-fill</title>
                  <path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"></path>
                </svg>
              </i>
              <input
                className="w-[174px] ml-2 mr-1 focus:outline-none"
                type="text"
                placeholder="Kerala"
                name=""
                id=""
              />
              <i className="max-w-[12px] max-h-[12px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#4F4F4F"
                  width="12"
                  height="12"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  class="sc-rbbb40-0 ezrcri"
                >
                  <title>down-triangle</title>
                  <path d="M20 5.42l-10 10-10-10h20z"></path>
                </svg>
              </i>
            </div>
            <div
              style={{
                height: "24px",
                width:"1.5px"
                ,background:"rgb(207, 207, 207)"
              }}
              className="partitian"
            ></div>

            <div className="search w-full justify-start flex items-center">
              <div className="seacricon m-1 w-fit ">
                <i className="flex w-fit mx-2">
                  
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#828282"
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    aria-labelledby="icon-svg-title- icon-svg-desc-"
                    role="img"
                    className="max-w-[30px] mx-2"
                  >
                    <title>Search</title>
                    <path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path>
                  </svg>
                </i>
              </div>
              <input
                type="text"
                placeholder="Search for restaurant, cuisine or a dish"
                className=" border-none text-base w-full focus:outline-none max-w-[410px]"
              />
            </div>
          </div>
        </li>

        <div className="wrap flex w-fit">
          <li className="mr-8 w-fit">
            <a style={{ color: "rgb(105, 105, 105)" }} href="#">
              Login
            </a>
          </li>
          <li className="mr-8 w-fit">
            <a style={{ color: "rgb(105, 105, 105)" }} href="#">
              Signup
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
