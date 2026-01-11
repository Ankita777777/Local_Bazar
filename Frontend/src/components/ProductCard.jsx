import { Card,Button } from "react-bootstrap";
import "../App.css";
import { useState } from "react";

export default function ProductCard({product}){
  let [click,setClick] = useState(false);
    return(
        <Card onClick={()=>setClick(true)} className="productCard" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
    <Card.Text>
         {product.name}
        </Card.Text>
        <p>Price:{product.price}</p>
      </Card.Body>
    </Card>
    )
}