import React from "react";

interface IHomeFormFields {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  max?: string;
}

const formFields: IHomeFormFields[] = [
  {
    type: "text",
    name: "firstName",
    id: "id-first-name",
    placeholder: "First Name",
  },
  {
    type: "text",
    name: "lastName",
    id: "id-last-name",
    placeholder: "Last Name",
  },
  {
    type: "email",
    name: "email",
    id: "id-email",
    placeholder: "Email",
  },
  {
    type: "date",
    name: "dateOfBirth",
    id: "id-date-of-birth",
    placeholder: "Date of Birth",
    max: new Date().toISOString().split("T")[0],
  },
];

const HomeForm = () => {
  return (
    <form className="flex flex-col gap-2">
      {formFields.map((field) => (
        <div className="flex flex-col gap-2">
          <label htmlFor={field.id}>{field.placeholder}</label>
          <input
            type={field.type}
            name={field.name}
            id={field.id}
            placeholder={field.placeholder}
            className="border border-gray-200 p-2 w-full"
            {...(field.max && { max: field.max })}
          />
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default HomeForm;
