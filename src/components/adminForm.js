import {useState,useEffect} from 'react';
import {Card,Form,FormGroup,Label,Input,Button} from 'reactstrap' 
import axios from 'axios'

 export const  AdminForm = ()=> {

    const [tagName,setTagName] = useState('')
    const [tagTypeName,setTagTypeName] = useState('')

    const onSubmit=(e)=>{
            e.preventDefault()
            const data = {typeName:tagTypeName,tagName:tagName}

          axios.post('http://localhost:9000/api/tags/create',data)

          setTagName('')
            setTagTypeName('')
    }

  return (
    <div>

    <h4 style={{paddingLeft:'100px'}} >  Enter Tag Details (Admin User)   </h4>


    <Card style={{left:'4%',right:'5%',padding:'20px'}} >
       <Form onSubmit={onSubmit}  inline>

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

  <FormGroup>
    <Label
      for="tagName"
      hidden
    >
      Tag Name
    </Label>
    <Input
      type="text"
      id="tagName"
      name="tagName"
      placeholder="Tag Name"
      value={tagName}
      onChange={e=>setTagName(e.target.value)}
    />
  </FormGroup>
  

 
  <Button type='submit' >
    Submit
  </Button>

</Form>
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
