"use client";

import CustomForm from "@/components/Reusable/Form/CustomForm";
import CustomSelect from "@/components/Reusable/Form/CustomSelect";
import FormButton from "@/components/Shared/FormButton";
import { transformDefaultValues } from "@/utilities/lib/transformedDefaultValues";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import CategoryForm from "./CategoryForm.jsx";
import {
  useGetSingleCategoryQuery,
  useUpdateCategoryMutation,
} from "@/redux/services/category/categoryApi";
import CustomModal from "@/components/Reusable/Modal/CustomModal.jsx";

const CategoryEdit = ({ open, setOpen, itemId }) => {
  const [fields, setFields] = useState([]);

  const { data: categoryData, isFetching: isCategoryFetching } =
    useGetSingleCategoryQuery(itemId, {
      skip: !itemId,
    });

  const [updateCategory, { isLoading }] = useUpdateCategoryMutation();

  const onSubmit = async (values) => {
    const toastId = toast.loading("Updating Category...");
    try {
      const submittedData = {
        ...values,
      };

      const updatedData = {
        id: itemId,
        data: submittedData,
      };

      const res = await updateCategory(updatedData);

      if (res.data.success) {
        toast.success(res.data.message, { id: toastId });
        setOpen(false);
      } else {
        toast.error(res.data.errorMessage, { id: toastId });
      }
    } catch (error) {
      console.error("Error updating Category:", error);
      toast.error("An error occurred while updating the Category.", {
        id: toastId,
      });
    }
  };

  useEffect(() => {
    setFields(transformDefaultValues(categoryData));
  }, [categoryData]);

  return (
    <CustomModal
      open={open}
      setOpen={setOpen}
      title="Edit Category"
      loading={isCategoryFetching}
    >
      <CustomForm onSubmit={onSubmit} fields={fields}>
        <CategoryForm />

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

export default CategoryEdit;
