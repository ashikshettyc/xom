"use client";
import Image from "next/image";
import React, { useState } from "react";
import { servicesData } from "@/app/services/ServiceData";

function ServiceCard() {
  const [drilling, setDrilling] = useState(
    servicesData.XOM_Drilling_Systems_LLC
  );
  const [details, setDetails] = useState(drilling[0]);
  const [activeService, setActiveService] = useState("drilling");
  const handleDrillingClick = () => {
    setDrilling(servicesData.XOM_Drilling_Systems_LLC);
    setDetails(servicesData.XOM_Drilling_Systems_LLC[0]);
    setActiveService("drilling");
  };
  const handleMaintenanceClick = () => {
    const wellMaintanence = servicesData.XOM_Well_Maintenance_LLC;
    setDrilling(wellMaintanence);
    setDetails(wellMaintanence[0]);
    setActiveService("maintenance");
  };

  const handleCard = (id: string) => {
    const filterData = drilling?.find((item) => item.id === id);
    if (filterData) {
      setDetails(filterData);
    }
  };

  return (
    <div className="sidebar-page-container !pt-0 pb-0">
      <div className="auto-container ">
        <div className="bg-greenish mb-5 p-2 rounded-2xl">
          <div className="flex flex-col md:flex-row justify-between items-center cursor-pointer ">
            <div
              className={`service-title-box text-md !mb-0 p-2 lg:p-4 rounded-xl ${
                activeService === "drilling" && "bg-white"
              }`}
            >
              <h2
                className={` ${
                  activeService === "drilling" && "!text-black"
                } text-white`}
                onClick={handleDrillingClick}
              >
                XOM Drilling Systems LLC
              </h2>
            </div>
            <div
              className={`service-title-box !mb-0 p-2 lg:p-4 rounded-xl ${
                activeService === "maintenance" && "bg-white"
              }`}
            >
              <h2
                className={` ${
                  activeService === "maintenance" && "!text-black"
                } text-white`}
                onClick={handleMaintenanceClick}
              >
                XOM Well Maintenance LLC
              </h2>
            </div>
          </div>
        </div>

        <div className="row clearfix">
          <div className="content-side col-lg-9 col-md-12 col-sm-12  lg:h-[50vh]">
            <div className="service-detail" key={details.id}>
              <div className="inner-box flex flex-col justify-center items-start xl:flex-row lg:gap-6">
                <div className="col-12 col-xl-8 py-3">
                  <Image
                    src="/images/resource/service-1.jpg"
                    alt=""
                    width={800}
                    height={100}
                  />
                </div>
                <div className="lower-content pl-3">
                  <h4 className="text-center">{details.service}</h4>
                  <p className="text-base font-semibold">
                    {details.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar-side col-lg-3 col-md-12 col-sm-12">
            <aside className="sidebar sticky-top">
              <div className="sidebar-widget categories-widget">
                {drilling.map((data) => (
                  <div
                    className={`category-boxed ${
                      details.id === data.id && "!bg-greenish !text-white"
                    }`}
                    key={data.id}
                    onClick={() => handleCard(data.id)}
                  >
                    <a className="overlay-link"></a>
                    <div className="font-bold">
                      <h6
                        className={`${
                          details.id === data.id && "!text-white"
                        } font-bold text-black`}
                      >
                        {data.service}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
      
        </div>
      </div>
      
    </div>
  );
}

export default ServiceCard;
