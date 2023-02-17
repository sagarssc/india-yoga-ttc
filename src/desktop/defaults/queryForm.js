import React, { Component } from "react";

export default class QueryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      mobile: '',
      email: '',
      query: ''
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event,key) {
    this.setState({[key]: event.target.value});
  }

  handleSubmit(event) {
    let {name, email, mobile, query} = this.state
    let msg ='Name:  '+name+'\n email: '+email+'\n mobile  :'+mobile+'\n query   :'+query
    alert('A query was submitted: \n'+msg);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label className="label">
          <input type="text" value={this.state.name} placeholder={"Name*"} onChange={(e) => this.handleChange(e, 'name')} className="input"/>
        </label>
        <label className="label">
          <input type="text" value={this.state.mobile} placeholder={"Mobile No*"} onChange={(e) => this.handleChange(e, 'mobile')} className="input"/>
        </label>
        <label className="label">
          <input type="text" value={this.state.email} placeholder={"Email*"} onChange={(e) => this.handleChange(e, 'email')} className="input"/>
        </label>
        <label className="label">
          <textarea type="text" value={this.state.query} placeholder={"Message*"} onChange={(e) => this.handleChange(e, 'query')} className="textarea"/>
        </label>
        <input type="submit" value="Submit" className="label" style={{fontWeight:"700", color:'gold', width:"50%", backgroundColor:"#5c5889", height:"4rem", borderRadius:"2rem", display:"inline-flex", marginBottom:"2%", justifyContent:"center", marginLeft:"4.8%"}}/>
      </form>
    );
  }
}