// Importing Types
import {Request,Response} from "express"
// Adding Query
import { query } from "../../database/intex"

export interface Product {
    id : string,
    photo : string,
    title : string,
    text : string,
    price : string,
    discounted_price : string
}

interface RequestBody {
    currentProducts : Product[];
}

// Get All Products From DB
export const getProducts = async (req : Request,res : Response)=>{

    try {
        const {rows} = await query("SELECT * FROM store_products",[])
        res.json({
            status : true,
            msg : "send success",
            products : rows
        })
    } catch (error) {
        console.log(error)
        res.json({
            status : true,
            msg : "There was an error : "+error
        })
    }

}

// Add New Procuts to DB
export const addProducts = async (req: Request<{}, {}, RequestBody>, res: Response) => {

    try {
        const { currentProducts } = req.body

        console.log(currentProducts[0])

        currentProducts.forEach( async (product: Product) => {
            const {id,photo,title,text,price,discounted_price} : Product = product
            const priceData = parseFloat(price)
            const discountedPriceData = parseFloat(discounted_price)
            console.log(priceData," ",discountedPriceData)
            if(photo)
                if(discounted_price) 
                    await query("INSERT INTO store_products (id,photo,title,text,price,discounted_price) VALUES($1,$2,$3,$4,$5,$6)",[id,photo,title,text,priceData,discountedPriceData])
                else
                    await query("INSERT INTO store_products (id,photo,title,text,price) VALUES($1,$2,$3,$4,$5)",[id,photo,title,text,priceData])
            else if(discounted_price) 
                await query("INSERT INTO store_products (id,title,text,price,discounted_price) VALUES($1,$2,$3,$4,$5)",[id,title,text,priceData,discountedPriceData])
            else 
                await query("INSERT INTO store_products (id,title,text,price) VALUES($1,$2,$3,$4)",[id,title,text,priceData])        
        })
        const {rows} = await query("SELECT * FROM store_products",[])
        res.json({
            status : true,
            msg : "add product success",
            rows
        })
    } catch (error) {
        console.log(error);
        res.json({
            status : false,
            msg : "There was an error : "+error,
        })
    }   
}

//Remove Product From DB
export const removeProduct = async (req : Request<{},{},{id : string}> ,res : Response)=>{

    try {
        const {id} = req.body
        await query(`DELETE FROM store_products WHERE id = $1`,[id])
        const {rows} = await query("SELECT * FROM store_products",[])

        res.json({
            status : true,
            msg : "remove product success",
            rows
        })
    } catch (error) {
        console.log(error)
        res.json({
            status : false,
            msg : "Ther was an error :"+error,
        })
    }
}
