import React from "react";
import RootLayouts from "../../layouts/RootLayouts";

export default function checkout() {
  return (
    <RootLayouts>
      <div className="mx-auto max-w-7xl flex items-center justify-between bg-stone-200 p-6 lg:px-8">
        <div>
          <h4>Check Out</h4>
          <p className="mb-2">
            <a href="#" className="text-blue-500">
              Home
            </a>{" "}
            &gt;&nbsp;
            <a href="#" className="text-blue-500">
              Shop
            </a>{" "}
            &gt;&nbsp; Check Out
          </p>
        </div>
      </div>

      <div className="container mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2 m-8">
          <div className=" p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Check Out</h2>
            <form>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label
                    htmlFor="firstname"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Fist Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="lastname"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="country"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  className="w-full px-3 py-2 border rounded-lg"
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="state"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Country/State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="postcode"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Postcode/ZIP
                </label>
                <input
                  type="text"
                  id="postcode"
                  name="postcode"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="col-span-1 m-8 justify-center">
          <div className="bg-stone-200 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">YOUR ORDER</h3>
            <div className="py-2">
              <div className="flex justify-between">
                <p className="font-semibold">Product</p>
                <p className="font-semibold">Total</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">01. Vanilla salted caramel</p>
                <p className="text-gray-600">$300.0</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">02. German chocolate</p>
                <p className="text-gray-600">$170.0</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">03. Sweet autumn</p>
                <p className="text-gray-600">$170.0</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">04. Cluten free mini dozen</p>
                <p className="text-gray-600">$110.0</p>
              </div>
            </div>
            <div className="py-2">
              <div className="flex justify-between">
                <p className="font-semibold">Subtotal</p>
                <p className="font-semibold">$750.99</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Total</p>
                <p className="font-semibold">$750.99</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-4">
              <input
                type="checkbox"
                id="checkbox"
                className="form-checkbox h-6 w-6 text-indigo-600"
              />
              <label htmlFor="checkbox" className="text-gray-800">
                Check Payment
              </label>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <input
                type="checkbox"
                id="checkbox"
                className="form-checkbox h-6 w-6 text-indigo-600"
              />
              <label htmlFor="checkbox" className="text-gray-800">
                Paypal
              </label>
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-black text-white font-semibold w-full px-2 py-2 rounded inline-block"
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </RootLayouts>
  );
}
