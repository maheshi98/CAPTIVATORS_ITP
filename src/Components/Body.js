import React, {Component} from 'react'
import './Style.css';
import Img1 from './image/appetizers1.jpg'
import Img3 from './image/soup.jpg'
import Img6 from './image/main.jpg'
import Img7 from './image/dinner.jpg'
import Img8 from './image/glassgow.png'
import Img10 from './image/chineese.jpg'
import Img11 from './image/devilled.jpg'
import Img12 from './image/italian.jpg'
import Img14 from './image/desert.png'
import Img15 from './image/beverages.jpg'
import Img16 from './image/juice.jpg'
import Img18 from './image/lankan breakfast.jpg'
import Img19 from './image/eng.jpg'

import {Link} from 'react-router-dom';

import './Style.css'

class Body extends Component{
    render(){
        return (
         
       <div><center><table>
  <tr>
      
    <th><div>
        <center><Link to="APPETIZERS">< img className = 'img1'src= {Img1}alt="appetizers1"/></Link></center>
        <Link to="APPETIZERS"><center>APPETIZERS</center></Link></div>
    </th>

    <th><div><center><Link to="SOUPS"><img className = 'img1' src= {Img3}alt="SOUPS"/></Link></center><Link to="SOUPS"><center>SOUPS</center></Link></div></th>
    <th><div><center><Link to="main"><img className = 'img1' src= {Img6}alt="main"/></Link></center><Link to="main"><center>MAIN COURSES</center></Link></div></th>
    <th><div><center><Link to="dinner"><img className = 'img1' src= {Img7}alt="dinner"/></Link></center><Link to="dinner"><center>DINNER ONLY</center></Link></div></th>
    </tr>
    <tr>
    <th><div><center><Link to="glassglow"><img className = 'img1' src= {Img8}alt="glassglow"/></Link></center><Link to="glassglow"><center>GLass Glow STYLE RICE & CURRY</center></Link></div></th>
    <th><div><center><Link to="chineese"><img className = 'img1' src= {Img10}alt="chineese"/></Link></center><Link to="chineese"><center>CHINEESE</center></Link></div></th>
    <th><div><center><Link to="devilled"><img className = 'img1' src= {Img11}alt="devilled"/></Link></center><Link to="devilled"><center>DEVILLED CORNER</center></Link></div></th>
    <th><div><center><Link to="italian"><img className = 'img1' src= {Img12}alt="italian"/></Link></center><Link to="italian"><center>ITALIAN SPECIALITIES</center></Link></div></th>
     </tr>
     <tr>
    <th><div><center><Link to="desert"><img className = 'img1' src= {Img14}alt="desert"/></Link></center><Link to="bites"><center>DESSERT</center></Link></div></th>
    <th><div><center><Link to="bev"><img className = 'img1' src= {Img15}alt="bev"/></Link></center><Link to="bev"><center>BEVERAGES</center></Link></div></th>
    <th><div><center><Link to="juices"><img className = 'img1' src= {Img16}alt="juices"/></Link></center><Link to="juices"><center>FRESH JUICES</center></Link></div></th>
    <th><div><center><Link to="lankan"><img className = 'img1' src= {Img18}alt="lankan"/></Link></center><Link to="soft"><center>SRI LANKAN STYLE BREAKFAST</center></Link></div></th>
    </tr>
    <tr>
    <th><div><center><Link to="eng"><img className = 'img1' src= {Img19}alt="eng"/></Link></center><Link to="soft"><center>ENGLISH STYLE BREAKFAST</center></Link></div></th>
     
  </tr>

  
</table>
</center>
</div>

      );    
    


        }

}
export default Body;