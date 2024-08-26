import { createContext, useEffect, useState } from "react"



export const ImageContext = createContext();

function ImageContextProvider({children}) {
    const [images, setImages] = useState([])
    const [countries, setCountries] = useState([])
    const [singleCountry, setSingleCountry] = useState("bangladesh")
    const fetchImageData =async ()=>{
        const imageApi = await fetch(`https://pixabay.com/api/?key=45630201-970e44b3f80d3b333377ccc0a&q=${singleCountry}&image_type=photo&pretty=true`)
        const image = await imageApi.json();
        setImages(image.hits)
    }

    const fetchCountry =async ()=>{
        const countryApi = await fetch("https://countriesnow.space/api/v0.1/countries")
        const country = await countryApi.json();
       setCountries(country.data);
    }

console.log(singleCountry);

    






    useEffect(()=>{
        fetchImageData();
        fetchCountry();
    },[singleCountry])





  return (
    <ImageContext.Provider value={{images, countries, setSingleCountry}}>
        {children}
    </ImageContext.Provider>

  )
}

export default ImageContextProvider
