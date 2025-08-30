import axios from "axios";
import gold from "../../img/gold.gif";
import React, { useState, useEffect, memo } from "react";

function GoldGraph() {

const [goldData, setGoldData] = useState(null);

const api = "sk_8b92324c45B60F216Ecf1E4f66ba073f8999B4E6a1A17bf4";

useEffect(() => {
  axios
    .get("https://gold.g.apised.com/v1/latest?metals=XAU&base_currency=INR&weight_unit=gram", {
      headers: {
        "x-api-key": api,
      },
    })
    .then((response) => {
      setGoldData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

return (
  <div className="flex justify-center items-center !pt-5">
    <table className="min-w-[300px] border border-gray-200 shadow-md rounded-lg overflow-hidden">
      <thead className="bg-[#2956A6] text-white">
        <tr>
          <th colSpan={2} className="!px-6 !py-3 text-lg font-semibold text-center">
            <div className="flex items-center justify-center gap-2">
              <img src={gold} alt="gold.gif" className="w-[40px] h-[40px] rounded-full" />
              <span>Today's Gold Rate</span>
            </div>
          </th>
        </tr>
        <tr className="bg-gray-100 text-black">
          <th className="!px-6 !py-2 text-center">22 Carat</th>
          <th className="!px-6 !py-2 text-center">24 Carat</th>
        </tr>
      </thead>

      <tbody>
        <tr className="text-center">
          <td className="!px-6 !py-3 border">
            {goldData?.data?.metal_prices?.XAU?.price_22k
              ? "₹" +
              (goldData.data.metal_prices.XAU.price_22k * (22 / 24)).toFixed(2) + "/g"
              : "Loading..."}
          </td>
          <td className="!px-6 !py-3 border">
            {goldData?.data?.metal_prices?.XAU?.price_24k
              ? "₹" + goldData.data.metal_prices.XAU.price_24k.toFixed(2) + "/g"
              : "Loading..."}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
}

export default GoldGraph;
