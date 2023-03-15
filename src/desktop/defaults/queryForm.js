import React, { Component } from "react";
import { Circles } from 'react-loader-spinner'
import { submitQuery } from "../../core/request";
import {Loader} from "../../core/loader"
import { CustomPopUp } from "../defaults/popup";

export default class QueryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      mobile: '',
      email: '',
      query: '',
      loader: false,
      popUp: false,
      popUpContent: {mainContent:"", subContent:""},
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event,key) {
    this.setState({[key]: event.target.value});
  }

  resetFields(){
    this.setState({
      name: '',
      mobile: '',
      email: '',
      query: '',
    })
  }

 async handleSubmit(event) {
    let {name, email, mobile, query, loader, popUpContent} = this.state
    this.setState({loader: true})
    let errors = []
    if(!name || name == ""){
      errors.push("Missing required field name");
    }
    if(!email || email == ""){
      errors.push("Missing required field email");
    }
    if(!mobile || mobile == ""){
      errors.push("Missing required field phone no");
    }
    if(!query || query == ""){
      errors.push("Missing required field Query");
    }
    if(errors.length > 0){
      let msg = errors.join("\n")
      alert('Missing Fields: \n'+msg);
    }
    else{
      let data = {}
      data["name"] = name
      data["email"] = email
      data["phone"] = mobile
      data["query"] = query
      let res = await submitQuery(data)
      if(res && res.status == "success"){
        popUpContent.mainContent = "Your query is submitted successfully. we'll get back to you shortly"
        popUpContent.subContent = "you will be redirected to home page now."
        this.setState({
          popUpContent: popUpContent,
          popUp: true
        })
        this.setState({loader: false})
      }
      else{
        popUpContent.mainContent = "We are unable to prcoess your request at this moment."
        popUpContent.subContent = "please try after some time"
        this.setState({
          popUpContent: popUpContent,
          popUp: true
        })
        this.setState({loader: false})
      }
    }
    this.setState({loader: false})
    event.preventDefault();
  }

  render() {
    let {loader, popUp, popUpContent} = this.state
    return (
      <div>{popUp && <CustomPopUp content={popUpContent} />}
        {loader ? <div style={{marginLeft:"50%"}}><Loader /></div> :
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
      </form>}</div>
    );
  }
}