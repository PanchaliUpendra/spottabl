import React from 'react';
import spottablicon from '../images/spottableicon.png';
import './Logo.css';
function Logo(){
    return(
        <div className='headlogo'>
            <img src={spottablicon} alt="center" className='logo'/>
            <div className='head-btn'>
                <p><strong className='headstr'>YOUR SPOTTABL TEAM</strong><br></br>
                spottabl supports you all throughout
                </p>
            </div>
        </div>
        );

}
export default Logo;