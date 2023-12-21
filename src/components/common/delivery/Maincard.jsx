import Singlecard from "./Singlecard";


export default function Maincards({list}) {
  console.log(list);

  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-10 sm:py-24 lg:max-w-none lg:py-10">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
          <div className=" mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-6">
            {list.map((item, index) => {
              
              return  <Singlecard key={index}  data={item} image={item} index={index}/>
              
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
