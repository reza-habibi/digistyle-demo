import { Link } from "react-router-dom";
import { brands } from "../../../data";

function Brands() {
  return (
    <div className="w-full grid grid-cols-3 md:grid-cols-6 px-5 mb-5 text-center">
      {brands.map((item: any, index: number) => (
        <Link key={index} to={item.url}>
          <div className="bg-white shadow-lg m-3 flex justify-center">
            <figure className="text-center w-full">
              <img src={item.img} alt={item.name} className="mx-auto md:w-full"/>
            </figure>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Brands;
