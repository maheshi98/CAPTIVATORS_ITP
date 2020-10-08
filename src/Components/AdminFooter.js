import React from 'react'
import { Navbar, Container,Col} from 'react-bootstrap';

class AdminFooter extends React.Component{

    render(){
        let fullYear = new Date().getFullYear();
        
        return(
            <Navbar  bg = "dark" variant="dark">
            <Container>
                <Col lg={12} class name="text-center text-muted">        
                    <div class = "text"><center>{fullYear}, You For Creating With WordPress</center></div>
                </Col>
            </Container>
            </Navbar>
        );
        
    }
}

export default AdminFooter;