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
            <h2 className="text-2xl lg:text-4xl font-bold !mb-6 text-[#0D0D3F] text-center lg:text-left">
                SIP Calculator
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
                                    min={100}
                                    max={10000000}
                                    value={monthlyInvestment}
                                    onChange={setMonthlyInvestment}
                                    className="no-spinner"
                                    style={{ border: "none" }}
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

                    {/* Expected Return */}
                    <div>
                        <div className="flex justify-between items-center !mb-2">
                            <label className="font-medium text-[#44475B]">
                                Expected Return (%)
                            </label>
                            <Col>
                                <InputNumber
                                    min={1}
                                    max={30}
                                    value={expectedReturn}
                                    onChange={setExpectedReturn}
                                    className="no-spinner"
                                    style={{ border: "none" }}
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

                    {/* Time Period */}
                    <div>
                        <div className="flex justify-between items-center !mb-2">
                            <label className="font-medium text-[#44475B]">
                                Time Period (Years)
                            </label>
                            <Col>
                                <InputNumber
                                    min={1}
                                    max={40}
                                    value={timePeriod}
                                    onChange={setTimePeriod}
                                    className="no-spinner"
                                    style={{ border: "none" }}
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

                {/* Results Section */}
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

export default SipCalculator;


