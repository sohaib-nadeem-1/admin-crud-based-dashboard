import { eq, ilike } from "drizzle-orm";
import { db } from "../db/index.js";
import { products } from "../db/schema/product.js";

export const getProducts =async (req,res)=>{
 
    const {search} = req.query;
const { category } = req.query;


    if(search){
        let getDataa =await db.select().from(products).where(ilike(products.name,`%${search}%`))
        res.json({
            message :`"Your Product is Found`,
            getDataa,
         
        })
    }

else if(category){
    const getData2 = await db
    .select()
    .from(products)
    .where(eq(products.category, category));
   res.json({

    message : " Your Product CAtergory is Here",
    getData2
   })


}
    else{

       

 
    
    const getData = await db.select().from(products)

    res.json({
        message : "Data IS Fetched SuccessFully",
        getData,
    })
    }
}

export const createProduct = async (req,res)=>{
   try{
     const data = req.body;

  const insertingData = await  db.insert(products).values(data).returning();

  res.status(201).json({
    message : "Data Is Inserted SucessFully",
    insertingData
  })
   }
   catch(error){
        console.log( error)

    res.status(500).json({
        
  Message :      "There is some error in DB or Query",
 
    })
   }
}

export const getProductById = async (req,res)=>{
     const id = Number(req.params.id);

    //  if(id.NaN)
    const GetDataByID =await db.select().from(products).where(eq(products.id, id));
if(GetDataByID.length===0){
    res.status(404).json({
        message : " Product Not Found"
    })
}else{
     res.status(200).json({
        message :" Data Is Fetched SuccessFully",
        GetDataByID
    })
}
   
}

export const ProductUpdating = async(req,res)=>{
    const id = Number(req.params.id);
    const data = req.body;

    const updatingData = await db.update(products).set(data).where(eq(products.id, id)).returning()

    res.json({
        message : "Data Is Updated SucessFully",
        updatingData
    })


}

export const DeletingProduct = async(req,res)=>{
    const id = Number(req.params.id);
    const deletingData = await db.delete(products).where(eq(products.id, id));

    res.json({
        message : "Data Is Deletd SuccessFully",
    })
}