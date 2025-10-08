import axios from "axios";
import { useQuery } from '@tanstack/react-query';
import { BallTriangle } from "react-loader-spinner";
import { Link } from "react-router-dom";
import FilterSearch from "../FilterSearch/FilterSearch";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import {Helmet} from "react-helmet";
import style from './Productlist.module.css'

export default function ProductList() {
  let { searchTerm, category, sortProduct } = useContext(ProductContext);
  async function showAllProduct() {
    return await axios.get(`https://fakestoreapi.com/products`);
  }
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: showAllProduct,
  });
  //  console.log(data?.data)
  const filterData = data?.data.filter((product) => {
    const matcheTerm = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matcheCategory = category === "all" || product.category === category;
    return matcheTerm && matcheCategory;
  });
  if (sortProduct === "priceLow") {
    filterData.sort((a, b) => a.price - b.price);
  } else if (sortProduct === "priceHigh") {
    filterData.sort((a, b) => b.price - a.price);
  } else if (sortProduct === "Alphabetical") {
    filterData.sort((a, b) => a.title.localeCompare(b.title));
  }
  return (
    <div className={`${style.product}`}>
        <Helmet>
                <title>Product Page</title>
        </Helmet>
      <FilterSearch />
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
        <div className="container">
          <div className="row g-3 my-3">
            {filterData.map((product) => {
              return (
                <div className="col-sm-12 col-md-4 col-lg-3 d-flex" key={product.id}>
                  <Link to={`/prodDetail/${product.id}`} className="text-decoration-none text-dark flex-fill ">
                    <div className={`${style.productcart} h-100 d-flex flex-column`}>
                          <img
                            src={product.image}
                            className="w-100"
                            alt={product.title}
                            style={{
                              height: "13rem",
                              objectFit: "contain",
                              background: "#f8f8f8",
                              borderRadius: "8px",
                              padding: "10px",
                            }}
                          />
                      <div className="product-body p-3 mt-auto">
                        <h5 className="product-title fw-normal">
                          {product.title.split(" ").splice(0, 2).join(" ")}
                        </h5>
                        <h5 className="fw-normal text-success">{product.category}</h5>
                        <p className="text-secondary">${product.price}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
