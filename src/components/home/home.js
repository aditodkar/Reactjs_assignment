import React, { Component } from 'react';
import axios from 'axios';
import { Card } from '../card/card';
import { Navbar } from '../navbar/navbar';
import './home.css';


export default class Home extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            shipments: [],
            toggleSort: true
        }
    }
    
    componentDidMount() {
        axios.get(`http://localhost:5000/shipments`)
            .then(res => {
            this.setState({ shipments: res.data });
        })
    }

    toggleSortButton = (key) => {
        if(this.state.toggleSort === false)
            this.setState({ shipments: [...this.state.shipments].sort((a, b) => b[key] - a[key]) });
        else
            this.setState({ shipments: [...this.state.shipments].sort((a, b) => a[key] - b[key]) });
        
        this.setState({toggleSort: !this.state.toggleSort})
    }

    render() {

        return (
            <div>
                <Navbar/>
                <div className="container-fluid">
                    <div className="sortOptions">
                        <button type="button" className="btn btn-primary btn2" onClick={() => this.toggleSortButton('total')}>Sort by Volume</button>
                    </div>
                    <div className="row">
                        {this.state.shipments ? this.state.shipments.map(item => (
                            <div className="col-sm-4 col-md-4" key={item.id}>
                                <Card name={item.name} id={item.id} mode={item.mode} volume={item.total} status={item.status} props={this.props}/>    
                            </div>
                        )) : null}
                    </div>
                </div>
            </div>
        )
    }
}
