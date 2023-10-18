import { useForm, ValidationError } from "@formspree/react";

function ContactMeForm() {
  const [state, handleSubmit] = useForm("mzbljgnb");
  if (state.succeeded) {
    return (
      <p className="w-full text-center text-2xl mb-[100px]">
        Thank you for your e-mail!
      </p>
    );
  }
  return (
    <form className="w-full px-[100px] mb-[100px]" onSubmit={handleSubmit}>
      <div className="text-red-500 mb-2 font-bold">
        <ValidationError
          prefix="The name field"
          field="name"
          errors={state.errors}
        />
        <ValidationError
          prefix="The email field"
          field="email"
          errors={state.errors}
        />
        <ValidationError
          prefix="The subject field"
          field="subject"
          errors={state.errors}
        />
        <ValidationError
          prefix="The body field"
          field="body"
          errors={state.errors}
        />
      </div>

      <div className="w-full flex justify-between">
        <input
          type="text"
          name="fullName"
          id="fullName"
          className="w-[300px] bg-gray-300 p-2 max-w-"
          placeholder="Name"
          required
        ></input>
        <input
          type="text"
          name="email"
          id="emailAddress"
          className="w-[300px] bg-gray-300 p-2"
          placeholder="Email"
          required
        ></input>
        <input
          type="text"
          name="subject"
          id="subjectLine"
          className="w-[300px] bg-gray-300 p-2"
          placeholder="Subject"
          required
        ></input>
      </div>
      <textarea
        name="body"
        id="bodyText"
        className="w-full h-[200px]  bg-gray-300 block my-5 p-2 resize-none overflow-y-scroll"
        placeholder="Body"
        required
      ></textarea>
      <button
        type="submit"
        disabled={state.submitting}
        name="submit"
        id="submitBtn"
        className="bg-red-600 py-1 w-[180px] rounded-lg text-white font-bold text-lg block hover:bg-red-800 cursor-pointer"
      >
        Send Email
      </button>
    </form>
  );
}

export default ContactMeForm;
