import CustomForm from "@/components/Reusable/Form/CustomForm";
import FormButton from "@/components/Shared/FormButton";
import { toast } from "sonner";
import { useAddCategoryMutation } from "@/redux/services/category/categoryApi";
import CategoryForm from "./CategoryForm.jsx";
import CustomModal from "@/components/Reusable/Modal/CustomModal.jsx";

const CategoryCreate = ({ open, setOpen }) => {
  const [addCategory, { isLoading }] = useAddCategoryMutation();

  const onSubmit = async (values) => {
    const toastId = toast.loading("Creating Category...");

    try {
      const submittedData = {
        ...values,
      };

      const res = await addCategory(submittedData);
      if (res.error) {
        toast.error(res?.error?.data?.errorMessage, { id: toastId });
      }
      if (res.data.success) {
        toast.success(res.data.message, { id: toastId });
        setOpen(false);
      }
    } catch (error) {
      console.error("Error creating Category:", error);
      toast.error("Error creating Category", { id: toastId });
    }
  };

  return (
    <CustomModal open={open} setOpen={setOpen} title="Create Category">
      <CustomForm onSubmit={onSubmit}>
        <CategoryForm />

        <FormButton setOpen={setOpen} loading={isLoading} />
      </CustomForm>
    </CustomModal>
  );
};

export default CategoryCreate;
