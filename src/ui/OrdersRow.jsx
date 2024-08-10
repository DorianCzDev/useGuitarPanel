import styled from "styled-components";
import Status from "./Status";

import { MdDelete, MdEdit } from "react-icons/md";
import { TbStatusChange } from "react-icons/tb";

import { useDeleteProduct } from "../services/useDeleteProduct";
import priceFormater from "../helpers/priceFormater";

const Row = styled.div`
  display: grid;
  grid-template-columns: 240px 180px 180px 165px 140px 230px;
  border-left: 1px solid var(--primary-border-color);
  border-right: 1px solid var(--primary-border-color);
  border-bottom: 1px solid var(--primary-border-color);
  background-color: var(--primary-bg-color);

  height: 50px;
  width: 1150px;

  &:hover {
    background-color: var(--primary-bg-hover-color);
    cursor: pointer;
  }
`;

const Span = styled.span`
  font-size: 16px;
  padding: 18px 20px 14px 20px;
  letter-spacing: 1px;
`;

const NonEmailSpan = styled(Span)`
  text-align: center;
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

function OrdersRow({ order, setIsOpen, setIsEditing }) {
  const { email, firstName, lastName, total, status, _id, createdAt } = order;

  return (
    <Row
      onClick={() => {
        setIsOpen("singleOrder");
        setIsEditing(_id);
      }}
    >
      <Span>{email}</Span>
      <NonEmailSpan>{firstName}</NonEmailSpan>
      <NonEmailSpan>{lastName}</NonEmailSpan>
      <NonEmailSpan>{priceFormater(total)} $</NonEmailSpan>
      <NonEmailSpan>{createdAt.split("T")[0]}</NonEmailSpan>
      <NonEmailSpan>{status}</NonEmailSpan>
    </Row>
  );
}

export default OrdersRow;
