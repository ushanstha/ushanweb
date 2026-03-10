
import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Ushan Shrestha",
  title: "Network Administrator",
  contact: {
    address: "Samakhusi, Kathmandu",
    linkedin: "https://www.linkedin.com/in/ushan-shrestha-712429117/"
  },
  summary: "Network administrator with 3+ years of experience in managing, optimizing, and securing network infrastructure. Proficient in planning, implementation, and management of network and security systems ensuring seamless connectivity and robust performance. Committed to delivering resilient and efficient solutions to support organizational objectives.",
  education: [
    {
      degree: "BSc. CSIT",
      institution: "Prime College, TU",
      period: "2015-2019"
    },
    {
      degree: "+2 Science",
      institution: "Prime College, HSEB",
      period: "2013-2015"
    }
  ],
  experience: [
    {
      role: "Network Administrator",
      company: "Max International",
      period: "Jan 2022 – Present",
      description: [
        "Provide consulting service for enterprise grade customers and suggest industry standard practices.",
        "Design network architecture and deploy devices from Cisco, Juniper, F5, Fortinet, Checkpoint, and Palo Alto.",
        "Automated configuration backup of Cisco and Palo Alto devices using Ansible.",
        "Planned and implemented branch connectivity using DMVPN with EIGRP.",
        "Installation of Cisco Switches (SG350, Catalyst, Nexus with vPC) and Juniper EX series.",
        "Deployed F5 BIG IP WAF and administration.",
        "Managed core firewall migrations (Juniper to Fortigate, Sophos to Fortigate)."
      ]
    },
    {
      role: "Network Administrator",
      company: "Nextgen Solutions Pvt. Ltd.",
      period: "Jan 2021 – Jan 2022",
      description: [
        "Migrated data center core firewall from Cisco Firepower to Palo Alto.",
        "Performed network maintenance and system upgrades including patches and hotfixes.",
        "Monitored network performance, system resource utilization and capacity planning.",
        "Deployed Fortigate 600E appliance with 360 protection bundle.",
        "Established eBGP peer with multiple ISPs through NPIX.",
        "Provisioning and administration of Virtual Machines in VMware."
      ]
    },
    {
      role: "Network Administrator",
      company: "Technovate International Pvt. Ltd.",
      period: "Feb 2020 – Jan 2021",
      description: [
        "Designed and installed LAN, WLANs, surveillance and access control systems.",
        "Testing performance of wireless products (ONU/ONT) from different vendors (EPON/GPON).",
        "Installation of Mikrotik routers.",
        "Prepared documentation and knowledge bases of products and network infrastructure."
      ]
    },
    {
      role: "Technical Support Assistant",
      company: "Voxcrow Pvt. Ltd.",
      period: "Sept 2019 – Feb 2020",
      description: [
        "Provided L1 support to users on reported network related issues.",
        "Assisted senior engineer in implementing network and VoIP system infrastructure.",
        "Assisted in installing new desktop systems for new employees.",
        "Created and maintained documents related to network and system configuration."
      ]
    }
  ],
  certifications: [
    { name: "Cisco Certified Network Associate (CCNA)" },
    { name: "ICSI | CNSS Certified Network Security Specialists" },
    { name: "Check Point Certified Security Expert (CCSE)" },
    { name: "F5 Application Delivery Fundaments (101)" }
  ],
  skills: [
    "Network design and implementation",
    "Work under pressure",
    "Analytical and problem-solving skills",
    "Work effectively in diverse team",
    "Troubleshooting",
    "Cisco, Juniper, F5, Fortinet, Palo Alto",
    "Ansible Automation",
    "VMware & Virtualization",
    "Firewall Migration",
    "BGP & Routing Protocols"
  ]
};
