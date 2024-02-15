
//API
import { LOCALHOST_API } from "../../../utility/API"

//Components
import { Product } from "../../../components/Home/MpFigures/MPFigures"
import { Cart } from "../../../components/Global/Cart/Cart"

// Packages
import { FC, FunctionComponent, useEffect, useState } from "react"
import axios, { Axios, AxiosResponse } from "axios"
import { useFilePicker } from 'use-file-picker';
import {
  FileAmountLimitValidator,
  FileTypeValidator,
  FileSizeValidator,
  ImageDimensionsValidator,
} from 'use-file-picker/validators';
import { v4 as uuidv4 } from 'uuid';

//Styling
import { ItemManagerContainer } from "./ItemManager.style"

/* export interface Product {
  photo : string,
  title : string,
  text : string,
  price : Number,
  discountedPrice : Number,
} */

interface ItemManagerProps {
  screenWidth : number;
  setSelectedProduct : (product : Product)=>void
}

interface FormData {
  photo : string,
  title : string,
  text : string,
  price : string,
  discounted_price : string,
  amount : string
}

interface AxiosData {
  msg : string,
  status : boolean,
  rows ?: Product[]
}

export const getProducts = async (setProducts : React.Dispatch<React.SetStateAction<Product[]>>)=>{
  try {
    const {data : {products}} = await axios.get(`${LOCALHOST_API}/api/v1/furno/admin/getProducts`)
    setProducts(products)
  } catch (error) {
    console.log(`There was an problem : ${error}`)
  }
}

export const ItemManager = ({screenWidth,setSelectedProduct} : ItemManagerProps) => {

  const { openFilePicker, filesContent, loading, errors } = useFilePicker({
    readAs: 'DataURL',
    accept: 'image/*',
    multiple: true,
    validators: [
      new FileAmountLimitValidator({ max: 1 }),
      new FileTypeValidator(['jpg', 'png']),
      new FileSizeValidator({ maxFileSize: 50 * 1024 * 1024 /* 50 MB */ }),
      new ImageDimensionsValidator({
        maxHeight: 5000, // in pixels
        maxWidth: 5000,
        minHeight: 100,
        minWidth: 100,
      }),
    ],
  });

  useEffect(()=>{
    console.log(errors) // if there are some errors it will be posted on console
  },[errors])

  const [products,setProducts] = useState<Product[]>([])
  const [currentProducts,setCurrentProducts] = useState<Product[]>([])

  const [formData,setFormData] = useState<FormData>({
    photo : "",
    discounted_price : "" ,
    price : "",
    text : "",
    title : "",
    amount : "1"
  })

  useEffect(()=>{
    getProducts(setProducts)
  },[])

  useEffect(()=>{
    if(filesContent[0] && filesContent[0].content)
      if(!loading)
        setFormData((oldFormData : FormData)=>{
          return ({
            ...oldFormData,
            photo : filesContent[0].content
          })
        })
      else console.log('loading...')
  },[filesContent])

  const addProduct = () => {
    const { photo, title, text, price, discounted_price , amount }: FormData = formData;

    const amountNumber = parseInt(amount)

    if (title && text && price && amountNumber) {
      for(let i = 0 ; i<amountNumber ; i++) 
        setCurrentProducts((prevProducts: Product[]) => {
          if (discounted_price) return [...prevProducts, { id : uuidv4(), photo, title, text, price, discounted_price , isAdmin : false}] 
          else return [...prevProducts, { id : uuidv4(), photo , title, text, price , discounted_price : "" , isAdmin : false }]
        }) 
    }
  }

  const handleRemove = async (id : string)=> {

    try {
      const {data} = await axios.post<AxiosData>(`${LOCALHOST_API}/api/v1/furno/admin/removeProduct`,{id})
  
      if(data.status){
        if(data.rows) setProducts(data.rows)
      }

    } catch (error) {
      console.log(`There was an problem : ${error}`)
    }
  }

  const handleSave = async ()=>{
    const {data} = await axios.post<AxiosData>(`${LOCALHOST_API}/api/v1/furno/admin/addProducts`,{currentProducts})
    setCurrentProducts(()=>[])
    if(data.status) {
      console.log(data.msg)
      getProducts(setProducts)
    }
  }

  return (
    <ItemManagerContainer>
      <div className="add-product-container">
        <form>
          <div className="image-selector-container">
            <input name="photo" type="text" placeholder="photo" value={formData.photo} onChange={(e)=>{
              setFormData((oP : FormData) =>{
                return ({...oP,[e.target.name] : e.target.value})
              })
            }} />
            <button onClick={(e : React.MouseEvent<HTMLElement>)=>{
              e.preventDefault()
              openFilePicker()
            }} >Check</button> 
          </div>
          <input name="title" type="text" placeholder="title" value={formData.title} onChange={(e)=>{
            setFormData((oP : FormData) =>{
              return ({...oP,[e.target.name] : e.target.value})
            })
          }} />
          <input name="text" type="text" placeholder="text" value={formData.text} onChange={(e)=>{
            setFormData((oP : FormData) =>{
              return ({...oP,[e.target.name] : e.target.value})
            })
          }} />
          <input name="price" type="text" placeholder="price" value={formData.price} onChange={(e)=>{
            setFormData((oP : FormData) =>{
              return ({...oP,[e.target.name] : e.target.value})
            })
          }} />
          <input name="discounted_price" type="text" placeholder="discounted price" value={formData.discounted_price} onChange={(e)=>{
            setFormData((oP : FormData) =>{
              return ({...oP,[e.target.name] : e.target.value})
            })
          }} />
          <input name="amount" type="text" placeholder="amount" value={formData.amount} onChange={(e)=>{
            setFormData((oP : FormData) =>{
              return ({...oP,[e.target.name] : e.target.value})
            })
          }} />
        </form>
        <button onClick={addProduct} >Add Product</button>
      </div>
      <div className="products-container">
        {products.map((products,i)=>{
          return (<Cart {...{...products,isAdmin : true,handleRemove,screenWidth,setSelectedProduct}}   key={i+15} />)
        })}
      </div>
      <div className="current-products-container">
        {currentProducts?.map((currentProducts,i)=>{
          return (<Cart {...{...currentProducts,isAdmin : true,handleRemove,screenWidth,setSelectedProduct}} key={i+45} />)
        })}      
      </div>
      <button onClick={handleSave} >Save</button>
    </ItemManagerContainer>
  )
}

