import React from "react";

function Temperature() {
  const handleCityChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <div className="flex justify-between">
        <input
          type="text"
          className="bg-slate-600 border border-slate-500 text-slate-200 placeholder-slate-400 text-md w-60 p-2 focus:outline-none focus:border-slate-400"
          placeholder="Enter your city name"
          onChange={handleCityChange}
        />
        <div className="m-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Temperature;
