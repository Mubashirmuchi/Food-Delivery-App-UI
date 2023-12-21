import React from "react";
import "./Filter.css";

function Filter({ filterlist }) {
  return (
    <div className="flex w-fit m-0 ">
      {filterlist.map((item,i) => {
        return (
          <div key={i} className="filter h-9 w-fit p-2 flex justify-center items-center my-[10px] mr-[20px]">
            {item.dd && <div dangerouslySetInnerHTML={{ __html: item.dd }} />}
            <div className="text-sm text-center ">{item.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Filter;
