import CustomForm from "@/components/Reusable/Form/CustomForm";
import FormButton from "@/components/Shared/FormButton";
import { toast } from "sonner";
import { useAddProductMutation } from "@/redux/services/product/productApi";
import ProductForm from "./ProductForm.jsx";
import CustomModal from "@/components/Reusable/Modal/CustomModal.jsx";

const ProductCreate = ({ open, setOpen }) => {
  const [addProduct, { isLoading }] = useAddProductMutation();

  const onSubmit = async (values) => {
    const toastId = toast.loading("Creating Product...");

    try {
      const submittedData = {
        ...values,
      };

      const res = await addProduct(submittedData);
      if (res.error) {
        toast.error(res?.error?.data?.errorMessage, { id: toastId });
      }
      if (res.data.success) {
        toast.success(res.data.message, { id: toastId });
        setOpen(false);
      }
    } catch (error) {
      console.error("Error creating Product:", error);
      toast.error("Error creating Product", { id: toastId });
    }
  };

  return (
    <CustomModal open={open} setOpen={setOpen} title="Create Product">
      <CustomForm onSubmit={onSubmit}>
        <ProductForm />

        <FormButton setOpen={setOpen} loading={isLoading} />
      </CustomForm>
    </CustomModal>
  );
};

export default ProductCreate;
