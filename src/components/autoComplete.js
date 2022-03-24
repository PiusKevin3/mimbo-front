import {useState,useEffect} from 'react';
import React from 'react';
import CreatableSelect from 'react-select/creatable';
import axios from 'axios';
import { ActionMeta, OnChangeValue } from 'react-select';

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, '')
});


export  function  AutoComplete({typeNameProp}){

  const defaultOptions = [createOption('')];
 
   const [dbTags,setDbTags] = useState('')
   const [newEntry,setNewEntry] = useState('')

  const [data,setData]= useState({
    isLoading: false, 
     options: defaultOptions,
    value: undefined,
  })
  const { isLoading, options, value } = data;


  useEffect(()=>{
      axios.get(`http://localhost:9000/api/tags/getAll/${typeNameProp}`)
      .then(response=>{
         response.data.resData.forEach(tags=>setDbTags(tags.tagName))

      })
      .catch(err=>err)
  },[typeNameProp])

  useEffect(()=>{
    
    const data = {typeName:typeNameProp,tagName:newEntry}
      axios.post('http://localhost:9000/api/tags/create',data)

},[newEntry])


  useEffect(()=>{
         const { options } = data
        const newOption = createOption(dbTags);
      
        setData({
        options: [...options, newOption],
        value: newOption,
      })

        
  },[dbTags,typeNameProp])

 const handleChange = (newValue,actionMeta) => {  
    setData({ value: newValue })

    /*
    axios.get(`http://localhost:9000/api/tags/getAllWithSameTagtype/${typeNameProp}/${newValue.label}`)
    .then(response=>{

    })
    .catch(err=>err)
    */

  };

  const handleCreate = (inputValue) => {
    setData({ isLoading: true })

    setTimeout(() => {
      const { options } = data
      const newOption = createOption(inputValue);
      setNewEntry(inputValue)

      setData({
      isLoading: false,
      options: [...options, newOption],
      value: newOption,
     })

    }, 500);
  };
 

    return (
      <CreatableSelect
        isClearable
        isDisabled={isLoading}
        isLoading={isLoading}
        onChange={handleChange}
        onCreateOption={handleCreate}
        options={options}
        value={value}
      />
    );

}
