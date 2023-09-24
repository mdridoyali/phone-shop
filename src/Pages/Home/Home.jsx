import { useLoaderData} from "react-router-dom";
import Phones from "../../Components/Header/Navbar/Phones/Phones";

const Home = () => {
  const phones = useLoaderData();

  return (
    <div>
      <div className="h-[50vh] bg-green-200 text-center text-5xl">
        <h2> Banner</h2>
      </div>
      <Phones phones={phones} ></Phones>
    </div>
  );
};

export default Home;
