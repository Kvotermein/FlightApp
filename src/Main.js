import React, { Component } from 'react';
import './App.css';
import { Table, Form, FormGroup, Button, Label, Input, Alert } from 'reactstrap';

var cols = [
    { key: 'from', label: 'From' },
    { key: 'to', label: 'To' },
    { key: 'departureTime', label: 'DepartureTime' },
    { key: 'landingTime', label: 'LandingTime' },
    { key: 'price', label: 'Price' },
    { key: 'button', label: ''}
];

var data = [
    { id: 1, from: 'Minsk', to: 'Kobrin', departureTime: '11:00', landingTime: '12:00', price: '1$'},
    { id: 2, from: 'Kobrin', to: 'Minsk', departureTime: '13:00', landingTime: '14:00', price: '1$'},
    { id: 3, from: 'Brest', to: 'Addis Ababa', departureTime: '4:00', landingTime: '13:00', price: '1$'},

];

class TableFlight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataTable: data,
            id: '',
            from:'',
            to : '',
            departureTime:'',
            landingTime: '',
            price:''
        };

        this.handlefromChange = this.handlefromChange.bind(this);
        this.handletoChange = this.handletoChange.bind(this);
        this.handledepartureTimeChange = this.handledepartureTimeChange.bind(this);
        this.handlelandingTimeChange = this.handlelandingTimeChange.bind(this);
        this.handlepriceChange = this.handlepriceChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({id:data.length+1})
        data.push(this.state);
    }

    handlefromChange(event) {
        this.setState({from : event.target.value});
    }

    handletoChange(event) {
        this.setState({to : event.target.value});
    }

    handledepartureTimeChange(event) {
        this.setState({departureTime : event.target.value});
    }

    handlelandingTimeChange(event) {
        this.setState({landingTime : event.target.value});
    }

    handlepriceChange(event) {
        this.setState({price : event.target.value});
    }

generateHeaders(self) {

        var cols = this.props.cols;

        return cols.map(function(colData) {
            if (colData.key==='from') {
                return <th className='btnFrom' key={colData.key} onClick={() => self.filter(self)}>{colData.label}</th>;
            } else
            return  <th key={colData.key}>{colData.label}</th>;
        });
 };

filter(self){
    data.sort(function (a, b) {
      if (a.from > b.from) {
        return 1;
      }
      if (a.from < b.from) {
        return -1;
      }
      return 0;
    });

self.setState({dataTable: data});

}

deleteFly(I,self) {

    data.splice(I,1);
    self.setState({dataTable: data});

}

generateRows(self) {
    var cols = this.props.cols, 
        data = this.state.dataTable;

        return data.map(function(item,I) {
            var cells = cols.map(function(colData) {
                if (colData.key==='button') { return <td className='btnClose' onClick={() => self.deleteFly(I,self)}>X</td>}
                else return <td  key={colData.key}>{item[colData.key]}</td>;
            });
            return <tr key={item.id}>{cells}</tr>;
        });	
}

generateInfo(){

    if (data.length === 0) {
        return <Alert color='info'>No flights listed</Alert>
    }

}

  render() {
        var headerComponents = this.generateHeaders(this),
            rowComponents = this.generateRows(this),
            generateInfo = this.generateInfo(this);
            
    return (
            <div>
            <Table striped bordered condensed hover >
                <thead><tr>{headerComponents}</tr></thead>
                <tbody>{rowComponents}</tbody>
            </Table>
            <div>{generateInfo}</div>
            <Form onSubmit={this.handleSubmit} className='form__Login'>
                <FormGroup>
                    <Label for="From" hidden>From</Label>
                    <Input type ='text' placeholder='From' id='From' size="sm" value={this.state.from} onChange={this.handlefromChange}/>
                    <Label for="to" hidden>To</Label>
                    <Input type='text' placeholder='to' id='to' size="sm" value={this.state.to} onChange={this.handletoChange}/>
                    <Label for="DepartureTime" hidden>DepartureTime</Label>
                    <Input type='text' placeholder='departureTime' id='DepartureTime' size="sm" value={this.state.departureTime} onChange={this.handledepartureTimeChange}/>
                    <Label for="landingTime" hidden>landingTime</Label>
                    <Input type='text' placeholder='landingTime' id='landingTime' size="sm" value={this.state.landingTime} onChange={this.handlelandingTimeChange}/>
                    <Label for="price" hidden>price</Label>
                    <Input type='text' placeholder='price' id='price' size="sm" value={this.state.price} onChange={this.handlepriceChange}/>
                </FormGroup>
                    <Button className='form__Login'  outline color='info'>Enter</Button>
            </Form>
            </div>
    );
  }
}

class Main extends Component {
 	render () {
 		return (
            <div>
 			    <TableFlight cols={cols} data={data}/>
            </div>
 		);
 	}
 }
 
export default Main