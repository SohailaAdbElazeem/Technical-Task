import axios from "axios";
import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { ProductContext } from "../../context/ProductContext";

export default function FilterSearch() {
  let {
    searchTerm,
    setSerch,
    category,
    setCategory,
    sortProduct,
    setSortProduct,
  } = useContext(ProductContext);

  async function getCategories() {
    return await axios.get(`https://fakestoreapi.com/products/categories`);
  }
  let { data } = useQuery("categories", getCategories);
  console.log(data?.data);

  return (
    <div className="container my-4">
      <div className="row align-items-center">
        <div className="header col-md-6 mb-3 ">
          <h2 className="text-success">My Products</h2>
          <p className="text-body-tertiary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
            deleniti.
          </p>
        </div>
        <div className=" col-md-6 mb-3">
          <div className="row g-2">
            <div className="col-12 col-sm-12 col-md-4  mb-3">
              <input
                type="text"
                placeholder="Search Products"
                className="form-control"
                value={searchTerm}
                onChange={(e) => {
                  setSerch(e.target.value);
                }}
              />
            </div>

            <div className="col-12 col-sm-12 col-md-4  mb-3">
              <div className="dropdown w-100">
                <button
                  className="btn btn-secondary dropdown-toggle w-100"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {category === "all" ? "Category" : category}
                </button>
                <ul className="dropdown-menu w-100">
                  <li>
                    <button
                      type="btn"
                      className="dropdown-item"
                      onClick={() => {
                        setCategory("all");
                      }}
                    >
                      {category}
                    </button>
                  </li>
                  {data?.data.map((categor, index) => {
                    return (
                      <li key={index}>
                        <button
                          type="btn"
                          className="dropdown-item"
                          onClick={() => {
                            setCategory(categor);
                          }}
                        >
                          {categor}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-4  mb-3">
              <div className="dropdown w-100">
                <button
                  className="btn btn-secondary dropdown-toggle w-100"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {sortProduct === "none" ? "Sorting" : sortProduct}
                </button>
                <ul className="dropdown-menu w-100">
                  <li>
                    <button
                      className="dropdown-item "
                      onClick={() => {
                        setSortProduct("priceLow");
                      }}
                    >
                      Price: Low → High
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item "
                      onClick={() => {
                        setSortProduct("priceHigh");
                      }}
                    >
                      Price: High → Low
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item "
                      onClick={() => {
                        setSortProduct("Alphabetical");
                      }}
                    >
                      Alphabetical (A–Z)
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
