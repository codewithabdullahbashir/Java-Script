interface InputField {
  label: string;
  type: React.HTMLInputTypeAttribute;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
}

const InputField = ({
  label,
  type,
  value,
  onChange,
  placeholder,
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
        className="h-14 w-full rounded-sm gap-1.25  font-normal  border text-[16px] text-[#1C1B1F]  border-[#79747E] bg-white px-3 pt-2  focus:border-[#79747E] focus:outline-none "
        style={{ fontFamily: "Sora" }}
      />
      <label
        htmlFor={name}
        className="  relative  left-2  -top-18  bg-white font-normal  text-[14px] px-1  text-[#1C1B1F]"
        style={{ fontFamily: "Helvetica" }}
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;