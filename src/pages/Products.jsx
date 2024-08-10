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
import { useSearchParams } from "react-router-dom";
import { SearchInput } from "../ui/Search";
import NotFound from "../ui/NotFound";

function Products() {
  const [isOpen, setIsOpen] = useState("products");
  const [isEditing, setIsEditing] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [currPage, setCurrPage] = useState(1);

  const {
    products,
    productsCount,
    isLoading: isLoadingProducts,
  } = useProducts();

  function handleChange(value) {
    searchParams.set("name", value);
    if (searchParams.get("page")) {
      searchParams.delete("page");
    }
    if (!value) searchParams.delete("name");
    setSearchParams(searchParams);
    setCurrPage(1);
  }

  return (
    <>
      {isOpen === "products" && (
        <>
          <H1>Products</H1>
          <SearchInput
            type="text"
            placeholder="Search for products..."
            onChange={(e) => handleChange(e.target.value)}
          />
          {isLoadingProducts ? (
            <Spinner />
          ) : products.length > 0 ? (
            <>
              <ProductsHeader setCurrPage={setCurrPage} />
              {products &&
                products.map((product) => (
                  <ProductsRow
                    product={product}
                    key={product.id}
                    setIsOpen={setIsOpen}
                    setIsEditing={setIsEditing}
                  />
                ))}

              <ProductsFooter
                productsCount={productsCount}
                currPage={currPage}
                setCurrPage={setCurrPage}
              />
              <Button
                onClick={() => {
                  setIsOpen("form");
                  setIsEditing("");
                }}
              >
                Add new product
              </Button>
            </>
          ) : (
            <NotFound />
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
