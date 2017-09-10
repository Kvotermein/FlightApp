import React, { Component } from 'react';
import './App.css';
import { Table, Form, FormGroup, Button, Label, Input, Alert } from 'reactstrap';

import { connect } from 'react-redux';

class TableFlight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error : ''
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

        let flight = {
            id : (this.props.tableStore[0].length+1),
            from : this.props.tableStore.from,
            to : this.props.tableStore.to,
            departureTime : this.props.tableStore.departureTime,
            landingTime : this.props.tableStore.landingTime,
            price : this.props.tableStore.price
        }

        if (flight.from && flight.to && flight.departureTime && flight.landingTime && flight.price) {
                this.props.tableStore[0].push(flight);
                this.props.addFlight()
        }
    }

    handlefromChange(event) {
        this.props.addFrom(event.target.value)
    }

    handletoChange(event) {
        this.props.addTo(event.target.value)
    }

    handledepartureTimeChange(event) {
        this.props.addDepartureTime(event.target.value)
    }

    handlelandingTimeChange(event) {
        this.props.addLandingTime(event.target.value)
    }

    handlepriceChange(event) {
        this.props.addPrice(event.target.value)
    }

generateHeaders(self) {
        var cols = this.props.tableStore[1];

        return cols.map(function(colData) {
            if (colData.key==='to') {
                return <th className='btnFrom' key={colData.key} onClick={() => self.filter(self)}>{colData.label}</th>;
            } else
            return  <th key={colData.key}>{colData.label}</th>;
        });
 };

filter(self){
    let filterT = this.props.tableStore[0]
    filterT.sort(function (a, b) {
      if (a.to > b.to) {
        return 1;
      }
      if (a.to < b.to) {
        return -1;
      }
      return 0;
    });

this.props.addfilter({dataTable: filterT});

}

deleteFly(I,self) {
    let tableState = this.props.tableStore[0];
    tableState.splice(I,1);
    this.props.addDelete();
}

generateRows(self) {
    var cols = this.props.tableStore[1], 
        data = this.props.tableStore[0];

        return data.map(function(item,I) {
            var cells = cols.map(function(colData) {
                if (colData.key==='button') { return <td className='btnClose' onClick={() => self.deleteFly(I,self)}>X</td>}
                else return <td  key={colData.key}>{item[colData.key]}</td>;
            });
            return <tr key={item.id}>{cells}</tr>;
        });	
}

generateInfo(){

    if (this.props.tableStore[0].length === 0) {
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
                    <Input type ='text' placeholder='From' id='From' size="sm" value={this.props.from} onChange={this.handlefromChange}/>
                    <Label for="to" hidden>To</Label>
                    <Input type='text' placeholder='to' id='to' size="sm" value={this.props.to} onChange={this.handletoChange}/>
                    <Label for="DepartureTime" hidden>DepartureTime</Label>
                    <Input type='date' placeholder='departureTime' id='DepartureTime' size="sm" value={this.props.departureTime} onChange={this.handledepartureTimeChange}/>
                    <Label for="landingTime" hidden>landingTime</Label>
                    <Input type='date' placeholder='landingTime' id='landingTime' size="sm" value={this.props.landingTime} onChange={this.handlelandingTimeChange}/>
                    <Label for="price" hidden>price</Label>
                    <Input type='number' placeholder='price' id='price' size="sm" value={this.props.price} onChange={this.handlepriceChange}/>
                </FormGroup>
                    <Button className='form__Login'  outline color='info'>Enter</Button>
            </Form>
            </div>
    );
  }
}
 
export default connect(
  state => ({
    tableStore : state.tableStore
  }),
  dispatch => ({
        addFrom : (fromData) => {
            dispatch({type: 'from', from: fromData})
        },
        addTo : (toData) => {
            dispatch({type: 'to', to: toData})
        },
        addDepartureTime : (departureTimeData) => {
            dispatch({type: 'departureTime', departureTime: departureTimeData})
        },
        addLandingTime : (landingTimeData) => {
            dispatch({type: 'landingTime', landingTime: landingTimeData})
        },
        addPrice : (priceData) => {
            dispatch({type: 'price', price: priceData})
        },
        addfilter : (filterData) => {
            dispatch({type: 'filter', filter: filterData})
        },
        addDelete : (deleteData) => {
            dispatch({type: 'delete'})
        },
        addFlight : (flightData) => {
            dispatch({type: 'flight'})
        }
  })
)(TableFlight);
