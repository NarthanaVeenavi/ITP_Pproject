import React, { Component } from 'react'
import axios from 'axios';

export default class EditFoodOrder extends Component {

    constructor(props) {
        super(props);

        this.onChangeFoodId = this.onChangeFoodId.bind(this);
        this.onChangeFoodName = this.onChangeFoodName.bind(this);
        this.onChangeFoodType = this.onChangeFoodType.bind(this);
        this.onChangeFoodPackage = this.onChangeFoodPackage.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeUPrice = this.onChangeUPrice.bind(this);
        this.onChangeCusName = this.onChangeCusName.bind(this);
        this.onChangeCusPhone = this.onChangeCusPhone.bind(this);
        this.onChangeCusEmail = this.onChangeCusEmail.bind(this);
        this.onChangeCusNIC = this.onChangeCusNIC.bind(this);
        this.onChangeReqDate = this.onChangeReqDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            food_Id: '',
            food_name: '',
            food_type: '',
            food_package: '',
            quantity: 0,
            unit_price: 0,
            cus_name: '',
            cus_phone: '',
            cus_email: '',
            cus_NIC: '',
            req_date:'',
            total_amount: ''
        };

    }

    componentDidMount(){
        axios.get('http://localhost:8070/foodOrdering/get/' + this.props.match.params.id)
            .then(response =>{
                this.setState({
                    food_Id: response.data.foodOrders.food_Id,
                    food_name: response.data.foodOrders.food_name,
                    food_type: response.data.foodOrders.food_type,
                    food_package: response.data.foodOrders.food_package,
                    quantity: response.data.foodOrders.quantity,
                    unit_price: response.data.foodOrders.unit_price,
                    cus_name: response.data.foodOrders.cus_name,
                    cus_phone: response.data.foodOrders.cus_phone,
                    cus_email: response.data.foodOrders.cus_email,
                    cus_NIC: response.data.foodOrders.cus_NIC,
                    req_date: response.data.foodOrders.req_date,
                    total_amount: response.data.foodOrders.total_amount
                })
            })
            .catch(function(error){
                console.log(error)
            });
    }

    onChangeFoodId(e){
        this.setState({food_Id:e.target.value});
    }
    onChangeFoodName(e){
        this.setState({food_name:e.target.value});
    }
    onChangeFoodType(e){
        this.setState({food_type:e.target.value});
    }
    onChangeFoodPackage(e){
        this.setState({food_package:e.target.value});
    }
    onChangeQuantity(e){
        this.setState({quantity:e.target.value});
    }
    onChangeUPrice(e){
        this.setState({unit_price:e.target.value});
    }
    onChangeCusName(e){
        this.setState({cus_name:e.target.value});
    }
    onChangeCusPhone(e){
        this.setState({cus_phone:e.target.value});
    }
    onChangeCusEmail(e){
        this.setState({cus_email:e.target.value});
    }
    onChangeCusNIC(e){
        this.setState({cus_NIC:e.target.value});
    }
    onChangeReqDate(e){
        this.setState({req_date:e.target.value});
    }


    onSubmit(e){
        e.preventDefault();
        const obj = {
            food_Id: this.state.food_Id,
            food_name: this.state.food_name,
            food_type: this.state.food_type,
            food_package: this.state.food_package,
            quantity: this.state.quantity,
            unit_price: this.state.unit_price,
            cus_name: this.state.cus_name,
            cus_phone: this.state.cus_phone,
            cus_email: this.state.cus_email,
            cus_NIC: this.state.cus_NIC,
            req_date: this.state.req_date
        };

        axios.put("http://localhost:8070/foodOrdering/update/"+this.props.match.params.id, obj)
        .then(res =>console.log(res.data),
        alert("Update Successfully"));

        this.props.history.push('/listFoodOrder');
    }




    render() {
        return(
            <div className="box3">
            <div className="container" style={{marginTop:"1cm",width:"20cm",border: "1px solid black",marginBottom:"2cm", background: "rgba(255,255,255,0.838)", fontSize:"13px", borderRadius: "10px"}}>
             <br/>
            <form onSubmit={this.onSubmit}>

                <div className="form-group">

                    <label htmlFor="food_id">Food Id</label>
                    
                    <input type="text" className="form-control" id="food_id" value={this.state.food_Id} required style={{width:"9cm"}}
                    onChange={this.onChangeFoodId}/>
                    
                </div>

                <div className="form-group" style={{marginTop:"-2.25cm", marginLeft:"10.2cm"}}>

                    <label htmlFor="food_name">Food Name</label>
                    <input type="text" className="form-control" id="food_name" value={this.state.food_name} required style={{width:"9cm"}}
                    onChange={this.onChangeFoodName}/>
                    
                </div>

                <div className="form-group">

                <label htmlFor="food_type">Food Type</label>
                <select className="form-control" id="food-type" placeholder="" value={this.state.food_type} required style={{width:"9cm"}}
                onChange={this.onChangeFoodType}>
                    <option></option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                </select>

                </div>    

                <div className="form-group" style={{marginTop:"-2.25cm", marginLeft:"10.2cm"}}>

                    <label htmlFor="food_package">Food Package</label>
                    <select className="form-control" id="food-package" placeholder="" value={this.state.food_package} required style={{width:"9cm"}} 
                    onChange={this.onChangeFoodPackage}>
                        <option></option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        
                    </select>
                </div>
                    
    
                <div className="form-group">

                    <label htmlFor="no_of_plates">No of Plates/ Items</label>
                    <input type="number" className="form-control" min="1" id="no_of_plates" value={this.state.quantity} required style={{width:"9cm"}}
                    onChange={this.onChangeQuantity}/>
                    
                </div>

                <div className="form-group" style={{marginTop:"-2.25cm", marginLeft:"10.2cm"}}>

                    <label htmlFor="unit_price">Unit Price</label>
                    <input type="number" className="form-control" min="1" id="unit_price" value={this.state.unit_price} required style={{width:"9cm"}}
                    onChange={this.onChangeUPrice}/>
                    
                </div>

                <div className="form-group">

                    <label htmlFor="cus_name">Customer Name</label>
                    <input type="text" className="form-control" id="cus_name" value={this.state.cus_name} required
                    onChange={this.onChangeCusName}/>
                    
                </div>

                <div className="form-group">

                    <label htmlFor="cus_phone">Customer Phone Number</label>
                    <input type="text" className="form-control" pattern="[0][0-9]{9}" id="cus_phone" required value={this.state.cus_phone} 
                    onChange={this.onChangeCusPhone}/>
                    
                </div>

                <div className="form-group">

                    <label htmlFor="cus_email">Customer Email</label>
                    <input type="email" className="form-control" id="cus_email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={this.state.cus_email} required
                    onChange={this.onChangeCusEmail}/>
                    
                </div>

                <div className="form-group">

                    <label htmlFor="cus_nic">Customer NIC</label>
                    <input type="text" className="form-control" id="cus_nic" pattern="[0-9]{9}[x|X|v|V]|[0-9]{12}" value={this.state.cus_NIC} required style={{width:"9cm"}}
                    onChange={this.onChangeCusNIC}
                    />
                    
                </div>

                <div className="form-group" style={{marginTop:"-2.25cm", marginLeft:"10.2cm"}}>

                    <label htmlFor="required_date">Required Date</label>
                    <input type="date" className="form-control" id="required_date" value={this.state.req_date} required style={{width:"9cm"}}
                    onChange={this.onChangeReqDate}
                    />
                    
                </div>

                <button type="submit" className="btn btn-primary" style={{marginLeft: "8cm", width: "3cm"}}>Submit</button>
                <br/><br/>
            </form>
            </div>
            </div>
        )
    }
}
