import React from 'react';
import './CardList.css';
import Data from '../Data/Data'
//import user from '../images/user.png'  
function CardList(props){
    const renderContact=props.List.map((product)=>{
       return(
        Data.filter((getit)=>(getit.id===product)).map(s=>{
            return(
                <div className='item'>
                <div className='wrapper'>
                    <div className='pract2'><strong>{s.shortcut}</strong></div>
                <div className='top'>
                    <div><strong>{s.name}</strong></div>
                    <div>{s.job}</div>
                </div>
                <i className='trash  icon'
                style={{color:"rgb(18, 26, 175)",marginTop:"7px"}}
                onClick={()=>props.newList(product)}></i>
                </div>
                </div>
            )
        })
       ) 
    })
    return <div className='ui called list'>{renderContact}</div>;
}
export default CardList;

/*<div className='item'>
                
                <p className='ui avatar image'><strong>AW</strong></p>
                <div className='content'>
                    <div className='header'>{s.name}</div>
                    <div>{s.job}</div>
                </div>
                <i className='trash alternate outline icon'
                style={{color:"blue",marginTop:"7px"}}
                onClick={()=>props.newList(product)}></i>
                </div>
*/

/*
className='ui called list'
*/

/*
<div className='item'>
                
                <img src={user} alt='user' className='ui avatar image'/>
                <div className='content'>
                    <div className='ubbu-btn'><strong>{s.name}</strong></div>
                    <div>{s.job}</div>
                </div>
                <i className='trash  icon'
                style={{color:"rgb(18, 26, 175)",marginTop:"7px"}}
                onClick={()=>props.newList(product)}></i>
                </div>
                */
