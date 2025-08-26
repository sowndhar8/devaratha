import React, { useState } from "react";
import { Col, InputNumber, Row, Slider, Space } from 'antd';

const SipCalculator = () => {
    const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
    const [expectedReturn, setExpectedReturn] = useState(12);
    const [timePeriod, setTimePeriod] = useState(10);
    const [showResults, setShowResults] = useState(false);


    const handleReset = () => {
        setMonthlyInvestment(5000);
        setExpectedReturn(12);
        setTimePeriod(10);
        setShowResults(false);
    };

    const calculateSIP = () => {
        const P = monthlyInvestment;
        const r = expectedReturn / 100;
        const n = 12; // monthly compounding
        const t = timePeriod;

        const maturity =
            P * (((Math.pow(1 + r / n, n * t) - 1) / (r / n)) * (1 + r / n));

        const invested = P * t * 12;
        const wealthGained = maturity - invested;

        return { invested, wealthGained, maturity };
    };

    const { invested, wealthGained, maturity } = calculateSIP();

    return (
        <div>
            <h2 className="text-4xl font-bold !mb-6 text-center text-blue-600">
                SIP Calculator
            </h2>

            {/* Input fields with sliders */}
            <div className="flex justify-between !p-10 bg-white shadow-lg rounded-2xl">
                <div className="!space-y-8">

                    {/* Deposit Amount */}
                    <div className="!gap-10">
                        <div className="flex w-100 justify-between items-center">
                            <label className="block font-medium !pb-2 text-[#44475B]">
                                Monthly Investment
                            </label>
                            <Col>
                                <InputNumber
                                    min={100}
                                    max={10000000}
                                    value={monthlyInvestment}
                                    onChange={setMonthlyInvestment}
                                    className="no-spinner"
                                />
                            </Col>
                        </div>

                        <Slider
                            min={100}
                            max={1000000}
                            value={monthlyInvestment}
                            onChange={setMonthlyInvestment}
                        />
                    </div>

                    <div>
                        <div className="flex justify-between w-100 items-center">
                            <label className="block font-medium !pb-2 text-[#44475B]">
                                Expected Return (%)
                            </label>
                            <Col>
                                <InputNumber
                                    min={1}
                                    max={30}
                                    value={expectedReturn}
                                    onChange={setExpectedReturn}
                                    className="no-spinner"
                                />
                            </Col>
                        </div>

                        <Slider
                            min={1}
                            max={30}
                            step={0.1}
                            value={expectedReturn}
                            onChange={setExpectedReturn}
                        />


                    </div>

                    <div>
                        <div>
                            <div className="flex justify-between w-100 items-center">
                                <label className="block font-medium text-[#44475B]">
                                    Time Period
                                </label>
                                <Col>
                                    <InputNumber
                                        min={1}
                                        max={40}
                                        value={timePeriod}
                                        onChange={setTimePeriod}
                                    />
                                </Col>
                            </div>
                            <Slider
                                min={1}
                                max={40}
                                value={timePeriod}
                                onChange={setTimePeriod}
                            />
                        </div>
                    </div>
                </div>



                {/* Results */}

                <table className="w-full border-neutral-50 ">
                    <tbody>
                        <tr className="text-md font-medium text-[#44475B]">
                            <td className="text-[#7C7E8C] p-2">Invested Amount:</td>
                            <td className="text-right p-2">
                                ₹{invested.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                            </td>
                        </tr>

                        <tr className="text-md font-medium text-[#44475B]">
                            <td className="text-[#7C7E8C] p-2">Wealth Gained:</td>
                            <td className="text-right p-2">
                                ₹{wealthGained.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                            </td>
                        </tr>

                        <tr className="text-md font-medium text-[#44475B]">
                            <td className="text-[#7C7E8C] p-2">Total Value:</td>
                            <td className="text-right p-2">
                                ₹{maturity.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default SipCalculator;


