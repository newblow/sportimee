import React from "react";

const Form = () => {
  const SubmitForm = () => {
    alert("formulaire envoyé");
  };

  return (
    <form
      className="flex flex-col text-black mx-20 blur-10"
      action=""
      method="POST"
    >
      <label htmlFor="" className="text-black  ">
        Prénom/Nom:
      </label>
      <input className="border border-black rounded-full " type="text" />
      <label htmlFor=" " className="text-black  pl-2 pt-4">
        E-mail*:
      </label>
      <input
        className="border border-black rounded-full"
        type="Email "
        required
      />
      <label htmlFor="" className="text-black  pl-2 pt-4">
        Téléphone:
      </label>
      <input className="border border-black rounded-full" type="text" />
      <label htmlFor="" className="text-black pl-2 pt-4">
        Message*:
      </label>
      <textarea
        className="border border-black rounded-lg"
        name=""
        id=""
        cols="20"
        rows="10"
      ></textarea>
      <div className="flex flex-row justify-center py-6">
        <div className="border hover:text-orange-300 p-2 bg-white">
          <button
            className=" ease-in duration-300"
            type="button"
            onClick={() => SubmitForm()}
          >
            Envoyer
          </button>
        </div>
      </div>
    </form>
  );
};
export default Form;
