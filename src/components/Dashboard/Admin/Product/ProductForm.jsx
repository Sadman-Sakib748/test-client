import CustomInput from "@/components/Reusable/Form/CustomInput";
import CustomSelect from "@/components/Reusable/Form/CustomSelect";
import { useGetAllCategoriesQuery } from "@/redux/services/category/categoryApi";
import MultipleImageField from "./MultipleImageField";

const CategoryForm = () => {
  const { data: categoryData, isFetching: isCategoryFetching } =
    useGetAllCategoriesQuery();

  const categoryOptions = categoryData?.results
    ?.filter((item) => item?.status)
    .map((item) => ({
      value: item?._id,
      label: item?.name,
    }));
  return (
    <>
      <CustomInput name="name" label="Product Name" type={"name"} required />
      <CustomInput
        name="description"
        label="Product Description"
        type={"textarea"}
        required
      />
      <CustomSelect
        label={"Product Category"}
        name={"category"}
        options={categoryOptions}
        loading={isCategoryFetching}
        disabled={isCategoryFetching}
        required
      />
      <div className="two-grid">
        <CustomInput
          name="price"
          label="Product Price"
          type={"number"}
          required
        />
        <CustomInput
          name="stock"
          label="Product Stock"
          type={"number"}
          required
        />
      </div>
      <MultipleImageField />
    </>
  );
};

export default CategoryForm;
