import React from "react";
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
const Info = ()=>{
    return(
        <div className="about_info grid">

            <div className="about_box">
                <EngineeringOutlinedIcon/>
                <h3 className="about_title">Experience</h3>
                <span className="about_subtitle">1 Years Working</span>
            </div>

            <div className="about_box">
                <BusinessCenterOutlinedIcon/>
                <h3 className="about_title">Completed</h3>
                <span className="about_subtitle">10+ Project</span>
            </div>

            {/* 
           <div className="about_box">
                <SupportAgentOutlinedIcon/>
                <h3 className="about_title">Support</h3>
                <span className="about_subtitle">Online 24/7</span>
            </div>   */}
           

        </div>
    )
}
export default Info;