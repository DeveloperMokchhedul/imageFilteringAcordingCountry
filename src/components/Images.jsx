import { useContext } from "react"
import { ImageContext } from "../context/ImageContext"
import Country from "./Country"


function Images() {
    const { images } = useContext(ImageContext)

    return (
        <>
        <Country />
            <div className="grid grid-cols-12 gap-5">
                {
                    images && images.map((item) => (
                        <div key={item.id} className="col-span-3  ">
                            <img className="object-cover w-[300px] h-[300px]" src={item.largeImageURL
                            } alt="" />

                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default Images
