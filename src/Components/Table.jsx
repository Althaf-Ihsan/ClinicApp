import React, { useState } from "react";
import data from "../data/data.json";
import { useNavigate } from "react-router-dom";
const Table = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    clinic: "",
    city: "",
    zip: "",
  });
  const [search, setSearch] = useState({
    clinic: "",
    city: "",
    zip: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleReset=(e)=>{
    setSearch({
      clinic:"",
      city:"",
      zip:""
    })
    setFormData({
      clinic:"",
      city:"",
      zip:""
    })
  }
  const filteredData=data.filter((item)=>{
    const {clinic,zip,city}=search
    return ((!clinic || item.clinicName.toLowerCase().includes(clinic.toLowerCase())) &&
    (!city || item.city.toLowerCase().includes(city.toLowerCase()))&&
    (!zip || item.zip.toLowerCase().includes(zip.toLowerCase()))
    )
  })
  const handleSearch=()=>{
    setSearch(formData)
  }
  const clickData=(item)=>{
    navigate("/details",{state:item})
  }
  return (
    <div className="md:flex ">
      <div className="h-[300px] md:w-[18%] ">
        <div className="flex  flex-col mx-5 mt-3">
          <span className="mb-3 text-lg font-semibold"> Contacts</span>
          <form>
            <div className="flex flex-col gap-4 mb-8">
              <input
                type="text"
                placeholder="Clinic"
                name="clinic"
                value={formData.clinic}
                className="border-b border-slate-300 focus:border-black outline-none"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="City"
                name="city"
                value={formData.city}
                className="border-b border-slate-300 focus:border-black outline-none"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Zip"
                name="zip"
                value={formData.zip}
                className="border-b border-slate-300 focus:border-black outline-none"
                onChange={handleChange}
              />
            </div>
            <button
              type="button"
              className="focus:outline-none w-full text-white bg-[#F07036]  font-medium rounded-md text-sm px-6 py-2 me-2 mb-2 dark:focus:ring-yellow-900 uppercase"
              onClick={handleSearch}
              >
              search
            </button>
            <button
              type="button"
              className=" text-[#F07036] focus:outline-none w-full  bg-transparent border-2 border-[#F07036] font-medium rounded-md text-sm px-6 py-2 me-2 mb-2 dark:focus:ring-yellow-900 uppercase"
            onClick={handleReset}
              >
              reset
            </button>
          </form>
        </div>
      </div>
      <div className="w-[82%]">
        <table className="overflow-auto table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs  text-gray-700 uppercase bg-gray-100 ">
            <tr>
              <th scope="col" className="px-4 py-1">
                Clinic
              </th>
              <th scope="col" className="px-4 py-1">
                Address
              </th>
              <th scope="col" className="px-4 py-1">
                City
              </th>
              <th scope="col" className="px-4 py-1">
                Zip
              </th>
              <th scope="col" className="px-4 py-1">
                Phone
              </th>
              <th scope="col" className="px-4 py-1">
                Physician
              </th>
              <th scope="col" className="px-4 py-1">
                Status
              </th>
              <th scope="col" className="px-4 py-1">
                Created Date
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData
              .map((item,i) => {
                return (
                  <tr className="bg-white border-b " key={i} onClick={()=>clickData(item)}>
                    <td
                      scope="row"
                      className="cursor-pointer px-4 py-1  text-gray-900 whitespace-nowrap "
                    >
                      {item.clinicName.substring(0, 43)}
                    </td>
                    <td className="cursor-pointer px-4 py-1">{item.address}</td>
                    <td className="cursor-pointer px-4 py-1">{item.city}</td>
                    <td className="cursor-pointer px-4 py-1">{item.zip}</td>
                    <td className="cursor-pointer px-4 py-1">{item.phone}</td>
                    <td className="cursor-pointer px-4 py-1">{item.pysicianName}</td>
                    <td className="cursor-pointer px-4 py-1">{item.status}</td>
                    <td className="cursor-pointer px-4 py-1">{item.createdDate}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
