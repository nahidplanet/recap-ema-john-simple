import { useEffect, useState } from "react";


const useProducts = () => {
   const [getDataApi,setDataApi] = useState([]);
   useEffect(()=>{
       fetch(`mainData/products.json`)
       .then(res => res.json())
       .then(data => setDataApi(data))
   },[])
   return [getDataApi,setDataApi];
};

export default useProducts;