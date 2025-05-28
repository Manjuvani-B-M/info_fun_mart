import React, { useEffect, useState } from 'react'
import '../assets/styles/shopping.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Shopping = () => {
  let [product, setProduct] = useState([])
  let navigate = useNavigate()


  useEffect(() => {
    let fetchApi = async () => {
      let productData = await axios.get('http://localhost:4000/products')
      setProduct(productData.data)

    }
    fetchApi()
  }, [])

  let handlClick = (id) =>{
    navigate(`/loginportal/viewproducts/${id}`)
  }

  return (


    <>
      <div className="shopping">
        <div className="header">
          <h1>Shopping</h1>
        </div>

        <div className="container">

          {product.map((ele, index) => {
            let { title, images, brand, price, description,id } = ele
          
            
            return (
              <>

                <div className="card" key={id} onClick={() => handlClick(id)} >
                  <div className="images"><img src={images} alt="" /></div>
                  <div className="title">{title}</div>
                  <div className="brand-div">
                    <div className="brand">brand : {brand}</div>
                    
                  </div>
                  <div className="description">{description}</div>
                  <div className="price-div">
                    <div className="price">price : {price}</div> </div>  
                </div>

              </>
            )
          })}



        </div>
      </div>
    </>
  )
}

export default Shopping