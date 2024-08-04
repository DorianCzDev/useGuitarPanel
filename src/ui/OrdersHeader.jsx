import styled from "styled-components";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { useSearchParams } from "react-router-dom";

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px 170px 165px 130px 120px;
  background-color: var(--accient-bg-color);
  border-top: 1px solid var(--primary-border-color);
  border-left: 1px solid var(--primary-border-color);
  border-right: 1px solid var(--primary-border-color);
  border-bottom: 1px solid var(--primary-border-color);
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

function OrdersHeader() {
  return <div></div>;
}

export default OrdersHeader;
