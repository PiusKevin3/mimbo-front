import {useState,useEffect} from 'react';
import axios from 'axios';
import {Card,Form,FormGroup,Label,Input,Button,Row,Col} from 'reactstrap' 
import {AutoComplete} from "./autoComplete"

 export const  UserForm = ()=> {
    const [tagTypeName,setTagTypeName] = useState('')
    const [dbTags,setDbTags] = useState('')


  return (
    <div  >
    
    
        <h4 style={{paddingLeft:'100px'}} >  Choose Tags (Users)  </h4>

       <Card style={{left:'5%',right:'5%',padding:'20px'}} >
       <FormGroup>
    <Label for="tagSelect">
      Select
    </Label>

     <div className="select-container">
          <select value={tagTypeName} onChange={e=>setTagTypeName(e.target.value)} >
            {options.map((option) => (
              <option key={option.label} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

     </FormGroup>

      <br/>
      <AutoComplete typeNameProp={tagTypeName} />

      </Card>


    </div>
  );
}


const options = [
    {
        label: "select Tag Type",
        value: "select Tag Type",
   },
    {
      label: "Hairstyle",
      value: "Hairstyle",
    },
    {
      label: "Makeup",
      value: "Makeup",
    }
    
  ];
  