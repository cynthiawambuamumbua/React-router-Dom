import React,{useEffect,useState} from "react";
import {
    Link
  } from "react-router-dom";
import './style.css'
const Products=()=>{
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        (async()=>{
            await getProducts()

        })()
        
    },[]);
    console.log({products});


    const getProducts=async ()=>{
        try{
            const response=await fetch('https://dummyjson.com/products')
            const result=await response.json()
            setProducts(result.products)
            setLoading(false)

        }
        catch(error){
            console.log(error.message);
        }
    }
    if(loading){
        return <h2>loading...</h2>
    }
    return(
        <div className="products">
            <Link to={`/AddProducts/` }className="button">
           <button type="add" className="add">Add product</button >
           </Link>
           

            {products.map(item=>(
                <div key={item.id}>
                <img src={item.thumbnail} alt={item.item} img/>
                    <h3>{item.title}</h3>
                    <h4>{item.discountPercentage}%</h4>
                    <h5>{item.price}</h5>
                    <Link to={`/products/${item.id}` }className="button"> 
                    <button type="add" className="btn">View Details</button >
                   </Link>
                    </div>

            ))}
        </div>
    )
}
export default Products;

