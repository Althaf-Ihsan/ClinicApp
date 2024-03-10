import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
const Details = () => {
  const location = useLocation();
  const data = location.state;
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
  const formattedDate = formatter.format(new Date(data.lastVisit)).split("/").reverse();
  console.log(formattedDate)
  console.log(data)
  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-row gap-7 justify-start items-center mt-3 mx-3 md:mt-6 md:mx-9 w-full  ">
        <Link to="/"><FaArrowLeft size={20} className="font-bold" /></Link>
        <span className="capitalize text-xl">clinic details</span>
      </div>
      <div className=" grid grid-cols-1 w-full  md:w-[70%] mx-3 md:mx-9 mt-4 ">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
            <div className="flex flex-col gap-y-0">
              <label className="text-slate-500 capitalize text-sm">
                clinic name <span className="text-red-600">*</span>
              </label>
              <input
                value={data.clinicName}
                type="text"
                className="border-b py-1 border-gray-400 outline-none"
                readOnly
              />
            </div>
            <div className="flex flex-col">
              <label className="text-slate-500 capitalize text-sm">
                address
              </label>
              <input
                type="text"
                value={data.address}
                className="border-b py-1 border-gray-400 outline-none"
                readOnly
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-x-5 mt-2">
            <div className="flex flex-col">
              <label className="text-slate-500 capitalize text-sm">city</label>
              <input
                type="text"
                className="border-b py-1 border-gray-400 outline-none"
                value={data.city}
                readOnly
              />
            </div>
            <div className="flex flex-col">
              <label className="text-slate-500 capitalize text-sm">state</label>
              <select className="border-b py-1 border-gray-400 outline-none text-[15px]" readOnly>
                <option>{data.state}</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-slate-500 capitalize text-sm">zip</label>
              <input
                type="text"
                className="border-b py-1 border-gray-400 outline-none"
                value={data.zip}
                readOnly
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-5 mt-2">
            <div className="flex flex-col gap-y-0">
              <label className="text-slate-500 capitalize text-sm">
                phone <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="border-b py-1 border-gray-400 outline-none"
                value={data.phone}
                readOnly
              />
            </div>
            <div className="flex flex-col">
              <label className="text-slate-500 capitalize text-sm">email</label>
              <input
                type="email"
                className="border-b py-1 border-gray-400 outline-none"
                value={data.email}
                readOnly
              />
            </div>
          </div>

          <div className="grid grid-cols-2 mt-6 gap-x-5 ">
            <div className="flex flex-col gap-y-0">
              <input
                type="text"
                className="border-b py-1 border-gray-400 outline-none capitalize text-slate-500 text-[15px] "
                value={"frontdesk name"}
                readOnly
              />
            </div>
            <div className="flex flex-col">
              <input
                type="email"
                readOnly
                value={"office manager name"}
                className="border-b py-1 border-gray-400 outline-none capitalize text-slate-500 text-[15px]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 mt-2">
            <div className="flex flex-col">
              <label className="text-slate-500 capitalize text-sm">
                physician name
              </label>
              <input
                type="text"
                className="border-b py-1 border-gray-400 outline-none"
                value={data.pysicianName}
                readOnly
              />
            </div>
            <div className="flex flex-col">
              <label className="text-slate-500 capitalize text-sm">
                EMR name
              </label>
              <input
                type="text"
                className="border-b py-1 border-gray-400 outline-none"
                value={data.emrName}
                readOnly
              />
            </div>
            <div className="flex flex-col">
              <label className="text-slate-500 capitalize text-sm">
                sales person<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="border-b py-1 border-gray-400 outline-none"
                value={data.salesPerson}
                readOnly
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 mt-2">
            <div className="flex flex-col">
              <label className="text-slate-500 capitalize text-sm">
                billing
              </label>
              <input
                type="text"
                className="border-b py-1 border-gray-400 outline-none"
                value={data.billing}
                readOnly
              />
            </div>
            <div className="flex flex-col">
              <label className="text-slate-500 capitalize text-sm">
                length of current billing relationship
              </label>
              <input
                type="text"
                className="border-b py-1 border-gray-400 outline-none"
                value={data.durationOfRelationship
                }
                readOnly
              />
            </div>
            <div className="flex flex-col">
              <label className="text-slate-500 capitalize text-sm">
                last visit
              </label>
              <input
                type="date"
                className="border-b py-1 border-gray-400 outline-none"
                value={formattedDate}
                readOnly
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-5 mt-2 ">
            <div className="flex flex-col">
              <label className="text-slate-500 capitalize text-sm">
                speciality
              </label>
              <input
                type="text"
                className="border-b py-1 border-gray-400 outline-none"
                value={data.speciality}
                readOnly
              />
            </div>
            <div className="flex flex-col">
              <label className="text-slate-500 capitalize text-sm">
                lead status
              </label>
              <input
                type="text"
                className="border-b py-1 border-gray-400 outline-none"
                value={data.status}
                readOnly
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Details;
