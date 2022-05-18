import React, { useEffect, useState } from 'react';
import CardList from '../CardList/CardList';
import Select from 'react-select';
import data from '../Data/store'
import './Content.css';
const getLocalItems =()=>{
    let items=localStorage.getItem('contacts');
    if(items){
        return JSON.parse(localStorage.getItem('contacts'));
    }else{
        return[];
    }
}
function Content(){
    
    const [selectedvalue,setselectedvalue]=useState([]);
    const [contacts,setanswer]=useState(getLocalItems());

    const handleanswer = () =>{
        for(let i=0;i<selectedvalue.length;i++)
        {
            contacts.push(selectedvalue[i]);
        }
        var duplicate=Array.from(new Set(contacts));
        setanswer(duplicate);
        setselectedvalue([]);

    }

    const removeContactHandler =(id) =>{
        const newContactList=contacts.filter((contact)=>{
            return contact!==id
        });
        setanswer(newContactList);
    }

    const handleChange =(e)=>{
        setselectedvalue(Array.isArray(e)? e.map(x=>x.value):[]);
    }

    useEffect(()=>{
        localStorage.setItem('contacts',JSON.stringify(contacts));
    },[contacts]);
    return(
        <div className='content'>
            <p className='headw'>Customer Success Managers</p>
            <div className='card-btn'>
            <div className='uppi'>
            <div className='wrapper'>
            <Select
             options={data}
             placeholder='Add by Name or Email'
             value={data.filter(obj=>selectedvalue.includes(obj.value))} 
             onChange={handleChange}
             isMulti
             isClearable
             className='left'/>
            <button className='right' onClick={handleanswer}>Add CSM</button>
            </div>
            <CardList List={contacts} newList={removeContactHandler} className='lucky'/>
            </div>
            </div>
            
        </div>
    );
}
export default Content;