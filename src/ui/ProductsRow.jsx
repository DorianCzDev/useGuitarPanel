import styled from "styled-components";
import Status from "./Status";

import { MdDelete, MdEdit } from "react-icons/md";
import { TbStatusChange } from "react-icons/tb";

import { useDeleteProduct } from "../services/useDeleteProduct";
import priceFormater from "../helpers/priceFormater";

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px 170px 165px 130px 120px;
  border-left: 1px solid #434545;
  border-right: 1px solid #434545;
  border-bottom: 1px solid #434545;
  background-color: #2f3135;

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

function ProductsRow({ product, setIsOpen, setIsEditing }) {
  const { deleteProduct, isPending: isPendingDelete } = useDeleteProduct();
  // const { changeStatus, isPending: isPendingChange } = useChangeStatus();
  function changeStatus() {}

  const { name, inventory, price, subcategory, featured } = product;

  return (
    <Row>
      <Span>{name}</Span>
      <Span>{subcategory}</Span>

      <Span>
        <Status inventory={inventory} disabled={isPendingDelete} />
      </Span>
      <Span>
        {" "}
        <Status featured={featured} disabled={isPendingDelete} />
      </Span>
      <Span>{priceFormater(price)} $</Span>
      <ButtonsContaier>
        <StyledButton
          onClick={() => changeStatus(product)}
          disabled={isPendingDelete}
          title="Change status"
        >
          <TbStatusChange />
        </StyledButton>

        <StyledButton
          title="Edit"
          onClick={() => {
            setIsOpen("form");
            setIsEditing(name);
          }}
        >
          <MdEdit />
        </StyledButton>

        <StyledButton
          onClick={() => deleteProduct(product)}
          disabled={isPendingDelete}
          title="Delete"
        >
          <MdDelete />
        </StyledButton>
      </ButtonsContaier>
    </Row>
  );
}

export default ProductsRow;
