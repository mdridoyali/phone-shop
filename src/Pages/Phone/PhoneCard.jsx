import { stringify } from "postcss";
import swal from 'sweetalert'

const PhoneCard = ({ phone }) => {
  const { id, image, phone_name, brand_name, price, rating } = phone || {};

  const handleFavorite = () => {
    const addToFavorite = [];
    const favoriteItems = JSON.parse(localStorage.getItem("favorite"));
    if (!favoriteItems) {
      addToFavorite.push(phone);
      localStorage.setItem("favorite", JSON.stringify(addToFavorite));
      swal("Good job!", "Added to the Favorite", "success");
    } else {
      const isExits = favoriteItems.find((phone) => phone.id === id);
      if (!isExits) {
        addToFavorite.push(...favoriteItems, phone);
        localStorage.setItem("favorite", JSON.stringify(addToFavorite));
        swal("Good job!", "Added to the Favorite", "success");
      }
      else{
        swal("Error", "No Duplicate", "error");
      }
    }
  };

  return (
    <div>
      <div className=" flex my-10 justify-center mx-44 items-center border-2  rounded-xl text-gray-700 shadow-md">
        <div className=" w-3/6 text-gray-700">
          <img src={image} alt="image" className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {brand_name}
          </h6>
          <p>Price: {price}</p>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {phone_name}
          </h4>
          <a className="inline-block" href="#">
            <button
              onClick={handleFavorite}
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Add To Favorites
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
