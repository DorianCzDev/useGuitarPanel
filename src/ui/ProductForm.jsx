import styled from "styled-components";
import Button from "./Button";
import { useForm } from "react-hook-form";
import FormRow from "./FormRow";
import { useCreateProduct } from "../services/useCreateProduct";
import { useProduct } from "../services/useProduct";
import { useEffect, useMemo, useState } from "react";
import { useUpdateProduct } from "../services/useUpdateProduct";
import { H1 } from "./Headers";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import Accordion from "./Accordion";
import ProductImages from "./ProductImages";
import GuitarForm from "./GuitarForm";
import AmpForm from "./AmpForm";
import MultiEffectForm from "./MultiEffectForm";
import PickupForm from "./PickupForm";
import UniversalForm from "./UniversalForm";
import Spinner from "./Spinner";

const Form = styled.form`
  padding: 0px 50px 0px 50px;
`;

const RadiosWrapper = styled.div`
  display: flex;
  padding: 6px 65px 26px 65px;
  justify-content: space-between;
`;

const Radio = styled.input`
  margin: 6px 4px;
  cursor: pointer;
`;

const RadioContainer = styled.div`
  padding: 6px 4px;
  border: 1px solid #aaa;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #434545;
  }
  ${Radio}:active {
    background-color: #434545;
  }
`;

const RadioLabel = styled.label`
  padding: 9px 10px;
  cursor: pointer;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  /* padding: 1px 1px; */
  gap: 3px;
  justify-content: flex-end;
  grid-column-start: -2;
  grid-column-end: -1;
`;

const StyledButton = styled.span`
  display: block;
  margin: 20px 0;
  outline: none;
  border: none;
  font-size: 16px;
  padding: 14px 18px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
  background-color: transparent;
  color: #fff;
  &:hover {
    background-color: #2f3135;
  }
`;

const AccordionContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: -1;
`;

function ProductForm({ setIsOpen, isEditing }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [formCategory, setFormCategory] = useState("");

  const { isPending: isEditingProduct, updateProduct } = useUpdateProduct();

  const { isPending: isCreatingProduct, createProduct } = useCreateProduct();

  const {
    product,
    isLoading: isLoadingProduct,
    isFetching: isFetchingProduct,
  } = useProduct(isEditing);

  // const { productImages, isLoadingProductImages } = useProductImages(isEditing);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const defaultValues = useMemo(() => {
    const defaultValues = {
      name: "",
      pickups: "",
      body: "",
      price: "",
      neck: "",
      stringsNumber: "",
      bridgePickup: "",
      neckPickup: "",
      middlePickup: "",
      pickupActive: "",
      fretsNumber: "",
      lefthanded: "",
    };
  }, []);

  useEffect(() => {
    reset(defaultValues);

    if (isEditing) {
      setFormCategory(product?.category);
      reset(product);
    }
  }, [reset, product, defaultValues, isEditing]);

  function onSubmit(data) {
    if (isEditing)
      updateProduct(data, {
        onSuccess: () => {
          reset(defaultValues);
          setIsOpen("products");
        },
      });
    else
      createProduct(data, {
        onSuccess: () => {
          reset(defaultValues);
          setIsOpen("products");
        },
      });
  }

  function onError(errors) {
    if (errors?.category?.message) {
      alert(errors.category.message);
    }
  }

  const isWorking = isCreatingProduct || isLoadingProduct || isEditingProduct;

  return (
    <>
      <H1>Product Form</H1>
      {isFetchingProduct ? (
        <Spinner />
      ) : (
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <RadiosWrapper>
            <RadioContainer>
              <RadioLabel>
                <Radio
                  type="radio"
                  value="guitar"
                  name="category"
                  {...register("category", {
                    required: "Category field is required",
                  })}
                  onClick={() => setFormCategory("guitar")}
                />
                GUITAR
              </RadioLabel>
            </RadioContainer>
            <RadioContainer>
              <RadioLabel>
                <Radio
                  type="radio"
                  value="amplifier"
                  name="category"
                  {...register("category", {
                    required: "Category field is required",
                  })}
                  onClick={() => setFormCategory("amplifier")}
                />
                AMP
              </RadioLabel>
            </RadioContainer>
            <RadioContainer onClick={() => setFormCategory("pickup")}>
              <RadioLabel>
                <Radio
                  type="radio"
                  value="pickup"
                  name="category"
                  {...register("category", {
                    required: "Category field is required",
                  })}
                  onClick={() => setFormCategory("pickup")}
                />
                PICKUP
              </RadioLabel>
            </RadioContainer>
            <RadioContainer onClick={() => setFormCategory("multi effect")}>
              <RadioLabel>
                <Radio
                  type="radio"
                  value="multi effect"
                  name="category"
                  {...register("category", {
                    required: "Category field is required",
                  })}
                  onClick={() => setFormCategory("multi effect")}
                />
                MULTI EFFECT
              </RadioLabel>
            </RadioContainer>
          </RadiosWrapper>

          {formCategory === "guitar" && (
            <GuitarForm
              isWorking={isWorking}
              isEditing={isEditing}
              product={product}
              register={register}
              errors={errors}
              reset={reset}
            />
          )}
          {formCategory === "amplifier" && (
            <AmpForm
              isWorking={isWorking}
              isEditing={isEditing}
              product={product}
              register={register}
              errors={errors}
              reset={reset}
            />
          )}
          {formCategory === "pickup" && (
            <PickupForm
              isWorking={isWorking}
              isEditing={isEditing}
              product={product}
              register={register}
              errors={errors}
              reset={reset}
            />
          )}
          {formCategory === "multi effect" && (
            <MultiEffectForm
              isWorking={isWorking}
              isEditing={isEditing}
              product={product}
              register={register}
              errors={errors}
              reset={reset}
            />
          )}
          {formCategory && (
            <UniversalForm
              isWorking={isWorking}
              isEditing={isEditing}
              register={register}
              errors={errors}
              reset={reset}
            />
          )}
          {isEditing && (
            <>
              <FormRow>
                <AccordionContainer>
                  <Accordion.Wrapper
                    onClick={() => setIsAccordionOpen((s) => !s)}
                  >
                    <Accordion.H1>Current product images</Accordion.H1>
                    <Accordion.Icon>
                      {isAccordionOpen ? <CiSquareMinus /> : <CiSquarePlus />}
                    </Accordion.Icon>
                  </Accordion.Wrapper>
                  {isAccordionOpen && (
                    <Accordion.Content>
                      <ProductImages
                        isLoadingProduct={isLoadingProduct}
                        product={product}
                      />
                    </Accordion.Content>
                  )}
                </AccordionContainer>
              </FormRow>
            </>
          )}
          <FormRow>
            <ButtonsContainer>
              <StyledButton
                onClick={() => {
                  reset(defaultValues);
                  setIsOpen("products");
                }}
              >
                Back
              </StyledButton>
              <StyledButton
                onClick={() => reset(defaultValues)}
                disabled={isWorking}
              >
                Reset
              </StyledButton>
              <Button disabled={isWorking} type="submit">
                Submit
              </Button>
            </ButtonsContainer>
          </FormRow>
        </Form>
      )}
    </>
  );
}

export default ProductForm;
