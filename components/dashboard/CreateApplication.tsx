import axios from "axios";
import React from "react";
import { apiUrl } from "../../utils/api";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const swal = withReactContent(Swal);

type Props = {};

const CreateApplication = (props: Props) => {
  return (
    <div className="hide-scroll w-1/2 md:w-full left-52 md:left-0 md:justify-center items-center h-full p-5 absolute flex flex-col md:flex-wrap md:flex-row gap-6 flex-shrink-0 overflow-x-hidden overflow-y-scroll">
      <div className="flex absolute flex-row left-56 top-16 justify-start items-center w-1/3 h-28">
        <input
          type="text"
          className="w-1/2 h-12 p-5 rounded-full bg-light"
          placeholder="Search"
        />
      </div>
      <div className="mt-0 absolute top-52 flex flex-col md:flex-wrap md:flex-row gap-6 justify-center items-center w-full ">
        <ApplicationTemplate />
      </div>
    </div>
  );
};

const ApplicationTemplate = () => {
  const [fieldIndex, setFieldIndex] = React.useState(0);

  const addField = () => {
    const fields = document.getElementById("fields");
    const field = document.createElement("input");
    field.type = "text";
    field.className = "w-full h-12 p-5 rounded-lg bg-[#222831]";
    field.id = `field-${fieldIndex}`;
    setFieldIndex((old) => old + 1);
    if (!fields) return;
    fields!.appendChild(field);
  };

  const removeField = () => {
    const fields = document.getElementById("fields");
    const field = document.getElementById(`field-${fieldIndex - 1}`);
    if (!field) return;
    setFieldIndex((old) => old - 1);
    fields!.removeChild(field!);
  };

  const submit = async () => {
    const fields = [];
    const description = document.getElementById(
      "description"
    ) as HTMLInputElement;
    if (!description)
      return swal.fire({
        title: "Error",
        text: "You must provide a description",
        icon: "error",
        confirmButtonText: "Ok",
      });
    const title = document.getElementById("title") as HTMLInputElement;
    if (!title)
      return swal.fire({
        title: "Error",
        text: "You must provide a title",
        icon: "error",
        confirmButtonText: "Ok",
      });

    for (let i = 0; i < fieldIndex; i++) {
      const field = document.getElementById(`field-${i}`) as HTMLInputElement;
      if (!field) return;
      fields.push(field.value);
    }
    if (fields.length == 0 || fields[0] == "")
      return swal.fire({
        title: "Error",
        text: "You must have at least one field",
        icon: "error",
        confirmButtonText: "Ok",
      });
    const data = await axios
      .post(`${apiUrl}/applications/create`, {
        data: JSON.stringify({
          title: title.value,
          description: description.value,
          fields: fields,
        }),
      })
      .then((data) => data as any)
      .catch((e) => console.log(e));

    console.log(data);

    if (data.statusText == "OK") {
      location.href = "/@me";
      return swal.fire({
        title: "Created Application",
        icon: "success",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="w-1/2 h-auto bg-light rounded-lg flex flex-col gap-6 justify-evenly p-12"
    >
      <div className="w-full h-auto bg-light rounded-lg flex flex-col gap-6 justify-evenly p-12">
        <h1 className="text-4xl">Create an Application</h1>
        <div className="flex flex-col gap-1 justify-center items-start">
          <p className="text-2xl">Title</p>
          <input
            id="title"
            type="text"
            className="w-48 h-12 p-5 rounded-lg bg-[#222831]"
          />
        </div>
        <div className="flex flex-col gap-1 justify-center items-start">
          <p className="text-2xl">Description</p>
          <input
            id="description"
            type="text"
            className="w-full h-12 p-5 rounded-lg bg-[#222831]"
          />
        </div>
        <div
          id="fields"
          className="flex flex-col gap-1 justify-center items-start"
        >
          <div className="flex items-center justify-between w-full">
            <p className="text-2xl flex flex-row justify-center items-center gap-6">
              Fields <p className="text-base"> (Questions being asked)</p>
            </p>
            <div className="flex flex-row gap-4">
              <button
                onClick={addField}
                className="text-lg font-light py-1 rounded-full px-8 cursor-pointer border-2 border-[#ff5722] transition hover:bg-[#ff5722]"
              >
                Add
              </button>
              <button
                onClick={removeField}
                className="text-lg font-light py-1 rounded-full px-8 cursor-pointer border-2 border-[#ff5722] transition hover:bg-[#ff5722]"
              >
                Remove One
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={async () => await submit()}
          className="text-lg font-light w-1/3 place-self-end py-1 rounded-full px-8 cursor-pointer border-2 border-[#ff5722] transition bg-[#ff5722]"
        >
          Create
        </button>
      </div>
    </form>
  );
};

export const getServerSideProps = async (ctx: any) => {};

export default CreateApplication;
