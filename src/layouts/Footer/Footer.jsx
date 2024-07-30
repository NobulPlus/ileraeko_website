import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import standard from '../../assets/doc/individualStandard.pdf';
import diaspora from '../../assets/doc/diaspora.pdf';
import telemedicine from '../../assets/doc/telemedicine.pdf';
import seniorsPlan from '../../assets/doc/seniorsPlan.pdf';
import Modal from './Modal'; // Import the Modal component

const Footer = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  const sendDetails = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wokgw6g', 'template_bdfvaxi', form.current, 'nJb5cZW-Jm_wTpEho')
      .then(
        () => {
          console.log('SUCCESS!');
          console.log("message sent successfully");
          setShowModal(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("There was an error sending your email. Please try again later.");
        },
      );
  };

  const handleConfirm = () => {
    setShowModal(false);
    window.location.reload();
  };

  return (
    <>
      <div className="py-10 bg-fixed bg-center bg-cover footer" style={{ backgroundImage: "url('../../assets/images/duplo26.jpg')" }}>
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-between footer_links">
            <div className="w-full mb-6 md:w-1/4 sb_div1">
              <h4 className="font-light">Signup for weekly newsletter</h4>
              <div className="mt-4 input-group">
                <form ref={form} onSubmit={sendDetails} className="form-group">
                  <input type="email" name="user_email" placeholder="Email" className="w-full p-2 mb-4 border border-gray-300 rounded email-input" />
                  <input type="text" placeholder="First Name" name="user_name" className="w-full p-2 mb-4 border border-gray-300 rounded name-input" />
                  <button className="w-full py-2 text-white bg-orange-600 rounded form-button">Subscribe</button>
                </form>
              </div>
            </div>
            <div className="w-full mb-6 md:w-1/4 sb_div2">
              <h4 className="font-light">Give us a Call</h4>
              <ul className="mt-4 space-y-2">
                <li><i className="fa-solid fa-phone"></i> <b>0800-ILERAEKO</b> (0800-4537-2356) - Toll Free Line</li>
                <li><i className="fa-solid fa-phone"></i> <b>0800-ASKLASHMA</b> (0800-4537-2356) - Toll Free Line</li>
                <li><i className="fa-solid fa-phone"></i> <b>0700-ILERAEKO</b> (0700-4537-2356) - Sales Hotline</li>
              </ul>
              <div className="flex mt-4 space-x-4 sb_div2-links">
                <p className="flex items-center">
                  Follow Us:
                  <Link to='https://www.facebook.com/Lagosstatehealthscheme?mibextid=ZbWKwL'><i className="ml-2 text-orange-600 fa-brands fa-facebook"></i></Link>
                  <Link to="https://wa.me/2347045358275"><i className="ml-2 text-orange-600 fa-brands fa-whatsapp"></i></Link>
                  <Link to="https://www.instagram.com/lashma__?igsh=MTdlMm5zYWVqNzN5MA=="><i className="ml-2 text-orange-600 fa-brands fa-instagram"></i></Link>
                  <Link to='https://www.linkedin.com/company/lagos-state-health-management-agency/'><i className="ml-2 text-orange-600 fa-brands fa-linkedin"></i></Link>
                </p>
              </div>
            </div>
            <div className="w-full mb-6 md:w-1/4 sb_div3">
              <h4 className="font-light">Navigation</h4>
              <ul className="mt-4 space-y-2">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Help Desk</Link></li>
                <li><Link to='#'>FAQ</Link></li>
              </ul>
            </div>
            <div className="w-full mb-6 md:w-1/4 sb_div4">
              <h4 className="font-light">Health Insurance</h4>
              <ul className="mt-4 space-y-2">
                <li><a href={standard}>Standard Plan</a></li>
                <li><a href={seniorsPlan}>Senior Plan</a></li>
                <li><a href={diaspora}>Diaspora Plan</a></li>
                <li><a href={telemedicine}>Telemedicine Plan</a></li>
              </ul>
            </div>
          </div>

          <hr className="my-6" />

          <div className="flex flex-col items-center justify-between sb_footer-below md:flex-row">
            <div className="sb_footer-copyright">
              <p className="text-sm font-semibold">
                @{new Date().getFullYear()} Lagos State Health Management Agency. All right reserved.
              </p>
            </div>
            <div className="flex mt-4 space-x-4 sb_footer-below-links md:mt-0">
              <Link><p>Privacy</p></Link>
              <Link><p>Security</p></Link>
              <Link><p>Terms & Agreement</p></Link>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          message="Your email has been sent successfully! Press OK to continue."
          onConfirm={handleConfirm}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default Footer;
