import { useForm, ValidationError } from "@formspree/react";

function ContactMeForm() {
  const [state, handleSubmit] = useForm("mzbljgnb");
  if (state.succeeded) {
    return <p>Thank you for your e-mail!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="w-full flex items-center flex-col">
      <div>
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

      <div className="w-[90vw] flex items-center flex-col lg:flex-row lg:justify-between lg:w-[90%]">
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Name"
          className="w-full bg-gray-200 rounded-md p-2 mb-3 lg:w-[300px]"
          required
        ></input>
        <input
          type="text"
          name="email"
          id="emailAddress"
          placeholder="Email"
          className="w-full bg-gray-200 rounded-md p-2 mb-3 lg:w-[300px]"
          required
        ></input>
        <input
          type="text"
          name="subject"
          id="subjectLine"
          placeholder="Subject"
          className="w-full bg-gray-200 rounded-md p-2 mb-3 lg:w-[300px]"
          required
        ></input>
      </div>
      <textarea
        name="body"
        id="bodyText"
        placeholder="Body"
        className="w-[90vw] h-[200px] bg-gray-200 rounded-md p-2 resize-none scroll-auto mb-3 lg:w-[90%]"
        required
      ></textarea>
      <button
        type="submit"
        disabled={state.submitting}
        name="submit"
        id="submitBtn"
        className="bg-red-600 text-white p-2 rounded-md font-bold w-[90vw] lg:w-[90%]"
      >
        Send Email
      </button>
    </form>
  );
}

export default ContactMeForm;
