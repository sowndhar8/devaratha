import React, { useState } from "react";
import { Col, InputNumber, Slider, Select } from "antd";

const FdCalculator = () => {
  const [principal, setPrincipal] = useState(1000);
  const [expectedReturn, setExpectedReturn] = useState(6.5);
  const [timePeriod, setTimePeriod] = useState(1);
  const [timeUnit, setTimeUnit] = useState("years"); // "days" | "months" | "years"

  const calculateFD = () => {
    const P = principal;
    const r = expectedReturn / 100;
    const n = 4; // compounding quarterly

    // convert tenure into years
    let t = timePeriod;
    if (timeUnit === "days") t = timePeriod / 365;
    if (timeUnit === "months") t = timePeriod / 12;

    const maturity = P * Math.pow(1 + r / n, n * t);
    const invested = P;
    const wealthGained = maturity - invested;

    return { invested, wealthGained, maturity };
  };

  const { invested, wealthGained, maturity } = calculateFD();

  const handleTimeUnitChange = (newUnit) => {
    setTimeUnit(newUnit);

    // Adjust value if it exceeds new max
    let newMax = newUnit === "years" ? 25 : newUnit === "months" ? 11 : 31;
    if (timePeriod > newMax) {
      setTimePeriod(newMax);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl lg:text-4xl font-bold !mb-6 text-[#0D0D3F]">
        FD Calculator
      </h2>

            <div className="flex flex-col lg:flex-row md:flex-row justify-between gap-8 !p-6 lg:!p-10 bg-white shadow-lg rounded-2xl">
        {/* Left Section (Inputs) */}
                <div className="space-y-8 w-full lg:w-1/2">
          {/* Investment */}
          <div>
            <div className="flex justify-between items-center !mb-2">
              <label className="font-medium text-[#44475B]">Total Investment</label>
              <Col>
                <InputNumber
                  min={1000}
                  max={10000000}
                  value={principal}
                  onChange={setPrincipal}
                  className="no-spinner"
                  style={{ border: "none" }}
                />
              </Col>
            </div>
            <Slider
              min={1000}
              max={10000000}
              step={500}
              value={principal}
              onChange={setPrincipal}
            />
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between items-center !mb-2">
              <label className="font-medium text-[#44475B]">Expected Return (%)</label>
              <Col>
                <InputNumber
                  min={1}
                  max={15}
                  step={0.1}
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
                <label className="font-medium text-[#44475B]">Time Period</label>
                <Select
                  value={timeUnit}
                  onChange={handleTimeUnitChange}
                  options={[
                    { value: "days", label: "Days" },
                    { value: "months", label: "Months" },
                    { value: "years", label: "Years" },
                  ]}
                  style={{ width: 100 }}
                  bordered={false}
                />
              </div>
              <InputNumber
                min={1}
                max={timeUnit === "years" ? 25 : timeUnit === "months" ? 11 : 31}
                value={timePeriod}
                onChange={setTimePeriod}
                className="no-spinner"
                style={{ border: "none" }}
              />
            </div>
            <Slider
              min={1}
              max={timeUnit === "years" ? 25 : timeUnit === "months" ? 11 : 31}
              step={1}
              value={timePeriod}
              onChange={setTimePeriod}
            />
          </div>
        </div>

        {/* Right Section (Results) */}
        <div className="flex-1 flex flex-col gap-6 rounded-xl !p-6">
          <div className="flex justify-between text-md font-medium text-[#44475B]">
            <p className="text-[#7C7E8C]">Invested Amount:</p>
            <p>₹{invested.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</p>
          </div>
          <div className="flex justify-between text-md font-medium text-[#44475B]">
            <p className="text-[#7C7E8C]">Wealth Gained:</p>
            <p>₹{wealthGained.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</p>
          </div>
          <div className="flex justify-between text-md font-medium text-[#44475B]">
            <p className="text-[#7C7E8C]">Total Value:</p>
            <p>₹{maturity.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FdCalculator;
