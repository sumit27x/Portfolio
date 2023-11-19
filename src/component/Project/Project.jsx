import React from "react";
import Data from "./Data";
import "./Project.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination} from 'swiper/modules';



const Project = () => {
  return (
    <>
      <div className="project section" id="project">
        <h2 className="section_title">Project</h2>
        <span className="section_subtitle">Our Work</span>
      <div className="project_container container ">
        <Swiper 
        effect={'coverflow'}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'} 
        pagination={{
          clickable: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows:false,
        }}
        breakpoints={{
          350: {
            slidesPerView: 1.4,
          },
          576: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3.2,
          }
        }} 
        modules={[EffectCoverflow,Pagination]}
        >
       
          {Data.map(({ id, image, title, description }) => {
            return (
              <SwiperSlide>
              <div className="card_container" key={id}>
                  <img src={image} alt="src" className="card_img"/>
                <div className="card_item">
                  <div className="card_head">
                    <h3>{title}</h3>
                    <div className="card_icon">
                      <a href="https://github.com/sumit27x" target="_blank"  >
                        <GitHubIcon />
                      </a>
                      <a href="https://github.com/sumit27x" target="_blank">
                        <LanguageIcon />
                      </a>
                    </div>
                  </div>
                  <p className="card_description">{description}</p>
                </div>
              </div>
              </SwiperSlide>
            );
          })}
         
        </Swiper>
        </div>
        </div>
    </>
  );
};
export default Project;
