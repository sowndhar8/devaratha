import React, { useState } from "react";
import { Col, InputNumber, Slider, Select } from "antd";
import { tr } from "framer-motion/client";

const RdCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(50000);
  const [expectedReturn, setExpectedReturn] = useState(6.5);
  const [timePeriod, setTimePeriod] = useState(3);
  const [timeUnit, setTimeUnit] = useState("years"); // "months" | "years"

  let t = timePeriod;
  if (timeUnit === "months") t = timePeriod / 12;
  if (timeUnit === "years") t = timePeriod;

  const handleReset = () => {
    setMonthlyInvestment(50000);
    setExpectedReturn(6.5);
    setTimePeriod(3);
  };

  const calculateRD = () => {
    const P = monthlyInvestment;
    const r = expectedReturn / 100; // decimal
    const n = 4; // quarterly compounding

    // tenure in months
    let months = timeUnit === "years" ? timePeriod * 12 : timePeriod;

    let maturity = 0;

    // sum each installment’s future value
    for (let i = months; i >= 1; i--) {
      const power = (n * i) / 12; // fraction of years left
      maturity += P * Math.pow(1 + r / n, power);
    }

    const invested = P * months;
    const wealthGained = maturity - invested;

    return { invested, wealthGained, maturity };
  };

  //   const calculateRD = () => {
  //     const P = monthlyInvestment;
  //     const r = expectedReturn / 100;
  //     const n = 4; // monthly compounding

  //     const maturity = P * Math.pow(1 + r / n, n * t);

  //     const invested = P * t * 12;
  //     const wealthGained = maturity - invested;

  //     return { invested, wealthGained, maturity };
  //   };

  const { invested, wealthGained, maturity } = calculateRD();

  const handleTimeUnitChange = (newUnit) => {
    setTimeUnit(newUnit);

    // Adjust value if it exceeds new max
    let newMax = newUnit === "years" ? 10 : 9;
    if (timePeriod > newMax) {
      setTimePeriod(newMax);
    }
  };

  return (
    <div>
      <h2 className="text-2xl lg:text-4xl font-bold !mb-6 text-[#0D0D3F] text-center lg:text-left">
        RD Calculator
      </h2>

      {/* Container */}
      <div className="flex flex-col lg:flex-row md:flex-row justify-between gap-8 !p-6 lg:!p-10 bg-white shadow-lg rounded-2xl">
        {/* Input Section */}
        <div className="space-y-8 w-full lg:w-1/2">
          {/* Monthly Investment */}
          <div>
            <div className="flex justify-between items-center !mb-2">
              <label className="font-medium text-[#44475B]">
                Monthly Investment
              </label>
              <Col>
                <InputNumber
                  min={500}
                  max={1000000}
                  value={monthlyInvestment}
                  onChange={setMonthlyInvestment}
                  className="no-spinner"
                  style={{ border: "none" }}
                />
              </Col>
            </div>
            <Slider
              min={500}
              max={1000000}
              value={monthlyInvestment}
              onChange={setMonthlyInvestment}
            />
          </div>

          {/* Expected Return */}
          <div>
            <div className="flex justify-between items-center !mb-2">
              <label className="font-medium text-[#44475B]">
                Expected Return (%)
              </label>
              <Col>
                <InputNumber
                  min={1}
                  max={15}
                  value={expectedReturn}
                  onChange={setExpectedReturn}
                  className="no-spinner"
                  style={{ border: "none" }}
                />
              </Col>
            </div>
            <Slider
              min={1}
              max={15}
              step={0.1}
              value={expectedReturn}
              onChange={setExpectedReturn}
            />
          </div>

          {/* Time Period */}
          <div>
            <div className="flex justify-between items-center !mb-2">
              <div className="flex items-center gap-3">
                <label className="font-medium text-[#44475B]">
                  Time Period
                </label>
                <Select
                  value={timeUnit}
                  onChange={handleTimeUnitChange}
                  options={[
                    { value: "months", label: "Months" },
                    { value: "years", label: "Years" },
                  ]}
                  style={{ width: 100 }}
                  bordered={false}
                />
              </div>
              <InputNumber
                min={3}
                max={timeUnit === "years" ? 10 : 9}
                value={timePeriod}
                onChange={setTimePeriod}
                className="no-spinner"
                style={{ border: "none" }}
              />
            </div>
            <Slider
              min={3}
              max={timeUnit === "years" ? 10 : 9}
              step={3}
              value={timePeriod}
              onChange={setTimePeriod}
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="flex-1 flex flex-col gap-6 rounded-xl !p-6">
          <div className="flex justify-between text-md font-medium text-[#44475B]">
            <p className="text-[#7C7E8C]">Invested Amount:</p>
            <p>
              ₹{invested.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
            </p>
          </div>
          <div className="flex justify-between text-md font-medium text-[#44475B]">
            <p className="text-[#7C7E8C]">Wealth Gained:</p>
            <p>
              ₹
              {wealthGained.toLocaleString("en-IN", {
                maximumFractionDigits: 0,
              })}
            </p>
          </div>
          <div className="flex justify-between text-md font-medium text-[#44475B]">
            <p className="text-[#7C7E8C]">Total Value:</p>
            <p>
              ₹{maturity.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RdCalculator;
