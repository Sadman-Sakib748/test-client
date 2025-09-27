"use client";

import CustomForm from "@/components/Reusable/Form/CustomForm";
import CustomSelect from "@/components/Reusable/Form/CustomSelect";
import FormButton from "@/components/Shared/FormButton";
import { transformDefaultValues } from "@/utilities/lib/transformedDefaultValues";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductForm from "./ProductForm.jsx";
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "@/redux/services/product/productApi";
import CustomModal from "@/components/Reusable/Modal/CustomModal.jsx";

const ProductEdit = ({ open, setOpen, itemId }) => {
  const [fields, setFields] = useState([]);

  const { data: productData, isFetching: isProductFetching } =
    useGetSingleProductQuery(itemId, {
      skip: !itemId,
    });

  const [updateProduct, { isLoading }] = useUpdateProductMutation();

  const onSubmit = async (values) => {
    const toastId = toast.loading("Updating Product...");
    try {
      const submittedData = {
        ...values,
      };

      const updatedData = {
        id: itemId,
        data: submittedData,
      };

      const res = await updateProduct(updatedData);

      if (res.data.success) {
        toast.success(res.data.message, { id: toastId });
        setOpen(false);
      } else {
        toast.error(res.data.errorMessage, { id: toastId });
      }
    } catch (error) {
      console.error("Error updating Product:", error);
      toast.error("An error occurred while updating the Product.", {
        id: toastId,
      });
    }
  };

  useEffect(() => {
    setFields(
      transformDefaultValues(productData, {
        name: "images",
        value: productData?.images,
        errors: "",
      })
    );
  }, [productData]);

  return (
    <CustomModal
      open={open}
      setOpen={setOpen}
      title="Edit Product"
      loading={isProductFetching}
    >
      <CustomForm onSubmit={onSubmit} fields={fields}>
        <ProductForm />

        <CustomSelect
          name={"status"}
          label={"Status"}
          options={[
            { value: true, label: "Active" },
            { value: false, label: "Inactive" },
          ]}
        />

        <FormButton setOpen={setOpen} loading={isLoading} />
      </CustomForm>
    </CustomModal>
  );
};

export default ProductEdit;
