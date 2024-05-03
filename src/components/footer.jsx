
import React from "react"
import logo from "./../assets/images/logo.svg"
import { AiFillTwitterCircle, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';


const Footer = () => {
    return (
      <footer className="flex flex-row justify-between mt-[500px] bg-black text-white ">
     
        <div className="">

        

          <p>Contact Us:</p>
          <ul>
            <li>Email: info@yourmovieapp.com</li>
            <li>Phone: +1234567890</li>
            <li>Address: 123 Movie St, Hollywood</li>
          </ul>
        </div>
        <div className="">
        <p>Follow Us </p>
<ul style={{ listStyle: 'none', padding: 0 }}>
  <li style={{ display: "flex", alignItems: 'center' }}>
    Twitter <AiFillTwitterCircle style={{ marginLeft: '29px' }} />
  </li>
  <li style={{ display: "flex", alignItems: 'center' }}>
    Facebook <AiFillFacebook style={{ marginLeft: '10px' }} />
  </li>
  <li style={{ display: "flex", alignItems: 'center' }}>
    Instagram <AiFillInstagram style={{ marginLeft: '9px' }} />
  </li>
</ul>
</div>
        <div className="mt-[20px]">
          <p>&copy; 2024 Your Movie App. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  export default Footer