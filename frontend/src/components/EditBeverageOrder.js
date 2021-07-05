import React, { Component } from 'react';
import axios from 'axios';

export default class EditBeverageOrder extends Component {

    constructor(props) {
        super(props);

        this.onChangeBevId = this.onChangeBevId.bind(this);
        this.onChangeBevName = this.onChangeBevName.bind(this);
        this.onChangeBevType = this.onChangeBevType.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeUPrice = this.onChangeUPrice.bind(this);
        this.onChangeCusName = this.onChangeCusName.bind(this);
        this.onChangeCusPhone = this.onChangeCusPhone.bind(this);
        this.onChangeCusEmail = this.onChangeCusEmail.bind(this);
        this.onChangeCusNIC = this.onChangeCusNIC.bind(this);
        this.onChangeReqDate = this.onChangeReqDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            bev_Id: '',
            bev_name: '',
            bev_type: '',
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
        axios.get('http://localhost:8070/beverageOrdering/get/' + this.props.match.params.id)
            .then(response =>{
                this.setState({
                    bev_Id: response.data.beverageOrders.bev_Id,
                    bev_name: response.data.beverageOrders.bev_name,
                    bev_type: response.data.beverageOrders.bev_type,
                    quantity: response.data.beverageOrders.quantity,
                    unit_price: response.data.beverageOrders.unit_price,
                    cus_name: response.data.beverageOrders.cus_name,
                    cus_phone: response.data.beverageOrders.cus_phone,
                    cus_email: response.data.beverageOrders.cus_email,
                    cus_NIC: response.data.beverageOrders.cus_NIC,
                    req_date: response.data.beverageOrders.req_date,
                    total_amount: response.data.beverageOrders.total_amount
                })
            })
            .catch(function(error){
                console.log(error)
            });
    }

    onChangeBevId(e){
        this.setState({bev_Id:e.target.value});
    }
    onChangeBevName(e){
        this.setState({bev_name:e.target.value});
    }
    onChangeBevType(e){
        this.setState({bev_type:e.target.value});
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
            bev_Id: this.state.bev_Id,
            bev_name: this.state.bev_name,
            bev_type: this.state.bev_type,
            quantity: this.state.quantity,
            unit_price: this.state.unit_price,
            cus_name: this.state.cus_name,
            cus_phone: this.state.cus_phone,
            cus_email: this.state.cus_email,
            cus_NIC: this.state.cus_NIC,
            req_date: this.state.req_date
        };

        axios.put("http://localhost:8070/beverageOrdering/update/"+this.props.match.params.id, obj)
        .then(res =>console.log(res.data),
        alert("Update Successfully"));

        this.props.history.push('/listBeverageOrder');
    }





    render() {
        return(
            <div className="box2">
            <div className="container" style={{marginTop:"1cm",width:"20cm",border: "1px solid black",marginBottom:"2cm", background: "rgba(255,255,255,0.838)", fontSize:"13px", borderRadius:"10px"}}>
             <br/>
            <form onSubmit={this.onSubmit}>

                <div className="form-group">

                    <label htmlFor="bev_id">Beverage Id</label>
                    
                    <input type="text" className="form-control" id="bev_id" value={this.state.bev_Id} required style={{width:"9cm"}}
                    onChange={this.onChangeBevId}/>
                    
                </div>

                <div className="form-group" style={{marginTop:"-2.25cm", marginLeft:"10.2cm"}}>

                    <label htmlFor="bev_name">Beverage Name</label>
                    <input type="text" className="form-control" id="bev_name" value={this.state.bev_name} required style={{width:"9cm"}}
                    onChange={this.onChangeBevName}/>
                    
                </div>

                <div className="form-group">

                    <label htmlFor="bev_type">Beverage Type</label>
                    
                    <input type="text" className="form-control" id="bev_type" value={this.state.bev_type} required style={{width:"9cm"}}
                    onChange={this.onChangeBevType}/>
                </div>    
    
                <div className="form-group" style={{marginTop:"-2.25cm", marginLeft:"10.2cm"}}> 

                    <label htmlFor="qty">Quantity</label>
                    <input type="number" className="form-control" min="1" id="qty" value={this.state.quantity} required style={{width:"9cm"}}
                    onChange={this.onChangeQuantity}/>
                    
                </div>

                <div className="form-group">

                    <label htmlFor="unit_price">Unit Price</label>
                    <input type="number" className="form-control" min="1" id="unit_price" value={this.state.unit_price} required
                    onChange={this.onChangeUPrice}/>
                    
                </div>

                <div className="form-group">

                    <label htmlFor="cus_name">Customer Name</label>
                    <input type="text" className="form-control" id="cus_name" value={this.state.cus_name} required
                    onChange={this.onChangeCusName}/>
                    
                </div>

                <div className="form-group">

                    <label htmlFor="cus_phone">Customer Phone Number(Ex: 0XXXXXXXXX)</label>
                    <input type="text" className="form-control" pattern="[0][0-9]{9}" maxLength="10" id="cus_phone" value={this.state.cus_phone} required
                    onChange={this.onChangeCusPhone}/>
                    
                </div>

                <div className="form-group">

                    <label htmlFor="cus_email">Customer Email</label>
                    <input type="email" className="form-control" id="cus_email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={this.state.cus_email} required
                    onChange={this.onChangeCusEmail}/>
                    
                </div>

                <div className="form-group">

                    <label htmlFor="cus_nic">Customer NIC(Ex: XXXXXXXXX(V|v|X|x)/ XXXXXXXXXXXX)</label>
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
