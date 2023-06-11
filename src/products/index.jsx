import React, { useMemo, useState } from "react";

import Button from "../shared/components/button/Button";

import { filterButtons } from "./utils/filterButtons";
import { allProducts } from "./utils/allProducts";

import classes from "./index.module.css";

const Products = () => {
  const [showAll, setShowAll] = useState(false);
  const [filteredType, setFilteredType] = useState("all");
  const [displayCount, setDisplayCount] = useState(4);

  const filtered = useMemo(() => {
    if (filteredType === "all") return allProducts;
    return allProducts.filter((item) => item.type === filteredType);
  }, [filteredType]);

  const handleShowMore = () => {
    setDisplayCount(filtered.length);
  };

  return (
    <div id="products" className={classes["products-wrapper"]}>
      <div className={classes["header"]}>Our Best Product</div>
      <div className={classes["filter"]}>
        {filterButtons.map((button) => {
          return (
            <p
              className={`${classes["filter-button"]} ${
                filteredType === button.status ? classes["active"] : null
              }`}
              key={button.id}
              onClick={() => setFilteredType(button.status)}
            >
              {button.title}
            </p>
          );
        })}
      </div>
      <div className={classes["products"]}>
        {filtered.slice(0, displayCount).map((product) => {
          return (
            <div
              className={classes["product"]}
              style={{ backgroundColor: product.bgColor }}
              key={product}
            >
              <img
                className={classes["product-image"]}
                src={product.image}
                alt="product"
              />
              <p className={classes["product-name"]}>{product.name}</p>
              <p className={classes["product-rate"]}>
                {Array.from({ length: product.rate }, (_, index) => (
                  <div key={index}>⭐</div>
                ))}
              </p>
              <p className={classes["product-price"]}>${product.price}</p>
            </div>
          );
        })}
      </div>
      {displayCount < filtered.length && (
        <Button
          onClick={handleShowMore}
          className={classes["button"]}
          title="View All"
        />
      )}
    </div>
  );
};

export default Products;
