import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Checkout() {
  const router = useRouter();
  const { price, title } = router.query;
  useEffect(() => {
    if (!title || !price) {
      router.push("/");
    }
  });

  return (
    <div className="flex flex-col p-5 items-center w-full space-y-8 my-8 lg:flex-row lg:space-y-0 lg:items-start">
      <div className="bg-gray-100 w-10/12 p-3 lg:w-full">
        <h1 className="text-gray-700 text-2xl font-medium mb-3">
          Billing Information
        </h1>
        <hr />
        <div className="flex flex-col mt-3">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter Your Full Name"
            className="bg-white p-3 border-2 border-gray-300 mt-2"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="bg-white p-3 border-2 border-gray-300 mt-2"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="Phone Number"
            className="bg-white p-3 border-2 border-gray-300 mt-2"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label>Billing Address</label>
          <input
            type="text"
            placeholder="Enter Your Billing Address"
            className="bg-white p-3 border-2 border-gray-300 mt-2"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label>City</label>
          <input
            type="text"
            placeholder="Enter Your City"
            className="bg-white p-3 border-2 border-gray-300 mt-2"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label>State Or Region</label>
          <input
            type="text"
            placeholder="State Or Region"
            className="bg-white p-3 border-2 border-gray-300 mt-2"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label>Zipcode</label>
          <input
            type="text"
            placeholder="Zipcode"
            className="bg-white p-3 border-2 border-gray-300 mt-2"
          />
        </div>
      </div>
      <form
        action="/php/payment.php"
        method="POST"
        className="flex flex-col items-center w-full space-y-8"
      >
        <div className="bg-gray-100 w-10/12 p-3">
          <h1 className="text-gray-700 text-2xl font-medium mb-3">
            Credit Card Information
          </h1>
          <hr />
          <div className="flex flex-col mt-3">
            <label>Card Holder Name</label>
            <input
              type="text"
              name="cardName"
              placeholder="Enter Your Card Holder Name"
              className="bg-white p-3 border-2 border-gray-300 mt-2"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label>Card Number</label>
            <input
              type="text"
              name="cardNumber"
              placeholder="Enter Your Card Number"
              className="bg-white p-3 border-2 border-gray-300 mt-2"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label>CVV</label>
            <input
              type="number"
              name="CVV"
              placeholder="CVV"
              className="bg-white p-3 border-2 border-gray-300 mt-2"
            />
          </div>
          <div className="mt-3">
            <label>Expiration Date</label>
            <div className="space-x-8 mt-3">
              <select
                className="bg-white p-3 text-gray-500"
                name="cardExpireDateMonth"
              >
                <option value="0">Month</option>
                <option value="01">1</option>
                <option value="02">2</option>
                <option value="03">3</option>
                <option value="04">4</option>
                <option value="05">5</option>
                <option value="06">6</option>
                <option value="07">7</option>
                <option value="08">8</option>
                <option value="09">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select
                className="bg-white p-3 text-gray-500"
                name="cardExpireDateYear"
              >
                <option value="0">Year</option>
                <option value="20">2020</option>
                <option value="21">2021</option>
                <option value="22">2022</option>
                <option value="23">2023</option>
                <option value="24">2024</option>
                <option value="25">2025</option>
                <option value="26">2026</option>
                <option value="27">2027</option>
                <option value="28">2028</option>
                <option value="29">2029</option>
                <option value="30">2030</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <label>Card Type</label>
            <div className="space-x-8 mt-3">
              <select className="bg-white p-3 text-gray-500" name="cardType">
                <option value="">Type</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">Master Card</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-10/12">
          <table>
            <tbody>
              <tr>
                <th className="border-2 p-3">Package:</th>
                <td className="border-2 p-3 text-gray-600">{title}</td>
              </tr>
              <tr>
                <th className="border-2 p-3">Total:</th>
                <td className="border-2 p-3 text-gray-600">{price} TL</td>
                <input name="amount" type="number" value={price} hidden />
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-10/12 text-gray-500 text-left">
          <input type="checkbox" defaultChecked={true} className="mr-3" />I
          agree to the{" "}
          <a href="/terms" target="_BLANK">
            Terms and Conditions
          </a>{" "}
          and <a href="/privacy">Privacy Policy</a>
        </div>
        <div className="w-10/12">
          <button
            className="mb-3 rounded-full py-3 px-6 bg-green-500 text-white"
            type="submit"
          >
            Purchase
          </button>
        </div>
        <div className="w-10/12">
          <img src="/verfifiedsign.png" />
        </div>
      </form>
    </div>
  );
}
