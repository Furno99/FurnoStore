
import { useEffect, useState } from "react"
import { BrandsContainer } from "./Brands.style"
import { BrandImages } from "./BrandImages"

const Brands = () => {

  return (
    <BrandsContainer>
      {BrandImages.map((data : string)=>{
        console.log(data)
        return (<img src={data} />)
      })}
    </BrandsContainer>
  )
}

export default Brands
