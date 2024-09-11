import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { FaWordpress } from "react-icons/fa";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const navLinks = [
  { href: "#Home", label: "Home" },
  { href: "#About", label: "About" },
  { href: "#Skills", label: "Skills" },
  { href: "#Portfolio", label: "Portfolio" },
  { href: "#Contact", label: "Contact" },
];

const socialMediaLinks = [
  {
    href: "https://web.facebook.com/umerharoon.haroon.1",
    icon: <FaFacebookF />,
    key: "facebook",
  },
  {
    href: "https://www.linkedin.com/in/umer-haroon-97056620a",
    icon: <FaLinkedinIn />,
    key: "linkedin",
  },
  {
    href: "https://www.instagram.com/umerharoon31/",
    icon: <FaInstagram />,
    key: "instagram",
  },
  {
    href: "https://x.com/UMERHAROON19?t=aFt0nZg86FIjP3hzHH5BFg&s=08",
    icon: <FaXTwitter />,
    key: "twitter",
  },
];
const infoItems = [
  { label: "Age :-", value: "22" },
  { label: "Gender :-", value: "Male" },
  { label: "Nationality :-", value: "Pakistani" },
  { label: "Religion :-", value: "Islam" },
  { label: "Marital Status :-", value: "Single" },
  { label: "Qualification :-", value: "BSCS" },
];

const skills = [
  {
    icon: <FaHtml5 />,
    title: "HTML",
  },
  {
    icon: <FaCss3 />,
    title: "CSS",
  },
  {
    icon: <FaBootstrap />,
    title: "Bootstrap",
  },
  {
    icon: <SiTailwindcss />,
    title: "Talwind.css",
  },
  {
    icon: <TbBrandJavascript />,
    title: "JavaScript",
  },
  {
    icon: <FaReact />,
    title: "React JS",
  },
  {
    icon: <FaNode />,
    title: "Node JS",
  },
  {
    icon: <FaNodeJs />,
    title: "Express JS",
  },
  {
    icon: <SiMysql />,
    title: "MYSQL",
  },
  {
    icon: <SiMongodb />,
    title: "MYSQL",
  },
  {
    icon: <BsFiletypeSql />,
    title: "SQL",
  },
  {
    icon: <FaWordpress />,
    title: "Wordpress",
  },
];

const portfolio = [
  {
    image: '/Pictures/Ampflick.png',
    alt: 'Ampflick',
    link: 'https://ampflick.com/',
    text: 'Ampflick',
    buttonText: 'Visit'
  },
  {
    image: '/Pictures/IntelliWriter.jpg',
    alt: 'IntelliWriter',
    link: 'https://intelliwriter.io/',
    text: 'IntelliWriter',
    buttonText: 'Visit'
  },
  {
    image: '/Pictures/Weather.jpg',
    alt: 'Weather App',
    link: 'https://github.com/Umer04',
    text: 'React Weather App',
    buttonText: 'Visit'
  },
  {
    image: '/Pictures/smart home.jpg',
    alt: 'Smart Home',
    link: 'https://github.com/Umer04',
    text: 'NextGenLiving',
    buttonText: 'Visit'
  },
  {
    image: '/Pictures/RMS.jpg',
    alt: 'DineGallery',
    link: 'https://myresturant.vercel.app/',
    text: 'DineGallery.',
    buttonText: 'Visit'
  },
{
    image: '/Pictures/car game.jpg',
    alt: 'car game',
    link: 'https://github.com/Umer04',
    text: 'Car Game ',
    buttonText: 'Visit'
  },{
    image: '/Pictures/my city.jpg',
    alt: 'Smart City',
    link: 'https://github.com/Umer04',
    text: 'My City',
    buttonText: 'Visit'
  },{
    image: '/Pictures/SMS.jpg',
    alt: 'School',
    link: 'https://github.com/Umer04',
    text: 'Smart School',
    buttonText: 'Visit'
  },
];
const contact = [
  { 
    icon: <FaPhoneAlt className="mt-1 mr-2" />, 
    text: "03076220267", 
    href: "tel:03076220267" // For calling
  },
  { 
    icon: <FaWhatsapp className="mt-1 mr-2" />, 
    text: "03365697980", 
    href: "https://wa.me/03365697980" // For WhatsApp
  },
  { 
    icon: <CiMail className="mt-1 mr-2" />, 
    text: "umerharoon04@gmail.com", 
    href: "mailto:umerharoon04@gmail.com" // For Gmail
  },
];
export { navLinks, socialMediaLinks, infoItems,skills,portfolio,contact};
