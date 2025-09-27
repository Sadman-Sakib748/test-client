import CustomDatePicker from "@/components/Reusable/Form/CustomDatePicker";
import CustomInput from "@/components/Reusable/Form/CustomInput";
import FileUploader from "@/components/Reusable/Form/FileUploader";

const BlogForm = ({ attachment }) => {
  return (
    <>
      <CustomInput label={"Blog Name"} name={"name"} required={true} />
      <CustomInput
        label={"Short Description"}
        name={"shortDescription"}
        required={true}
        type={"textarea"}
      />
      <FileUploader
        defaultValue={attachment}
        required={true}
        label={"Blog Image"}
        name={"attachment"}
      />
      <CustomDatePicker
        label={"Published At"}
        name={"publishedAt"}
        required={true}
      />
    </>
  );
};

export default BlogForm;
