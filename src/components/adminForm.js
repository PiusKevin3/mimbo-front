//import {useState,useEffect} from 'react';
import {Card,Form,FormGroup,Label,Input,Button} from 'reactstrap' 

 export const  AdminForm = ()=> {

  return (
    <div  >

<h4 style={{paddingLeft:'100px'}} >  Enter Tag Details (Admin User)   </h4>


<Card style={{left:'4%',right:'5%',padding:'20px'}} >
       <Form inline>

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

  <FormGroup>
    <Label
      for="tagName"
      hidden
    >
      Tag Name
    </Label>
    <Input
      id="tagName"
      name="tagName"
      placeholder="Tag Name"
      type="text"
    />
  </FormGroup>
  

 
  <Button>
    Submit
  </Button>
</Form>
</Card>


    </div>
  );
}

