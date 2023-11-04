import React from "react";
import menu from "../assets/menu.svg";
import calender from "../assets/calender.svg";
import noble from "../assets/noble.png";
import arrowl from "../assets/arrowl.svg";
import arrowr from "../assets/arrowr.svg";
import { useState } from "react";
import { useEffect } from "react";
import Calendar from "react-calendar";

const Main = () => {
  const [dta, setdata] = useState([]);
  const [sldata, setsldata] = useState([]);

  const data = [
    {
      subject: "Subject 1",
      name: "Name 1",
      additionalData: "Additional Data 1",
    },
    {
      subject: "Subject 2",
      name: "Name 2",
      additionalData: "Additional Data 2",
    },
    {
      subject: "Subject 3",
      name: "Name 3",
      additionalData: "Additional Data 3",
    },
    {
      subject: "Subject 4",
      name: "Name 1",
      additionalData: "Additional Data 1",
    },
    {
      subject: "Subject 5",
      name: "Name 2",
      additionalData: "Additional Data 2",
    },
    {
      subject: "Subject 6",
      name: "Name 3",
      additionalData: "Additional Data 3",
    },
    {
      subject: "Subject 7",
      name: "Name 3",
      additionalData: "Additional Data 3",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 3, data.length - 1));
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };
  const names = dta
    .filter((prize) => prize.year === 2018)
    .flatMap((prize) => setsldata(prize.laureates));
  const visibleData = data.slice(startIndex, startIndex + 3);

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(data[index]);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const fetcher = async () => {
    const products = await fetch("https://api.nobelprize.org/v1/prize.json", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const data = await products.json();
    setdata(data.prizes);
    console.log(dta);
  };
  const [selectedLaureate, setSelectedLaureate] = useState(null);

  const handleLaureateHover = (laureate) => {
    setSelectedLaureate(laureate);
  };
  const [isTextFieldVisible, setTextFieldVisible] = useState(false);

  const [textFieldValue, setTextFieldValue] = useState("");
  //   const [yearFieldValue, setyearFieldValue] = useState("");

  const handleMenuClick = () => {
    setTextFieldVisible(true);
  };
  // const handleYearClick = () => {
  //   setyearFieldVisible(true);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Submitted:", textFieldValue);
    // Clear the text field and hide it

    setTextFieldVisible(false);
  };

  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [calendarValue, setCalendarValue] = useState("");

  const handleIconClick = () => {
    setCalendarVisible(!isCalendarVisible);
  };

  const handleCalendarSubmit = (e) => {
    e.preventDefault();
    // Handle calendar form submission logic here using calendarValue state
    console.log("Calendar Submitted:", calendarValue);
    // Clear the calendar field and hide it

    setCalendarVisible(false);
  };

  useEffect(() => {
    fetcher();
  }, []);
  return (
    <div className=" h-screen w-screen bg-[#080A0F] overflow-hidden">
      <div className="flex overflow-hidden">
        <div class="w-[78px]">
          <div
            style={{
              writingMode: "vertical-lr",
              marginLeft: "23px",
              marginTop: "150px",
              textOrientation: "upright",
              color: "#E6C591",
            }}
          >
            Crafted By TANAY
          </div>
        </div>
        <div class="h-screen w-[1370px] border-l border-r border-solid border-[#E6C591]">
          <div className="flex w-[1370px] justify-between">
            <div
              className="flex mt-[75px] ml-[44px] items-start group transition-transform transform-gpu hover:transform scale-200 "
              onClick={handleMenuClick}
            >
              <div className="text-white">
                <img
                  src={menu}
                  alt="Menu Icon"
                  style={{
                    width: "39px",
                    height: "39px",
                    transition: "all 0.3s",
                  }}
                />
              </div>
              {isTextFieldVisible && (
                <form className="ml-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    value={textFieldValue}
                    onChange={(e) => setTextFieldValue(e.target.value)}
                    placeholder="Enter text..."
                    className="border border-solid border-[#E6C591] px-2 py-1"
                  />
                  <button
                    type="submit"
                    className="bg-[#E6C591] px-2 py-1 ml-2 text-white"
                  >
                    Submit
                  </button>
                </form>
              )}
              <div className="text-[#E6C591] ml-5 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                Choose Category
              </div>
            </div>

            <div
              className="flex mt-[75px] mr-[44px] items-start group transition-transform transform-gpu hover:transform scale-200"
              onClick={handleIconClick}
            >
              <div className="  text-white">
                {" "}
                <img
                  src={calender}
                  alt="Calendar Icon"
                  style={{ width: "39px", height: "39px" }}
                />
              </div>
              <div className=" ml-5  text-[#E6C591] opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                Year
              </div>
            </div>
            {isCalendarVisible && (
              <form className="ml-5" onSubmit={handleCalendarSubmit}>
                <input
                  type="text"
                  value={calendarValue}
                  onChange={(e) => setCalendarValue(e.target.value)}
                  placeholder="Enter date..."
                  className="border border-solid border-[#E6C591] px-2 py-1"
                />
                <button
                  type="submit"
                  className="bg-[#E6C591] px-2 py-1 ml-2 text-white"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="-mt-12" style={{ transition: "transform 0.3s" }}>
              <div className="flex">
                <div className="text-[#E6C591] text-[100px]">
                  <p>N</p>
                </div>
                <div>
                  <img
                    src={noble}
                    alt="noble"
                    style={{ width: "100px", height: "100px" }}
                    className="hover:rotate-45"
                  />
                  <div>
                    <p className="text-[#E6C591] text-[15px]">PRIZE WINNERS</p>
                  </div>
                </div>

                <div className="text-[#E6C591] text-[100px]">
                  <p>BLE</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center  mt-8 h-screen">
            <div>
              <div className="bg-[#13151E] h-[400px] w-[610px] mr-8 flex flex-col items-start p-10">
                {/* <div
                  className="p-10"
                  style={{ overflowY: "auto", maxHeight: "400px" }}
                >
                  {dta
                    .filter((prize) => prize.year == 2018)
                    .flatMap((prize) =>
                      prize.laureates.map((item, index) => (
                        <div
                          key={index}
                          className="mb-5 mt-5"
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="flex items-center ml-24">
                            <p className="font-inter text-[#E6C591] text-base font-normal leading-normal">
                              {item.firstname}
                            </p>
                          </div>
                          <div className="flex items-center border border-solid border-[#E6C591] h-[50px] w-[300px] ml-24">
                            <p className="font-inter text-[#E6C591] text-2xl font-normal leading-normal p-2 -mt-2">
                              {item.firstname}
                            </p>
                          </div>
                        </div>
                      ))
                    )}
                </div> */}
                <div
                  className="p-10 ml-32"
                  style={{ overflowY: "auto", maxHeight: "400px" }}
                >
                  {dta
                    .filter(
                      (prize) =>
                        prize.year == (calendarValue ? calendarValue : 2018) &&
                        prize.category == textFieldValue
                    )
                    .map((prize, index) => (
                      <div key={index} className="mb-5 mt-5">
                        <h2 className="font-inter text-[#E6C591] text-l font-bold leading-normal mb-3 border border-solid  border-[#E6C591] p-2">
                          Category: {prize.category}
                        </h2>
                        {prize.laureates.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center "
                            onMouseEnter={() => handleLaureateHover(item)}
                            onMouseLeave={() => setSelectedLaureate(null)}
                          >
                            <p className="font-inter text-[#E6C591] text-lg font-normal leading-normal cursor-pointer">
                              {item.firstname} {item.surname}
                            </p>
                          </div>
                        ))}
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="ml-8 relative">
              <div className="flex relative z-10">
                <div className="flex-1"></div>
                <div className="bg-[#13151E] w-[140px] h-[39px] mt-10 absolute right-8 top-1/2 transform -translate-y-1/2 border border-solid border-[#E6C591]">
                  <div className="flex">
                    <p className="ml-10  text-[#E6C591]">share: </p>
                    {selectedLaureate && (
                      <p className="text-[#E6C591]">{selectedLaureate.share}</p>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-[#E6C591] w-[485px] mt-10 h-[300px] pt-20 pl-20 flex">
                  {selectedLaureate && (
                    <div className="justify-center items-center">
                      {" "}
                      <p className="text-[#080A0F] font-inter italic text-2xl font-semibold leading-normal w-[300px] ">
                        {selectedLaureate.motivation}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* <div>
            <p className="text-white">hue</p>
          </div> */}
        </div>
        <div class="w-[78]">
          {" "}
          <div
            style={{
              writingMode: "vertical-lr",
              marginLeft: "23px",
              marginTop: "60px",
              textOrientation: "upright",
              color: "#E6C591",
            }}
          >
            <a
              href="mailto:tanayrajeshshroff21@gmail.com"
              style={{ textDecoration: "none", color: "#E6C591" }}
            >
              tanayrajeshshroff21@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
