import React, { Component } from 'react'
import axios from 'axios';

export default class FoodOrderDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            food: {}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8070/foodOrdering/get/${id}`).then((response) => {
            this.setState({food: response.data.foodOrders});

            console.log(this.state.food);
        });

    }

    render() {

        const {id,food_Id, food_name, food_type, food_package, quantity, unit_price, cus_name, cus_phone, cus_email, cus_NIC, total_amount, req_date} = this.state.food;

        return (
            <div className="box5">

            <div style={{marginTop: "1.5cm",marginLeft: "3.5cm", background: "#EEE", borderRadius: "10px", width: "34cm", border: "1px solid black", padding: "0.5cm"}}>   

                <h6 style={{marginLeft: "1cm"}}>Order ID : &nbsp;&nbsp;&nbsp;{this.props.match.params.id}</h6>
                <hr/>

                <div id="invoice-POS">

                    <center id="top">
                        <div className="logo"></div>
                        <div className="info">
                            <h1 style={{marginLeft: "1cm"}}>Creston Park</h1>
                        </div>
                    </center>

                    <br/>
                    <div id="mid">
                        <div className="info">
                            <h5>Contact Info</h5>
                            <p className="para"> 
                                Cus Name : {cus_name} <br/>
                                NIC     : {cus_NIC} <br/>
                                Email   : {cus_email}<br/>
                                Phone   : {cus_phone}<br/>
                            </p>
                        </div>
                    </div>

                    <br></br>
                    <div id="bot">

					<div id="table-re">
						<table style={{border: "1px solid black", width:"32.5cm"}}>
							<tr className="tabletitle">
                                <td className="item">Item Code</td>
								<td className="item">Item</td>
                                <td className="item">Food Type</td>
                                <td className="item">Food Package</td>
								<td className="item">Quantity</td>
                                <td className="item">U_Price</td>
								<td className="item">Sub Total</td>
                                <td className="item">Required Date</td>
							</tr>

							<tr className="service">
                                <td className="tableitem"><p className="itemtext">{food_Id}</p></td>
								<td className="tableitem"><p className="itemtext">{food_name}</p></td>
                                <td className="tableitem"><p className="itemtext">{food_type}</p></td>
                                <td className="tableitem"><p className="itemtext">{food_package}</p></td>
								<td className="tableitem"><p className="itemtext">{quantity}</p></td>
								<td className="tableitem"><p className="itemtext">{unit_price}.00</p></td>
                                <td className="tableitem"><p className="itemtext">{total_amount}.00</p></td>
                                <td className="tableitem"><p className="itemtext">{req_date}</p></td>
							</tr>

							

						</table>
					</div>

					<div id="legalcopy">
						<p className="legal">Creston Park - Anuradhapura 
						</p>
					</div>

				</div>

                </div>

            </div>    
            </div>
        )
    }
}
