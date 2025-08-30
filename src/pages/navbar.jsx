
import React, { useState, useEffect, useRef } from "react";
import Logo from "../img/logo.png";
import { BsArrowUpRight } from "react-icons/bs";

// Dropdown component for better organization
const DropdownMenu = ({ items, isOpen, isHorizontal = false }) => {
    return (
        <div
            className={`absolute top-full left-1/2  transform -translate-x-1/2
      mt-6 !py-6 bg-white hover:shadow-3xl flex backdrop-blur-sm shadow-lg rounded-md z-50 transition-all duration-300 ease-in-out
       ${isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }
      `}
        >
            <div className={`${isHorizontal ? "grid justify-between !px-5" : ""}`}>
                {items.map((item, idx) => {
                    return (
                        <div
                            key={idx}
                            className={`relative ${isHorizontal
                                ? "flex flex-col items-start w-1/2"
                                : "flex flex-wrap"
                                }`}
                        >
                            <div className="bg-transparent  !py-2  rounded-lg  transition-all duration-300 group ">
                                <div className="flex justify-center items-center !gap-2">
                                    {item?.id === 1 }
                                    {item?.id === 2 }
                                    {item?.id === 3 }
                                    {item?.id === 4 }


                                    <div>
                                        <a
                                            href={item.path}
                                            className={`${isHorizontal
                                                ? "px-2 whitespace-nowrap"
                                                : "block px-2 !py-2 mb-2"
                                                } text-md font-syne text-black  group-hover:text-[#9F70FD] group-hover:bg-clip-text duration-200 text-center`}
                                        >
                                            {item.title}
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const NavBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const dropdownRef = useRef(null);

    // Handle scroll effect to hide navbar
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 50);
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);




    // Toggle dropdown menu
    const toggleDropdown = (index) => {
        // setActiveDropdown(activeDropdown == index ? null : index);
        console.log("checkingggg", activeDropdown);
        if (activeDropdown) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(index);
        }
    };
    // Handle escape key to close dropdown
    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === "Escape") {
                setActiveDropdown(null);
            }
        };

        document.addEventListener("keydown", handleEscKey);
        return () => document.removeEventListener("keydown", handleEscKey);
    }, []);

    // Navigation links with dropdowns
    const navLinks = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Services",
            path: "/services",
        },
        {
            title: "Loans",
            dropdown: [
                {
                    id: 1,
                    title: "Gold Loan",
                    path: "/GoldLoans"
                },
                {
                    id: 2,
                    title: "Personal Loan",
                    path: "/PersonalLoan"
                },
                {
                    id: 3,
                    title: "Mortgage Loan",
                    path: "/MortageLoan"
                },
                {
                    id: 4,
                    title: "Business Loan",
                    path: "/Businessloan"
                },
            ],
            isHorizontal: true,
        },
        {
            title: "About Us",
            path: "/aboutUs"
        },
        {
            title: "Contact Us",
            path: "/contactUs"
        },

    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 !py-6 position-sticky
                ${isScrolled ? "bg-[#2956A6] shadow-md" : "bg-transparent text-black"}
                ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
        >
            <div className=" px-4">
                <div className="flex  lg:justify-start justify-between w-[95vw]  items-center h-16">
                    {/* Logo - moved significantly to the right */}
                    <div className="flex-shrink-0 ml-32 lg:!pl-15 hidden lg:block cursor-pointer  ">
                        <a href="/"><img
                            src={Logo}
                            alt={`client-`}
                            className="w-fit h-[70px]"
                        />
                        </a>
                    </div>

                    <div className="flex-shrink-0 ml-32 md:!pt-5 !pt-3  !pl-10 lg:hidden block ">
                        <img
                            src={Logo}
                            alt={`client-`}
                            className="w-fit h-[40px]"
                        />
                    </div>
                    {/* Desktop Navigation - improved spacing */}
                    <div
                        className="hidden lg:flex !py-5 items-center justify-end gap-20 flex-1 pr-8"
                        ref={dropdownRef}
                    >
                        {navLinks.map((link, index) => (
                            <div
                                key={index}
                                className="relative"
                                onMouseEnter={() => link.dropdown && setActiveDropdown(index)}
                                onMouseLeave={() => {
                                    link.dropdown && setActiveDropdown(null);
                                }}
                            >
                                <a
                                    href={link.path}
                                    className="relative group flex items-center  text-lg font-poppins text-white "
                                    style={{ letterSpacing: "0.10em" }}
                                >
                                    {link.title}

                                </a>
                                {link.dropdown && (
                                    <DropdownMenu
                                        items={link.dropdown}
                                        isOpen={activeDropdown === index}
                                        isHorizontal={link.isHorizontal}
                                    />
                                )}
                            </div>
                        ))}

                        <a href="/Enquire" className="hidden lg:flex items-center rounded-4xl bg-[#DFAE51] text-[#2956A6] font-medium text-[20px] !px-5 !py-2 cursor-pointer">Free Consult
                            <BsArrowUpRight color="white" size={40} className="!ml-2 bg-[#2956A6] rounded-full !p-2 " /></a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden ">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>            
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white rounded-b-lg shadow-lg !px-5 ">
                    <div className="px-2 !pt-2 pb-3 space-y-1">
                        {navLinks.map((link, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-center w-full">
                                    <a
                                        href={link.path}
                                        className="block !px-3 !py-2 text-[16px]  font-poppins text-black w-full"
                                        onClick={() => toggleDropdown(index)}
                                    >
                                        {link.title}
                                    </a>
                                    {link.dropdown && (
                                        <button
                                            onClick={() => toggleDropdown(index)}
                                            className="!px-3 !py-2 transition-transform duration-200"
                                            aria-expanded={activeDropdown === index}
                                        >
                                            <svg
                                                className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === index ? "transform rotate-180" : ""
                                                    }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </button>
                                    )}
                                </div>

                                {/* Mobile Dropdown - Accordion style */}
                                {link.dropdown && (
                                    <div
                                        className={`pl-4 overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === index
                                            ? "max-h-64 opacity-100"
                                            : activeDropdown == null
                                                ? "max-h-0 opacity-0 bg-red-900"
                                                : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        {link.dropdown.map((item, idx) => (
                                            <a
                                                key={idx}
                                                href={item.path}
                                                className="block !px-3 !py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                                            >
                                                {item.title}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;

