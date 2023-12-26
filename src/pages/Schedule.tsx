import Header from "../components/Header";
import { CartContext } from "../components/CartContext";
import { useContext, useState } from "react";

function Schedule() {
  let cart = useContext(CartContext);
  let [sessionType, setSessionType] = useState<string>("");
  let [sessionDate, setSessionDate] = useState<Date | undefined>(undefined);
  let [sessionTime, setSessionTime] = useState<string>("");
  let [firstName, setFirstName] = useState<string>("");
  let [lastName, setLastName] = useState<string>("");
  let [phoneNumber, setPhoneNumber] = useState<string>("");
  let [emailAddr, setEmailAddr] = useState<string>("");

  function typeChangeHandler(event: any) {
    setSessionType(event.target.value);
  }

  function dateChangeHandler(event: any) {
    setSessionDate(event.target.value);
  }

  function timeChangeHandler(event: any) {
    setSessionTime(event.target.value);
  }

  function fNameChangeHandler(event: any) {
    setFirstName(event.target.value);
  }

  function lNameChangeHandler(event: any) {
    setLastName(event.target.value);
  }

  function phoneChangeHander(event: any) {
    setPhoneNumber(event.target.value);
  }

  function emailChangeHandler(event: any) {
    setEmailAddr(event.target.value);
  }

  function formSubmitHandler(event: any) {
    event.preventDefault();

    let isValid = true;

    if (sessionType == "") {
      alert("Error: Session type has not been selected");
      isValid = false;
    }

    if (sessionDate == undefined) {
      alert("Error: Session date has not been selected");
      isValid = false;
    }

    if (sessionTime == "") {
      alert("Error: Session time has not been selected");
      isValid = false;
    }

    if (firstName == "") {
      alert("Error: First name has not been inserted");
      isValid = false;
    } else {
      if (!firstName.match(/^[a-zA-Z ]{2,30}$/)) {
        alert(
          "Error: The value entered into the 'First Name' field is not a valid name"
        );
        isValid = false;
      }
    }

    if (lastName == "") {
      alert("Error: Last name has not been inserted");
      isValid = false;
    } else {
      if (!lastName.match(/^[a-zA-Z ]{2,30}$/)) {
        alert(
          "Error: The value entered into the 'Last Name' field is not a valid name"
        );
        isValid = false;
      }
    }

    if (phoneNumber == "") {
      alert("Error: Phone number has not been inserted");
      isValid = false;
    } else {
      if (
        !phoneNumber.match(
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        )
      ) {
        alert(
          "Error: The value entered into the 'Phone Number' field is not a valid phone number"
        );
        isValid = false;
      }
    }

    if (emailAddr == "") {
      alert("Error: Email address has not been inserted");
      isValid = false;
    } else {
      if (
        !emailAddr.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        alert(
          "Error: The value entered into the 'Email Address' field is not a valid email"
        );
        isValid = false;
      }
    }

    if (isValid) {
      try {
        cart.addOneToCart(sessionType);
      } catch (error) {
        alert("Error" + error);
        return;
      }

      alert("Booking successful. Session added to shopping cart.");
    }
  }

  return (
    <>
      <Header />
      <main className="max-w-[900px] mb-10 mx-auto pt-5 flex">
        <img
          src="/schedule-banner.jpg"
          className="object-cover w-[200px] pl-10 hidden sm:block"
        ></img>
        <form className=" px-10 flex-1" onSubmit={formSubmitHandler}>
          <h1 className="text-3xl ml-5 my-4 font-bold">Book A Session</h1>
          <div className="border-l-gray-200 border-l-2 pl-5 mb-7">
            <label htmlFor="sessionType" className="block text-lg">
              Session Type
            </label>
            <select
              id="sessionType"
              className=" border-black rounded-lg border-2 p-1 w-full mb-2"
              onChange={typeChangeHandler}
              value={sessionType}
            >
              <option disabled selected value="">
                Select A Class
              </option>
              <option value="4">Olympic Weightlifting</option>
              <option value="5">Powerlifting Champions</option>
              <option value="6">Cross-Fit Craziness</option>
            </select>
            <label htmlFor="availableDates" className="block text-lg">
              Select A Date
            </label>
            <input
              type="date"
              id="availableDates"
              className=" border-black rounded-lg border-2 p-1 w-full mb-2"
              onChange={dateChangeHandler}
              value={sessionDate?.toString()}
            ></input>
            <label htmlFor="availableTimes" className="block text-lg">
              Available Times
            </label>
            <select
              id="availableTimes"
              className=" border-black rounded-lg border-2 p-1 w-full mb-2"
              onChange={timeChangeHandler}
              value={sessionTime}
            >
              <option disabled selected value="">
                Select A Time
              </option>
              <option>09:00</option>
              <option>10:00</option>
              <option>11:00</option>
              <option>13:00</option>
              <option>14:30</option>
              <option>16:00</option>
              <option>17:00</option>
              <option>21:00</option>
            </select>
          </div>

          <div className="border-l-gray-200 border-l-2 pl-5 mb-7">
            <div className="sm:w-[45%] sm:inline-block sm:mr-7">
              <label htmlFor="firstName" className="block text-lg">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="border-black rounded-lg border-2 p-1 w-full mb-2"
                onChange={fNameChangeHandler}
                value={firstName}
              ></input>
            </div>
            <div className="sm:w-[45%] sm:inline-block">
              <label htmlFor="lastName" className="block text-lg">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="border-black rounded-lg border-2 p-1 w-full mb-2"
                onChange={lNameChangeHandler}
                value={lastName}
              ></input>
            </div>
            <label htmlFor="phoneNumber" className="block text-lg">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="border-black rounded-lg border-2 p-1 w-full mb-2"
              onChange={phoneChangeHander}
              value={phoneNumber}
            ></input>
            <label htmlFor="emailAddress" className="block text-lg">
              Email Address
            </label>
            <input
              type="email"
              id="emailAddress"
              className="border-black rounded-lg border-2 p-1 w-full mb-2"
              onChange={emailChangeHandler}
              value={emailAddr}
            ></input>
          </div>

          <input
            type="submit"
            value="Book A Class"
            className="bg-red-600 text-white p-2 rounded-md font-bold hover:brightness-50 ml-5"
          ></input>
        </form>
      </main>
    </>
  );
}

export default Schedule;
