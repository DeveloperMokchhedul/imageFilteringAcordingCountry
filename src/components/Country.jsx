import { useContext } from 'react'
import { ImageContext } from '../context/ImageContext'

function Country() {
    const {countries, setSingleCountry} = useContext(ImageContext)

    const handleCountry=(item)=>{
        setSingleCountry(item.country);
    }

    
  return (
    <>
    <div className='container mx-auto flex gap-1 flex-wrap my-10 justify-between'>
        {
            countries && countries.slice(0,50).map((item)=>(
                <div key={item.iso2}>
                    <button onClick={()=>handleCountry(item)} className='bg-black text-white px-5 rounded-lg'>{item.country}</button>
                </div>
            )) 

        }
    </div>
      
    </>
  )
}

export default Country
