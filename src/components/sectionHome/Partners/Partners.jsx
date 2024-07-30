import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../../../assets/images/Partner/bono.png';
import img2 from '../../../assets/images/Partner/arfh.png';
import img3 from '../../../assets/images/Partner/6334.png';
import img4 from '../../../assets/images/Partner/ccsi.png';
import img5 from '../../../assets/images/Partner/civic.png';
import img6 from '../../../assets/images/Partner/dfaf.png';
import img7 from '../../../assets/images/Partner/firstbank1.png';
import img8 from '../../../assets/images/Partner/global_fund.png';
import img9 from '../../../assets/images/Partner/HP.png';
import img10 from '../../../assets/images/Partner/isf.png';
import img11 from '../../../assets/images/Partner/lstef.png';
import img12 from '../../../assets/images/Partner/mint.png';
import img13 from '../../../assets/images/Partner/senator.png';
import img14 from '../../../assets/images/Partner/sterling3.png';
import img15 from '../../../assets/images/Partner/swipin.png';
import img16 from '../../../assets/images/Partner/unicef.png';
import img17 from '../../../assets/images/Partner/USAID.png';
import img18 from '../../../assets/images/Partner/wema.png';

const Partners = () => {
  return (
    <>
      <div className="p-10 partner bg-amber-100">
        <Marquee pauseOnHover speed={50} className="flex">
          <div className="mx-4 image_wrapper">
            <img src={img1} alt="Partner 1" className="object-contain h-24" />
          </div>
          <div className="mx-4 image_wrapper">
            <img src={img2} alt="Partner 2" className="object-contain h-24" />
          </div>
          <div className="mx-4 image_wrapper">
            <img src={img3} alt="Partner 3" className="object-contain h-24" />
          </div>
          <div className="mx-4 image_wrapper">
            <img src={img4} alt="Partner 4" className="object-contain h-24" />
          </div>
          <div className="mx-4 image_wrapper">
            <img src={img5} alt="Partner 5" className="object-contain h-24" />
          </div>
          <div className="mx-4 image_wrapper">
            <img src={img6} alt="Partner 6" className="object-contain h-24" />
          </div>
          <div className="mx-4 image_wrapper">
            <img src={img7} alt="Partner 7" className="object-contain h-24" />
          </div>
          <div className="mx-4 image_wrapper">
            <img src={img8} alt="Partner 8" className="object-contain h-24" />
          </div>
          <div className="mx-4 image_wrapper">
            <img src={img9} alt="Partner 9" className="object-contain h-24" />
          </div>
          <div className="mx-4 image_wrapper">
            <img src={img10} alt="Partner 10" className="object-contain h-24" />
          </div>
          <div className="mx-4 image_wrapper">
            <img src={img11} alt="Partner 11" className="object-contain h-24" />
          </div>
          <div className="mx-4 image_wrapper">
            <img src={img12} alt="Partner 12" className="object-contain h-24" />
          </div>
          <div className="mx-4 image_wrapper">
            <img src={img13} alt="Partner 13" className="object-contain h-24" />
          </div>
          <div className="mx-4 image_wrapper">
            <img src={img14} alt="Partner 14" className="object-contain h-24" />
          </div>
          <div className="mx-4 image_wrapper">
            <img src={img15} alt="Partner 15" className="object-contain h-24" />
          </div>
          <div className="mx-4 image_wrapper">
            <img src={img16} alt="Partner 16" className="object-contain h-24" />
          </div>
          <div className="mx-4 image_wrapper">
            <img src={img17} alt="Partner 17" className="object-contain h-24" />
          </div>
          <div className="mx-4 image_wrapper">
            <img src={img18} alt="Partner 18" className="object-contain h-24" />
          </div>
        </Marquee>
      </div>
    </>
  );
}

export default Partners;
