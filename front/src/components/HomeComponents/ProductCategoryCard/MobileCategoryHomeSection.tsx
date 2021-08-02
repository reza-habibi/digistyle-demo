import { Link } from "react-router-dom"
import { mobileCategory } from "../../../data"

function MobileCategoryHomeSection() {
    return (
        <div className="sm:hidden w-full grid grid-cols-4 items-center">
            {mobileCategory.map((category:any , index:number)=>(
                <Link key={index} to={category.url}>
                    <div className="flex flex-col justify-center items-center">
                        <div className="rounded-full bg-contain bg-center bg-no-repeat ">
                            <figure>
                                <img src={category.image} alt={category.name} className="rounded-full object-cover w-24 h-24"/>
                            </figure>
                        </div>
                        <span className="text-xl text-gray-700 mt-5">{category.name}</span>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default MobileCategoryHomeSection
