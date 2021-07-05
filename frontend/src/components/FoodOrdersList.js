import React, {Component} from 'react';
import axios from 'axios';


export default class allFoodOrders extends Component {

    constructor(props){
        super(props);
        this.state = {foodOrders: []};
    }

    componentDidMount(){
        axios.get('http://localhost:8070/foodOrdering/').then(response=>{
            this.setState({foodOrders: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    // componentDidUpdate(){
    //     axios.get('http://localhost:8070/foodOrdering/').then(response=>{
    //         this.setState({foodOrders: response.data})
    //     }).catch(function (error){
    //         console.log(error);
    //     })
    // }

    onDelete=(id) =>{
        axios.delete(`http://localhost:8070/foodOrdering/delete/${id}`).then((res)=>{
            alert("Delete Successfully");

        })
    }

    // filterData(foodOrders, searchKey){
    //     foodOrders =this.state.foodOrders;
    //     const result = foodOrders.filter((foodOrders)=>
    //     foodOrders.cus_name.toLowerCase().includes(searchKey
    //     ))
    //     this.setState({ foodOrders:result })
    // }

    // handleSearchArea = (e)=>{
    //     const searchKey = e.currentTarget.value;
    //     axios.get('http://localhost:8070/foodOrdering/').then(res=>{
    //         this.filterData(res.data.foodOrders, searchKey)
    //     })
    // }

    filterData(foodOrders, searchKey){
        const result = foodOrders.filter((food)=>
        food.cus_name.toLowerCase().includes(searchKey
        ) || 
        food.cus_email.toLowerCase().includes(searchKey) ||
        food.req_date.toLowerCase().includes(searchKey) ||
        food.cus_name.toUpperCase().includes(searchKey)||
        food.cus_name.includes(searchKey)
        )
        this.setState({ foodOrders:result })
    }

    handleSearchArea = (e)=>{
        const searchKey = e.currentTarget.value;
        axios.get('http://localhost:8070/foodOrdering/').then(res=>{
            this.filterData(res.data, searchKey)
        })
    }


    

    render(){
        console.log(this.state.foodOrders);
        return (
            <div>
                <div>
                <a className="btn btn-success" href="/pdfGenerate" style={{marginTop: "5px", marginLeft: "5px"}}>
                    <i className="fa fa-file-o"></i>&nbsp;Generate PDF
                </a>
                    <input className="form-control" type="search" placeholder="Search.." name="searchQuery" style={{width:"7cm", marginLeft:"33.5cm", marginTop:"-1cm"}} onChange={this.handleSearchArea}/>
                </div>
                <table className="table table-striped" id="pdfdiv" style={{marginTop:20, fontSize:"14px", backgroundColor: "white"}}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food_Id</th>
                            <th>Food_name</th>
                            <th>Food_type</th>
                            <th>Food_pack</th>
                            <th>Qty</th>
                            <th>U_Price(Rs.)</th>
                            <th>Cus_name</th>
                            <th>Cus_Phone</th>
                            <th>Cus_email</th>
                            <th>Cus_NIC</th>
                            <th>TotAmount(Rs.)</th>
                            <th>Date</th>
                            <th>Actions</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.foodOrders.map((p, index)=>{
                            return <tr key={index}>
                                <td>
                                    <a href={`/food/${p._id}`} style={{textDecoration:"none"}}>
                                        {index+1}
                                    </a> 
                                </td>       
                                <td>
                                    {p.food_Id}
                                </td>
                                <td>{p.food_name}</td>
                                <td>{p.food_type}</td>
                                <td>{p.food_package}</td>
                                <td>{p.quantity}</td>
                                <td>{p.unit_price}</td>
                                <td>{p.cus_name}</td>
                                <td>{p.cus_phone}</td>
                                <td>{p.cus_email}</td>
                                <td>{p.cus_NIC}</td>
                                <td>{p.total_amount}</td>
                                <td>{p.req_date}</td>
                                <td>
                                    <a className="btn btn-warning" href={`/updateFood/${p._id}`}>
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