export default function Checkout() {
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
      <div className="flex flex-col items-center w-full space-y-8">
        <div className="bg-gray-100 w-10/12 p-3">
          <h1 className="text-gray-700 text-2xl font-medium mb-3">
            Credit Card Information
          </h1>
          <hr />
          <div className="flex flex-col mt-3">
            <label>Card Number</label>
            <input
              type="text"
              placeholder="Enter Your Card Number"
              className="bg-white p-3 border-2 border-gray-300 mt-2"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label>CVV</label>
            <input
              type="email"
              placeholder="CVV"
              className="bg-white p-3 border-2 border-gray-300 mt-2"
            />
          </div>
          <div className="mt-3">
            <label>Expiration Date</label>
            <div className="space-x-8 mt-3">
              <select className="bg-white p-3 text-gray-500">
                <option>Month</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
              <select className="bg-white p-3 text-gray-500">
                <option>Year</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
                <option>2029</option>
                <option>2030</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-10/12">
          <table>
            <tbody>
              <tr>
                <th className="border-2 p-3">Package:</th>
                <td className="border-2 p-3 text-gray-600">
                  Microsoft Office Professional
                </td>
              </tr>
              <tr>
                <th className="border-2 p-3">Total:</th>
                <td className="border-2 p-3 text-gray-600">$399.99</td>
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
          <button className="mb-3 rounded-full py-3 px-6 bg-green-500 text-white">
            Purchase
          </button>
        </div>
        <div className="w-10/12">
          <img src="/verfifiedsign.png" />
        </div>
      </div>
    </div>
  );
}
