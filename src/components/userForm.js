//import {useState,useEffect} from 'react';
import {Card,Form,FormGroup,Label,Input,Button,Row,Col} from 'reactstrap' 
import AutoComplete from "./autoComplete"

 export const  UserForm = ()=> {

  return (
    <div  >
    
    
        <h4 style={{paddingLeft:'100px'}} >  Choose Tags   (Users)  </h4>

       <Card style={{left:'5%',right:'5%',padding:'20px'}} >
       <FormGroup>
    <Label for="tagSelect">
      Select
    </Label>
    <Input  id="tagSelect" name="tagSelect"  type="select" >
      <option>
      Hairstyle
      </option>
      <option>
      Makeup
      </option>
    
    </Input>
     </FormGroup>

      <br/>
      <AutoComplete/>

      </Card>


    </div>
  );
}

