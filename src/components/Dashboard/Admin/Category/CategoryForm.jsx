import CustomInput from "@/components/Reusable/Form/CustomInput";

const CategoryForm = () => {
  return (
    <>
      <CustomInput name="name" label="Category Name" type={"name"} required />
    </>
  );
};

export default CategoryForm;
