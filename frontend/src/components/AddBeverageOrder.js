import React, {useState} from "react";
import axios from 'axios';
import { useHistory } from "react-router";

export default function AddBeverageOrder(){

    const [bev_Id, setBevId] = useState("");
    const [bev_name, setBevName] = useState("");
    const [bev_type, setBevType] = useState("");
    const [quantity, setQuantity] = useState("");
    const [unit_price, setUnitPrice] = useState("");
    const [cus_name, setCusName] = useState("");
    const [cus_phone, setCusPhone] = useState("");
    const [cus_email, setCusEmail] = useState("");
    const [cus_NIC, setCusNic] = useState("");
    const [req_date, setReqDate] = useState("");

    function SendBevOrderData(e){
        e.preventDefault();//execute function body when pressing the submit button without redirecting another file

        const newBeverageOrder ={
            bev_Id, 
            bev_name,
            bev_type,
            quantity,
            unit_price,
            cus_name,
            cus_phone,
            cus_email,
            cus_NIC,
            req_date
    
        }
        
        axios.post("http://localhost:8070/beverageOrdering/add",newBeverageOrder).then(()=>{
            alert("Order Added")

        }).catch((err)=>{
            alert(err)
        })
    }
    
//The input value is copied at the onchange event using the setName function for the variable
    return(

        <div class="box1">
        <div className="container" style={{marginTop:"1cm",width:"20cm",border: "1px solid black",marginBottom:"2cm", background: "rgba(255,255,255,0.838)", fontSize:"13px", borderRadius:"10px"}}>
         <br/>
         <p style={{fontSize:"14px"}}>Ordering Details</p>
        <form onSubmit={SendBevOrderData}>

            {/* for bev Id */}
            <div className="form-group">

                <label htmlFor="bev_id">Beverage Id</label>
                
                <input type="text" className="form-control" id="bev_id" placeholder="" required style={{width:"9cm"}}
                onChange={(e)=>{
                    setBevId(e.target.value);
                }}/>
                
            </div>

             {/* for bev name */}
            <div className="form-group" style={{marginTop:"-2.25cm", marginLeft:"10.2cm"}}>

                <label htmlFor="bev_name">Beverage Name</label>
                <input type="text" className="form-control" id="bev_name" placeholder="" required style={{width:"9cm"}}
                onChange={(e)=>{
                    setBevName(e.target.value);
                }}/>
                
            </div>

             {/* for bev type */}
            <div className="form-group">

                <label htmlFor="bev_type">Beverage Type</label>
                
                <input type="text" className="form-control" id="bev_type" placeholder="" required style={{width:"9cm"}}
                onChange={(e)=>{
                    setBevType(e.target.value);
                }}/>

            </div>    

             {/* for bev quantity */}    
            <div className="form-group" style={{marginTop:"-2.25cm", marginLeft:"10.2cm"}}>

                <label htmlFor="qty">Quantity</label>
                <input type="number" className="form-control" min="1" id="qty" placeholder="" required style={{width:"9cm"}}
                onChange={(e)=>{
                    setQuantity(e.target.value);
                }}/>
                
            </div>

             {/* for bev unit price */}
            <div className="form-group">

                <label htmlFor="unit_price">Unit Price</label>
                <input type="number" min="1" className="form-control" id="unit_price" placeholder="" required
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

            {/* for customer phone number */}
            <div className="form-group">

                <label htmlFor="cus_phone">Customer Phone Number(Ex: 0XXXXXXXXX)</label>
                <input type="text" className="form-control" pattern="[0][0-9]{9}" maxLength="10" id="cus_phone" placeholder="" required
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

                <label htmlFor="cus_nic">Customer NIC(Ex: XXXXXXXXX()V|v|X|x / XXXXXXXXXXXX)</label>
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