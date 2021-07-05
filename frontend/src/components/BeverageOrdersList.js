import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';




export default class allBevOrders extends Component {

    constructor(props){
        super(props);
        this.state = {bevOrders: []};
    }


    componentDidMount(){
        axios.get('http://localhost:8070/beverageOrdering/').then(response=>{
            this.setState({bevOrders: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    onDelete=(id) =>{
        axios.delete(`http://localhost:8070/beverageOrdering/delete/${id}`).then((res)=>{
            alert("Delete Successfully");
            
        })
    }

    //methos for search function
    filterData(bevOrders, searchKey){
        const result = bevOrders.filter((bev)=>
        bev.cus_name.toLowerCase().includes(searchKey) ||
        bev.cus_name.includes(searchKey) ||
        bev.cus_name.toUpperCase().includes(searchKey) ||
        bev.cus_email.includes(searchKey) ||
        bev.req_date.includes(searchKey)
        )
        this.setState({ bevOrders:result })
    }

    handleSearchArea = (e)=>{
        const searchKey = e.currentTarget.value;
        axios.get('http://localhost:8070/beverageOrdering/').then(res=>{
            this.filterData(res.data, searchKey)
        })
    }


    render(){
        console.log(this.state.bevOrders);
        return (
            <div>

                {/* button to navigate beverage order report */}
                <a className="btn btn-success" href="/pdfGenerateBev" style={{marginTop: "5px", marginLeft: "5px"}}>
                    <i className="fa fa-file-o"></i>&nbsp;Generate PDF
                </a>

                {/* search bar */}
                <input className="form-control" type="search" placeholder="Search.." name="searchQuery" style={{width:"7cm", marginLeft:"33.5cm", marginTop:"-1cm"}} onChange={this.handleSearchArea}></input>

                {/* creating table */}
                <table className="table table-striped" id="pdfdiv" style={{marginTop:20, marginLeft: "0cm", fontSize:"14px", backgroundColor: "white"}}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Bev_Id</th>
                            <th>Bev_name</th>
                            <th>Bev_type</th>
                            <th>Qty</th>
                            <th>U_Price(Rs.)</th>
                            <th>Cus_name</th>
                            <th>Cus_Phone</th>
                            <th>Cus_email</th>
                            <th>Cus_NIC</th>
                            <th>TotAmount(Rs.)</th>
                            <th>Required Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    {/* table body */}
                    <tbody>
                        {this.state.bevOrders.map((p, index) =>{
                            return <tr key={index}>
                                <td>
                                    <a href={`/bev/${p._id}`} style={{textDecoration:"none"}}>
                                        {index+1}
                                    </a> 
                                </td>
                                <td>{p.bev_Id}</td>
                                <td>{p.bev_name}</td>
                                <td>{p.bev_type}</td>
                                <td>{p.quantity}</td>
                                <td>{p.unit_price}</td>
                                <td>{p.cus_name}</td>
                                <td>{p.cus_phone}</td>
                                <td>{p.cus_email}</td>
                                <td>{p.cus_NIC}</td>
                                <td>{p.total_amount}</td>
                                <td>{p.req_date}</td>
                                <td>
                                    <a className="btn btn-warning" href={`/updateBev/${p._id}`}>
                                        <i className="fa fa-edit"></i>&nbsp;Edit
                                    </a>
                                    &nbsp;
                                    <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(p._id)}>
                                        <i className="fa fa-trash"></i>&nbsp;Delete
                                    </a>
                                </td>
                            </tr>
                        })}
                    </tbody>

                </table>
            </div>
        );
    }
}