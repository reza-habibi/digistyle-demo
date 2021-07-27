import { Link } from "react-router-dom";
import { brands } from "../../../data";

function Brands() {
  return (
    <div className="w-full grid grid-cols-3 px-5 mb-5">
      {brands.map((item: any, index: number) => (
        <Link key={index} to={item.url}>
          <div className="bg-white shadow-lg m-3">
            <figure>
              <img src={item.img} alt={item.name} />
            </figure>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Brands;
