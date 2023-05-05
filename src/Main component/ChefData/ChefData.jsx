import React, { useEffect, useState } from "react";
import ChefShow from "../Chefshow/ChefShow";
import './ChefData.css'
import { Col, Row } from "react-bootstrap";

const ChefData = () => {
  const [chefData, setChefData] = useState([]);

  useEffect(() => {
   
   fetch('https://chef-server-abusiddikeub.vercel.app/chefData')
   .then(res => res.json())
   .then(data => setChefData(data))

   .catch(error => console.log(error))

  }, []);
  return (
                 <div className="mt-5">
<h2 className="text-danger text-center mb-5">Our Best Chef </h2>
<div  className="chef-container" >
<Row md={3} >
{
               chefData.map(chef => <ChefShow
               
               key={chef.id}
               chef={chef}
               
               ></ChefShow>)
}
</Row>
</div>

                 </div>

  )
  
  
};

export default ChefData;
