import axios from "axios";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import { Helmet } from "react-helmet";

export default function ProductDetails() {
  const params = useParams();
  const navigate = useNavigate();
  async function getSingleProduct() {
    return await axios.get(`https://fakestoreapi.com/products/${params.id}`);
  }
  let { data, isLoading } = useQuery("details", getSingleProduct);
  console.log(data?.data);

  useEffect(() => {
    const handleESC = (e) => {
      if (e.key === "Escape") {
       navigate("/product");
      }
    };
    window.addEventListener("keydown", handleESC);
    return () => window.removeEventListener("keydown", handleESC);
  }, [navigate]);
  return (
    <div className="container ">
        <Helmet>
                <title>Product Details</title>
        </Helmet>
       
      {isLoading ? (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="row align-items-center my-5">
          <div className="col-md-3 bg-secondary-subtle">
            <img
              src={data?.data.image}
              alt={data?.data.title}
              className="w-100 p-3"
            />
          </div>
          <div className="col-md-9 my-4">
            <h2>{data?.data.title}</h2>
            <h5>{data?.data.category}</h5>
            <p className="text-secondary">{data?.data.description}</p>
            <p>${data?.data.price}</p>
            {/* <p>{data?.data.rating.count}</p> */}
            <div>
              <button
                className="btn btn-success w-50 float-end"
                onClick={() => {
                  navigate("/product");
                }}
              >
                back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
