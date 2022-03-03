import React, { useState } from "react";
import FormInput from "./FormInput";

export interface IHomeFormFields {
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

const HomeForm = (props: {
  setHomeState: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [fields, setFields] = useState(formFields);

  const addField = (field: IHomeFormFields) => {
    setFields([...fields, field]);
  };

  const removeField = (field: IHomeFormFields) => {
    setFields(fields.filter((f) => f.id !== field.id));
  };

  const handleClose = () => {
    props.setHomeState("HOME");
  };

  const [newState, setNewState] = useState("");

  let addInput: IHomeFormFields = {
    type: "text",
    name: "",
    id: "add-input",
    placeholder: "Add Input",
  };

  let addInputField: IHomeFormFields = {
    type: "text",
    name: newState.split(" ").join(""),
    id: new Date().getTime().toString(),
    placeholder: newState,
  };

  return (
    <form className="flex flex-col gap-2">
      {fields.map((field) => (
        <FormInput field={field} removeField={removeField} key={field.id} />
      ))}
      <div className="flex flex-col" key={addInput.id}>
        <div className="flex gap-2">
          <input
            value={newState}
            onChange={(e) => setNewState(e.target.value)}
            {...addInputField}
            className="border border-gray-200 rounded p-2 w-full"
          />
          <button
            type="button"
            className="min-w-max bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => addField(addInputField)}
          >
            Add Input
          </button>
        </div>
      </div>

      <div className="flex w-auto gap-2">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded"
        >
          Submit
        </button>
        <button
          type="button"
          className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 my-4 rounded"
          onClick={handleClose}
        >
          Close Form
        </button>
      </div>
    </form>
  );
};

export default HomeForm;
