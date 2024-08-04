import styled from "styled-components";
import Status from "./Status";

import { MdDelete, MdEdit } from "react-icons/md";
import { TbStatusChange } from "react-icons/tb";

import { useDeleteProduct } from "../services/useDeleteProduct";
import priceFormater from "../helpers/priceFormater";

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px 170px 165px 130px 120px;
  border-left: 1px solid var(--primary-border-color);
  border-right: 1px solid var(--primary-border-color);
  border-bottom: 1px solid var(--primary-border-color);
  background-color: var(--primary-bg-color);

  height: 50px;
  width: 1150px;
`;

const Span = styled.span`
  font-size: 16px;
  padding: 14px 20px;
  letter-spacing: 1px;
  text-transform: capitalize;
`;

const ButtonsContaier = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const StyledButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #fff;
  transition: all 0.3s;
  &:hover {
    color: #aaa;
  }
`;

function OrdersRow() {
  return <div></div>;
}

export default OrdersRow;
