import {Row,Col} from 'reactstrap' 
import {AdminForm} from "./adminForm"
import {UserForm} from "./userForm"

 export const  Tags = ()=> {

  return (
    <div  >
        <br/><br/><br/>
    <center> <h1>  Mimbo   </h1> </center>
    <br/>
       <Row>
        <Col sm="5">
              <UserForm/>
        </Col>

        <Col sm="6"   >
          <AdminForm/>
        </Col>
        
      </Row>

    </div>
  );
}

