import React from 'react'
import "./taboption.css"

const tabs = [
  {
    id:1,
    name:"Delivery",
    bgcol:"rgb(252, 238, 192",
    textcol:"rgb(239, 79, 95)",
    imga:"https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
    imgia:"https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
  },
  { 
    id:2,
    name:"Dinning",
    bgcol:"rgb(229, 243, 243)",
    textcol:"rgb(239, 79, 95)",
    imga:"https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
    imgia:"https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
  },
  {
    id:3,
    name:"nightlife",
    bgcol:"rgb(237, 244, 255)",
    textcol:"rgb(239, 79, 95)",
    imga:"https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png" ,
    imgia:"https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp"
  }
]


function Taboptions({activeTab,setactiveTab}) {
  return (
    <div className='taboption my-5 max-w-[80%] '>
        <div className="flex max-w-[40%] m-0">
         {tabs.map((tab,i)=>{
          return (
            <div key={i} className='h-fit w-fit flex m-2 'style={{
              cursor: "pointer",
              borderBottom: `${activeTab === tab.name ? "3px solid " + tab.textcol : ""}`
            }} onClick={()=>{setactiveTab(tab.name)}}>
            
            <div  className='photo  p-4 rounded-full  m-2' style={{background:`${activeTab===tab.name ? tab.bgcol :""}` }}  >
                 <div className="pho w-6 h-6">
                  <img src={activeTab==tab.name ? tab.imga : tab.imgia } alt="" />
                 </div>
            </div>
              
              <div style={{color: `${activeTab===tab.name ? tab.textcol : ""}`}} className="tabname w-full">
                  {tab.name}
              </div>
            </div>
          )
         })}
        </div>
    </div>
  )
}

export default Taboptions