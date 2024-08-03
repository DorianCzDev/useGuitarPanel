import styled from "styled-components";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { useSearchParams } from "react-router-dom";

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px 170px 165px 130px 120px;
  background-color: transparent;
  border-top: 1px solid #434545;
  border-left: 1px solid #434545;
  border-right: 1px solid #434545;
  border-bottom: 1px solid #434545;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  height: 50px;
  width: 1150px;
`;

const Span = styled.span`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  padding: 0px 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const ButtonUp = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 20px;
  color: #434545;
  position: absolute;
  right: 0;
  top: 43%;
  transform: translateY(-50%);
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    color: #aaa;
  }
`;

const ButtonDown = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 20px;
  color: #434545;
  position: absolute;
  right: 0;
  top: 65%;
  transform: translateY(-50%);
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    color: #aaa;
  }
`;

const ButtonsContainer = styled.div`
  position: relative;
  height: 50px;
`;

function ProductsHeader({ setCurrPage }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const isActiveSorting = searchParams.get("sortBy");

  function handleClick(value) {
    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
    setCurrPage(1);
  }

  return (
    <TableHeader>
      <Span>
        NAME
        <ButtonsContainer>
          {isActiveSorting !== "-name" && (
            <ButtonUp onClick={() => handleClick("-name")}>
              <IoMdArrowDropup />
            </ButtonUp>
          )}
          {isActiveSorting !== "name" && (
            <ButtonDown onClick={() => handleClick("name")}>
              <IoMdArrowDropdown />
            </ButtonDown>
          )}
        </ButtonsContainer>
      </Span>
      <Span>
        SUBCATEGORY
        <ButtonsContainer>
          {isActiveSorting !== "-subcategory" && (
            <ButtonUp onClick={() => handleClick("-subcategory")}>
              <IoMdArrowDropup />
            </ButtonUp>
          )}
          {isActiveSorting !== "subcategory" && (
            <ButtonDown onClick={() => handleClick("subcategory")}>
              <IoMdArrowDropdown />
            </ButtonDown>
          )}
        </ButtonsContainer>
      </Span>
      <Span>
        INVENTORY
        <ButtonsContainer>
          {isActiveSorting !== "-inventory" && (
            <ButtonUp onClick={() => handleClick("-inventory")}>
              <IoMdArrowDropup />
            </ButtonUp>
          )}
          {isActiveSorting !== "inventory" && (
            <ButtonDown onClick={() => handleClick("inventory")}>
              <IoMdArrowDropdown />
            </ButtonDown>
          )}
        </ButtonsContainer>
      </Span>
      <Span>
        FEATURED
        <ButtonsContainer>
          {isActiveSorting !== "featured" && (
            <ButtonUp onClick={() => handleClick("featured")}>
              <IoMdArrowDropup />
            </ButtonUp>
          )}
          {isActiveSorting !== "-featured" && (
            <ButtonDown onClick={() => handleClick("-featured")}>
              <IoMdArrowDropdown />
            </ButtonDown>
          )}
        </ButtonsContainer>
      </Span>
      <Span>
        PRICE
        <ButtonsContainer>
          {isActiveSorting !== "-price" && (
            <ButtonUp onClick={() => handleClick("-price")}>
              <IoMdArrowDropup />
            </ButtonUp>
          )}
          {isActiveSorting !== "price" && (
            <ButtonDown onClick={() => handleClick("price")}>
              <IoMdArrowDropdown />
            </ButtonDown>
          )}
        </ButtonsContainer>
      </Span>
    </TableHeader>
  );
}

export default ProductsHeader;
