import React, { Component } from 'react'
import axios from 'axios';
import jsPDF from 'jspdf';  
import html2canvas from 'html2canvas';

export default class BevOList_pdf extends Component {
    
    constructor(props){
        super(props);
        this.state = {bevOrders: []};
    }


    //generate pdf
    printDocument() {  
        const input = document.getElementById('pdfdiv');  
        html2canvas(input)  
          .then((canvas) => {  
            var imgWidth = 200;  
            var pageHeight = 290;  
            var imgHeight = canvas.height * imgWidth / canvas.width;  
            var heightLeft = imgHeight;  
            const imgData = canvas.toDataURL('image/png');  
            const pdf = new jsPDF('p', 'mm', 'a4')  
            var position = 0;  
            var heightLeft = imgHeight;  
            pdf.addImage(imgData, 'JPEG', 5, position, imgWidth, imgHeight);  
            pdf.save("download.pdf");  
          });  
      }

    componentDidMount(){
        axios.get('http://localhost:8070/beverageOrdering/').then(response=>{
            this.setState({bevOrders: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }
    componentDidUpdate(){
        axios.get('http://localhost:8070/beverageOrdering/').then(response=>{
            this.setState({bevOrders: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    render(){
        console.log(this.state.bevOrders);
        return (
            <div>

                {/* button for download bev order report */}
                <button onClick={this.printDocument} style={{marginTop: "10px", borderRadius:"5px", height: "1cm", marginLeft: "1cm", backgroundColor: "#00b33c"}} variant="contained" color="primary">Download Report</button>

                <div id="pdfdiv">
                
                <h3 style={{marginLeft: "17cm", fontFamily: "fantasy"}}>Beverage Order List</h3>

                {/* creating table */}
                <table className="table table-striped" style={{marginTop:20, marginLeft: "0cm", fontSize:"14px", backgroundColor: "white"}}>
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
                        </tr>
                    </thead>

                    {/* table body */}
                    <tbody>
                        {this.state.bevOrders.map((p, index) =>{
                            return <tr key={index}>
                                <td>{index+1}</td>
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
                                
                            </tr>
                        })}
                    </tbody>

                </table>
                </div>
            </div>
        );
    }
}
