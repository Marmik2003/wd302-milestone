import React, { useState } from "react";

import { IHomeFormFields } from "./HomeForm";

interface IFormInputProps {
  field: IHomeFormFields;
  removeField: (field: IHomeFormFields) => void;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
}

const FormInput = ({ field, removeField }: IFormInputProps) => {
  const [value, setValue] = useState("");

  const inputClass = `border border-gray-200 rounded p-2 w-full`;

  return (
    <div className="flex flex-col" key={field.id}>
      <label htmlFor={field.id}>{field.placeholder}</label>
      <div className="flex gap-2">
        <input
          {...field}
          className={inputClass}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="button"
          className="w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => removeField(field)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default FormInput;
