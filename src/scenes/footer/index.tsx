import Logo from "@/assets/Logo.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="container mx-auto w-5/6 flex flex-col md:flex-row justify-between gap-16">
        
        {/* Logo and Description */}
        <div className="basis-1/2">
          <img alt="logo" src={Logo} className="w-32 h-auto" />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        
        {/* Quick Links */}
        <div className="basis-1/4">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>

        {/* Contact Information */}
        <div className="basis-1/4">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5 flex items-center">
            <HiLocationMarker className="mr-2 text-primary-700" />
            123 Dance Ave, Suite 100
          </p>
          <p className="mb-5">(333) 425-6825</p>
          
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-primary-700 hover:text-primary-500">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-primary-700 hover:text-primary-500">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
