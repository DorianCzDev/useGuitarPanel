import { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormRow from "./FormRow";
import { Label } from "./FormLabel";
import { Input } from "./FormInput";
import { ErrorMessage } from "@hookform/error-message";
import { StyledError } from "./FormError";
import { Select } from "./FormSelect";

const defaultValues = {
  name: "",
  noDiscountPrice: "",
  auxPort: "",
  usbPort: "",
  effects: "",
  ampModeling: "",
  drumComputer: "",
};

function MultiEffectForm({ isWorking, isEditing, product, register, errors }) {
  console.log(product);
  const { reset } = useForm();
  useEffect(() => {
    reset(defaultValues);

    if (isEditing) {
      reset(product);
    }
  }, [reset, product, isEditing]);
  return (
    <>
      <FormRow>
        <Label id="name">Name</Label>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>
      <FormRow>
        <Label id="noDiscountPrice">No Discount Price (in cents)</Label>
        <Input
          type="number"
          id="noDiscountPrice"
          disabled={isWorking}
          {...register("noDiscountPrice", {
            required: "This field is required",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="noDiscountPrice"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>
      <FormRow>
        <Label id="discount">Discount (%)</Label>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          {...register("discount", {
            required: "This field is required",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="discount"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>
      <FormRow>
        <Label id="subcategory">Subcategory</Label>
        <Select
          name="subcategory"
          disabled={isWorking}
          {...register("subcategory", { required: "This field is required" })}
        >
          <option value="guitar multi effect">Guitar Multi Effect</option>
          <option value="bass multi effect">Bass Multi Effect</option>
        </Select>
        <ErrorMessage
          errors={errors}
          name="subcategory"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>
      <FormRow>
        <Label id="auxPort">Aux Port</Label>
        <Select name="auxPort" disabled={isWorking} {...register("auxPort")}>
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </Select>
      </FormRow>
      <FormRow>
        <Label id="usbPort">Usb Port</Label>
        <Select name="usbPort" disabled={isWorking} {...register("usbPort")}>
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </Select>
      </FormRow>
      <FormRow>
        <Label id="effects">Effects</Label>
        <Select name="effects" disabled={isWorking} {...register("effects")}>
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </Select>
      </FormRow>
      <FormRow>
        <Label id="ampModeling">AMP Modeling</Label>
        <Select
          name="ampModeling"
          disabled={isWorking}
          {...register("ampModeling")}
        >
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </Select>
      </FormRow>
      <FormRow>
        <Label id="drumComputer">Drum Computer</Label>
        <Select
          name="drumComputer"
          disabled={isWorking}
          {...register("drumComputer")}
        >
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </Select>
      </FormRow>
    </>
  );
}

export default MultiEffectForm;
