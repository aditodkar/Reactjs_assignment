import React, { Component } from 'react';
import axios from 'axios';
import './shipmentDetails.css';


const TableRow = ({index, type, description, volume}) => (
    <tr>
        <th scope="row">{index}</th>
        <td>{type}</td>
        <td>{description}</td>
        <td>{volume}</td>
    </tr>
)

export default class ShipmentDetails extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            details: []
        }
    }
    
    componentDidMount(){
        const shipmentId = this.props.match.params.id;

        axios.get(`http://localhost:5000/shipments/${shipmentId}`)
            .then(res => {
            this.setState({ details: res.data });
        })
    }

    render() {
        console.log("url: ", this.props.match.params.id);
        console.log("cargo", this.state.details.cargo)

        return (
            <div className="rootContainer">
                <div class="container-fluid">
                    <div class="row">
                    <h3>Cargo Details:</h3>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Sr.no</th>
                                <th scope="col">Type</th>
                                <th scope="col">Description</th>
                                <th scope="col">Volume</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.details && this.state.details.cargo ? this.state.details.cargo.map((item, index) => (
                                    <TableRow index={index} type={item.type} description={item.description} volume={item.volume}/>
                                )) : null
                            }
                        </tbody>
                        </table>
                        <button type="button" class="btn btn-primary" onClick={() => this.props.history.push(`/`)}>Go Back</button>
                    </div>
                </div>
        </div>
        )
    }
}
