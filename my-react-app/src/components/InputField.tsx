interface InputField {
  label: string;
  type?: React.HTMLInputTypeAttribute;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name: string;
}

const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  name,
}: InputField) => {
  return (
    <div className="relative w-full">
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="  h-11.5  w-full  rounded-[3px]  border  border-[#8a858b]  bg-white  px-3  pt-2  text-[14px]  text-[#333]  outline-none  transition  focus:border-[#555]
        "
      />

      <label
        htmlFor={name}
        className=" pointer-events-none  absolute  left-2  -top-1.75  bg-white  px-1  text-[12px]  text-[#555]"
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;
