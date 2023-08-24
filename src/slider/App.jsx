import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Slider.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function App() {
  const [productimg, setProductimg] = useState("")
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)

    axios.get("https://fakestoreapi.com/products/" + page)
      .then((product) => {
        setProductimg(product.data)
        setIsLoading(false)
        console.log(product.data)
      })
  }, [page])

  function Loader() {
    return <h2>Loading....</h2>
  }

  return (
    <>
      {isLoading === false ? (
        <>
          <div className="slider">
            <div className="left">
              <img src={productimg.image} alt="product name" />
            </div>
            <div className="right">
              <h3>{productimg.title}</h3>
              <p>{productimg.description}</p>
            </div>
          </div>
          <div className="navigation">
            <button disabled={page === 1 ? true : false}
              onClick={() => setPage(page - 1)}>
              <ArrowBackIosIcon />
            </button>
            <button onClick={() => setPage(page + 1)}>
              <ArrowForwardIosIcon />
            </button>
          </div>
        </>
      )
        : <Loader />
      }
    </>
  )
}
export default App
