import { useEffect, useState } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [noData, setNoData] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0)

  console.log(isShow)
  const handleDelete=()=>{
    localStorage.clear();
    setFavorites([])
     setNoData("No Data Found");
  };

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorite"));
    if (favoriteItems) {
      setFavorites(favoriteItems);
      const total = favoriteItems.reduce((preValue, currentItem)=> preValue+currentItem.price , 0).toFixed(2) ;
      setTotalPrice(total)
    } else {
      setNoData("No Data Found");
    }
  }, []);

  return (
    <div>
    <p>Total Price: {totalPrice}</p>
      {favorites.length > 0 && <div className="flex justify-center mt-3"> <button onClick={handleDelete} className="btn btn-primary">DELETE ALL</button></div>}
      {/* break */}
      {noData ? (
        <p className="flex justify-center items-center h-[80vh] text-3xl font-bold">
          {noData}
        </p>
      ) : (
        <div className="grid grid-cols-2 ">

          { isShow ? favorites.map((phone, idx) => (
            <div key={idx}>
              <div className=" flex my-10 justify-center mx-44 items-center border-2  rounded-xl text-gray-700 shadow-md">
                <div className=" w-3/6 text-gray-700">
                  <img
                    src={phone.image}
                    alt="image"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                    {phone.brand_name}
                  </h6>
                  <p>Price: {phone.price}</p>
                  <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {phone.phone_name}
                  </h4>
                </div>
              </div>
            </div>
          ))
          :
          favorites.slice(0,2).map((phone, idx) => (
            <div key={idx}>
              <div className=" flex my-10 justify-center mx-44 items-center border-2  rounded-xl text-gray-700 shadow-md">
                <div className=" w-3/6 text-gray-700">
                  <img
                    src={phone.image}
                    alt="image"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                    {phone.brand_name}
                  </h6>
                  <p>Price: {phone.price}</p>
                  <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {phone.phone_name}
                  </h4>
                </div>
              </div>
            </div>
          ))
          
          }

        </div>
      )}

     {favorites.length > 2 &&  <div className="flex justify-center mt-3"> <button onClick={ ()=> setIsShow(!isShow)} className="btn btn-primary">{favorites.length > 2 ? 'SEE ALL' : 'SEE LESS'}</button></div>}
    </div>
  );
};

export default Favorites;
