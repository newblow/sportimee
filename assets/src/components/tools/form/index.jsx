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
      <label htmlFor="" className="text-black pl-2">
        Nom:
      </label>
      <input
        className="border shadow-sm border-black placeholder-slate-400 focus:outline-none focus:border-orange-400 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder="nom ou prénom"
        type="text"
      />
      <label htmlFor=" " className="text-black  pl-2 pt-4">
        E-mail*:
      </label>
      <input
        className="border shadow-sm border-black placeholder-slate-400 focus:outline-none focus:border-orange-400 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder="test@exemple.com"
        type="Email "
        required
      />
      <label htmlFor="" className="text-black  pl-2 pt-4">
        Téléphone:
      </label>
      <input
        className="border shadow-sm border-black placeholder-slate-400 focus:outline-none focus:border-orange-400 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder="test@exemple.com"
        type="text"
      />
      <label htmlFor="" className="text-black pl-2 pt-4">
        Message*:
      </label>
      <textarea
        className="border shadow-sm border-black placeholder-slate-400 focus:outline-none focus:border-orange-400 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder="Ecriver votre message ici"
        name=""
        id=""
        cols="20"
        rows="10"
      ></textarea>
      <div className="flex flex-row justify-center py-6">
        <div className="border hover:text-orange-300 p-2  rounded">
          <button
            className=" transform:skew"
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
