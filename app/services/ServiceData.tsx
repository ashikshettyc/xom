export interface Service {
    id: string;
    service: string;
    image: string
    description: string;
  }
  
  export interface CompanyServices {
    XOM_Drilling_Systems_LLC: Service[];
    XOM_Well_Maintenance_LLC: Service[];
  }


export const servicesData: CompanyServices ={
    "XOM_Drilling_Systems_LLC": [
      {
        "id": "XOM_DS_001",
        "service": "Wide range of Drilling Mud Motors",
        "image": "/images/services/motorHead.webp",
        "description": "XOM utilizes a wide range of Drilling Mud Motors for different drilling applications. Our drilling engineers consistently work with our customers to design optimum Bottom-Hole-Assemblies based on analyzing drilling behavior and drilling environment requirements."
      },
      {
        "id": "XOM_DS_002",
        "service": "Mud Pulse Telemetry",
        "image": "/images/services/mudPulse.webp",
        "description": "XOM MPT covers a wide range of flow rates from 125 GPM to 1500 GPM for different hole sections and provides reliable positive pulse data transmission in fluid mediums."
      },
      {
        "id": "XOM_DS_003",
        "service": "Electromagnetic Telemetry",
        "image": "/images/services/electromagnet.webp",
        "description": "XOM EM systems use EM signals to transmit data to the surface as fast as 10 times the MPT system. This system allows for fast data transmission to save survey time, increase data density for precise analysis, and reduce rig uptime. Dual transmission modes (uplink and downlink) enable versatility in data handling."
      },
      {
        "id": "XOM_DS_004",
        "service": "Directional Drilling",
        "image": "/images/services/dirDrilling.webp",
        "description": "XOM provides customized directional drilling services with the latest technology to enable efficient target execution, faster ROP, and increased hydrocarbon recovery."
      }
    ],
    
    "XOM_Well_Maintenance_LLC": [
      {
        "id": "XOM_WM_001",
        "service": "Slickline Services",
        "image": "/images/services/slickline.webp",
        "description": "XOM's fleet of 7 slickline trucks can handle high-risk jobs in QA, HPHT jobs, gas and sour wells. Units have HD data systems and tools for memory logging, data acquisition, and fishing, supported by well-maintained blowout preventers for high-pressure jobs."
      },
      {
        "id": "XOM_WM_002",
        "service": "Non-Corrosive Pumping (NCP) Services",
        "image": "/images/services/ncp.webp",
        "description": "XOM started NCP operations in Oman’s high-profile gas fields, supported by 5 high-spec NCP units. Services include Well Integrity Testing, SIT, Bull-heading, and well integrity assurance, supported from Saih Rawl base close to major E&P concessions."
      },
      {
        "id": "XOM_WM_003",
        "service": "Well Head Maintenance",
        "image": "/images/services/wellHead.webp",
        "description": "XOM WHM operations cover high-pressure, high-temperature deep gas wells, with units supported by a fleet of 3 WHM units from Saih Rawl base. Services include valve and part replacement, grease injection, and TRSSV control."
      },
      {
        "id": "XOM_WM_004",
        "service": "FLEX (Local Expander)",
        "image": "/images/services/flex.webp",
        "description": "The FLEX tool allows XOM to address sustained casing pressures by re-engaging and locking up cement or cap rock with a patented method. This tool has proven effective in Canada and can reduce well integrity or abandonment costs by eliminating the need for double casing mills."
      }
    ]
  }
  