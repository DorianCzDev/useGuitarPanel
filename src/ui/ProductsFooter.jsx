import styled, { css } from "styled-components";

const TableFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;
  /* border-top: 1px solid #434545; */
  border-left: 1px solid #434545;
  border-right: 1px solid #434545;
  border-bottom: 1px solid #434545;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  height: 50px;
  width: 1150px;
  & .page-link {
    color: #434545;
    padding: 1px 3px;
  }
  & .page-link-active {
    /* background-color: #000; */
    cursor: pointer;
    color: #fff;
  }
  & .page-selector {
    padding: 1px 6px;
    cursor: pointer;
  }
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

function ProductsFooter() {
  return <TableFooter></TableFooter>;
}

export default ProductsFooter;
