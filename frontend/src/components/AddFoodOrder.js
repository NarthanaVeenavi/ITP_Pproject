import React, {useState} from "react";
import axios from 'axios';

export default function AddFoodOrder(){
    const [food_Id, setFoodId] = useState("");
    const [food_name, setFoodName] = useState("");
    const [food_type, setFoodType] = useState("");
    const [food_package, setFoodPackage] = useState("");
    const [quantity, setNoOfPlates] = useState("");
    const [unit_price, setUnitPrice] = useState("");
    const [cus_name, setCusName] = useState("");
    const [cus_phone, setCusPhone] = useState("");
    const [cus_email, setCusEmail] = useState("");
    const [cus_NIC, setCusNic] = useState("");
    const [req_date, setReqDate] = useState("");

    

    function SendFoodOrderData(e){
        e.preventDefault();//execute function body when pressing the submit button without redirecting another file

        const newFoodOrder ={

            food_Id, 
            food_name,
            food_type,
            food_package,
            quantity,
            unit_price,
            cus_name,
            cus_phone,
            cus_email,
            cus_NIC,
            req_date
    
        }
        
        axios.post("http://localhost:8070/foodOrdering/add",newFoodOrder).then(()=>{
            alert("Order Added");
            
        }).catch((err)=>{
            alert(err)
        })

        
    }
    
    
//The input value is copied at the onchange event using the setName function for the variable
    return(
        <div className="box">
        <div className="container" style={{marginTop:"1cm",width:"20cm",border: "1px solid black",marginBottom:"2cm", background: "rgba(255,255,255,0.838)", fontSize:"13px", borderRadius: "10px"}}>
         <br/>
         <p style={{fontSize:"14px"}}>Ordering Details</p>
        <form onSubmit={SendFoodOrderData}>

            {/* for food id */}
            <div className="form-group">

                <label htmlFor="food_id">Food Id</label>
                
                <input type="text" className="form-control" id="food_id" placeholder="" required style={{width:"9cm"}}
                onChange={(e)=>{
                    setFoodId(e.target.value);
                }}/>
                
            </div>

            {/* for food name */}
            <div className="form-group" style={{marginTop:"-2.25cm", marginLeft:"10.2cm"}}>

                <label htmlFor="food_name">Food Name</label>
                <input type="text" className="form-control" id="food_name" placeholder="" required style={{width:"9cm"}}
                onChange={(e)=>{
                    setFoodName(e.target.value);
                }}/>
                
            </div>

            {/* for food type */}
            <div className="form-group">

                <label htmlFor="food_type">Food Type</label>
                <select className="form-control" id="food-type" placeholder="" required style={{width:"9cm"}}
                onChange={(e)=>{
                    setFoodType(e.target.value);
                }}>
                    <option></option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                </select>
            </div>    

            {/* for food package */}
            <div className="form-group" style={{marginTop:"-2.25cm", marginLeft:"10.2cm"}}>

                <label htmlFor="food_package">Food Package</label>
                <select className="form-control" id="food-package" placeholder="" required style={{width:"9cm"}}
                onChange={(e)=>{
                    setFoodPackage(e.target.value);
                }}>
                    <option></option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
            </div>     

            {/* for cno of plates */}
            <div className="form-group">

                <label htmlFor="no_of_plates">No of Plates/ Items</label>
                <input type="number" className="form-control" min="1" id="no_of_plates" placeholder="" required style={{width:"9cm"}}
                onChange={(e)=>{
                    setNoOfPlates(e.target.value);
                }}/>
                
            </div>

            {/* for unit price */}
            <div className="form-group" style={{marginTop:"-2.25cm", marginLeft:"10.2cm"}}>

                <label htmlFor="unit_price">Unit Price</label>
                <input type="number" className="form-control" id="unit_price" placeholder="" required style={{width:"9cm"}}
                onChange={(e)=>{
                    setUnitPrice(e.target.value);
                }}/>
                
            </div>

            <p style={{fontSize:"14px"}}>Customer Details</p>

            {/* for customer name */}
            <div className="form-group">

                <label htmlFor="cus_name">Customer Name</label>
                <input type="text" className="form-control" id="cus_name" placeholder="" required
                onChange={(e)=>{
                    setCusName(e.target.value);
                }}/>
                
            </div>

            {/* for customer phone */}
            <div className="form-group">

                <label htmlFor="cus_phone">Customer Phone Number(Ex: 0XXXXXXXXXX)</label>
                <input type="text" className="form-control" pattern="[0][0-9]{9}" id="cus_phone" maxLength="10" placeholder="" required
                onChange={(e)=>{
                    setCusPhone(e.target.value);
                }}/>
                
            </div>

            {/* for customer email */}
            <div className="form-group">

                <label htmlFor="cus_email">Customer Email</label>
                <input type="email" className="form-control" id="cus_email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="" required
                onChange={(e)=>{
                    setCusEmail(e.target.value);
                }}/>
                
            </div>

            {/* for customer nic */}
            <div className="form-group">

                <label htmlFor="cus_nic">Customer NIC(Ex: XXXXXXXXX(V|v|X|x / XXXXXXXXXXXX)</label>
                <input type="text" className="form-control" id="cus_nic" pattern="[0-9]{9}[x|X|v|V]|[0-9]{12}" placeholder="" required style={{width:"9cm"}}
                onChange={(e)=>{
                    setCusNic(e.target.value);
                }}
                />
                
            </div>

            {/* for required date */}
            <div className="form-group" style={{marginTop:"-2.25cm", marginLeft:"10.2cm"}}>
                <label htmlFor="required_date">Required Date</label>
                <input type="date" className="form-control" id="required_date" placeholder="" required style={{width:"9cm"}}
                onChange={(e)=>{
                    setReqDate(e.target.value);
                }}
                />
                
            </div>
            
            <button type="submit" className="btn btn-primary" style={{marginLeft: "8cm", width: "3cm"}}>Place Order</button>
        
            <br/><br/>
        </form>
        </div>
        </div>
    )

    

}