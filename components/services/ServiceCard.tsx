"use client"
import Image from "next/image";
import React, { useState } from "react";
import { servicesData } from "@/app/services/ServiceData";
function ServiceCard() {
    const [drilling, setDrilling] = useState(servicesData.XOM_Drilling_Systems_LLC)
    const handleChange = () => {
        setDrilling(servicesData.XOM_Well_Maintenance_LLC)
    }
  return (
    <div className="sidebar-page-container">
      <div className="auto-container">
        <div className="flex justify-between cursor-pointer">
        <div className="service-title-box">
          <h2 onClick={() => setDrilling(servicesData.XOM_Drilling_Systems_LLC)}>XOM Drilling Systems LLC</h2>
        </div>
        <div className="service-title-box">
          <h2 onClick={handleChange}>XOM Well Maintenance LLC</h2>
        </div>
        </div>
       
        <div className="row clearfix">
          <div className="content-side col-lg-9 col-md-12 col-sm-12 overflow-y-auto overflow-x-hidden h-[60vh]">
            {
                drilling.map(data=> (
                    <div className="service-detail" key={data.id}>
                    <div className="inner-box flex gap-6">
                      <div className="image col-6 flex flex-col gap-4">
                        <Image src="/images/resource/service-1.jpg" alt="" width={500} height={50}/>
                        
                      </div>
                      <div className="lower-content col-6">
                        <p id="Employers">
                         {data.description}
                        </p>
                     
                      </div>
                    </div>
                    <div >
                    {/* <blockquote className="text-black text-sm py-7 px-9 mt-9 mb-12 bg-[#f7f7f7] " style={{ borderLeft: '4px solid #025652' }}>
                          HasTech – we help companies assess their skills and choose a
                          new direction which utilizes the talents of the team and
                          resources most productively.
                        </blockquote> */}
                        </div>
                  </div>
                ))
            }
         
          
          </div>

          <div className="sidebar-side col-lg-3 col-md-12 col-sm-12">
            <aside className="sidebar sticky-top">
              <div className="sidebar-widget categories-widget">
                {
                    drilling.map(data=> (
<div className="category-boxed" key={data.id}>
                  <a href="#We-work-closely" className="overlay-link"></a>
                  <div className="boxed-inner">
                    <div className="icon ti-blackboard"></div>
                    <h6>{data.service}</h6>
                  </div>
                </div>
                    ))
                }
                

               
                

             
              </div>

              {/* <div className="sidebar-widget enquiry-widget">
                <div className="widget-content">
                  <h4>For Business Enquiry</h4>
                  <div className="text">
                    You can also send us an email and we’ll get in touch
                    shortly, or Troll Free
                  </div>
                  <div className="number">
                    Number :<a href="tel:+91-00-700-6202">(+91) 00-700-6202.</a>
                  </div>
                  <a href="#" className="theme-btn btn-style-two">
                    <span className="txt">Send Email</span>
                  </a>
                </div>
              </div> */}
            </aside>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default ServiceCard;
