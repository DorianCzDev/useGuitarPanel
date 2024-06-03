import { useState } from "react";
import { useProducts } from "../services/useProducts";
import { H1 } from "../ui/Headers";
import ProductsRow from "../ui/ProductsRow";
import Spinner from "../ui/Spinner";
import ProductForm from "../ui/ProductForm";
import Button from "../ui/Button";
import ProductImages from "../ui/ProductImages";
import ProductsHeader from "../ui/ProductsHeader";
import ProductsFooter from "../ui/ProductsFooter";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

const StyledInput = styled.input`
  width: calc(100% - 30px);
  background-color: #2f3135;
  color: #fff;
  border: 1px solid #434545;
  font-size: 16px;
  padding: 16px;
  border-radius: 14px;
  outline: none;
  margin-bottom: 34px;
  &:focus {
    background-color: #212328;
  }
`;

function Products() {
  const [isOpen, setIsOpen] = useState("products");
  const [isEditing, setIsEditing] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const { products, isLoading: isLoadingProducts } = useProducts();

  function handleChange(value) {
    searchParams.set("name", value);
    if (!value) searchParams.delete("name");
    setSearchParams(searchParams);
  }

  return (
    <>
      {isOpen === "products" && (
        <>
          <H1>Products</H1>
          <StyledInput
            type="text"
            placeholder="Search for products..."
            onChange={(e) => handleChange(e.target.value)}
          />
          {isLoadingProducts ? (
            <Spinner />
          ) : (
            <>
              <ProductsHeader />
              {products &&
                products.map((product) => (
                  <ProductsRow
                    product={product}
                    key={product.id}
                    setIsOpen={setIsOpen}
                    setIsEditing={setIsEditing}
                  />
                ))}

              <ProductsFooter />
              <Button
                onClick={() => {
                  setIsOpen("form");
                  setIsEditing("");
                }}
              >
                Add new product
              </Button>
            </>
          )}
        </>
      )}
      {isOpen === "form" && (
        <ProductForm setIsOpen={setIsOpen} isEditing={isEditing} />
      )}
      {isOpen === "images" && <ProductImages />}
    </>
  );
}

export default Products;
