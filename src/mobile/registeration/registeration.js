import React, { Component } from "react";
import { Circles } from 'react-loader-spinner'
import { submitBookingRequest } from "../../core/request";
import {Loader} from "../../core/loader"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Select from "react-dropdown-select";
import validator from 'validator'
import { CustomPopUp } from "../defaults/popup";
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom';


// import { useHistory } from "react-router-dom";

const RegisterationForm = [
  {
    key:"name",
    label: "Full Name",
    type: "text",
    value: "",
    placeholder: "Full Name",
    error_msg: "Name is required",
    mendatory: true
  },
  {
    key:"email",
    label: "Email Id",
    type: "text",
    value: "",
    placeholder: "example@xyz.com",
    error_msg: "Enter valid Email!",
    mendatory: true
  },
  {
    key:"phone",
    label: "Mobile No.",
    type: "phone",
    value: "",
    placeholder: "Mobile No",
    error_msg: "Mobile No. is required",
    mendatory: true
  },
  {
    key:"whatsapp_phone",
    label: "Whatsapp Number",
    type: "phone",
    value: "",
    placeholder: "Whatsapp No",
    error_msg: "Whatsapp No is required",
    mendatory: true
  },
  {
    key:"gender",
    label: "Gender",
    type: "radio",
    options: ["Male", "Female"],
    value: "",
    placeholder: "gender",
    error_msg: "Gender is required",
    mendatory: true
  },
  {
    key:"course",
    label: "Course",
    type: "dropdown",
    options: [],
    value: [],
    placeholder: "Course",
    error_msg: "Please Select a course",
    mendatory: true
  },
  {
    key:"slot",
    label: "Course Period",
    type: "dropdown",
    options: [],
    value: [],
    placeholder: "Course Period",
    error_msg: "Please Select a slot",
    mendatory: true
  },
  {
    key:"reach",
    label: "How did you hear about us",
    type: "dropdown",
    options: [{value: "instagram",label:"Instagram"}, {value: "fb",label:"Facebook"}, {value: "f&f",label:"Friends and Family"}, {value:"google", label:"Google"}],
    value: [],
    placeholder: "How did you hear about us",
    mendatory: false
  },
]

const CourseCostAndSlot = {
  100: {
    text: "100 Hrs Teacher Training",
    fee: "$499",
    slots: [{value:"April", label:"April 2023 (1st - 12th)"},
            {value:"May", label:"May 2023 (1st - 12th)"},
            {value:"June", label:"June 2023 (1st - 12th)"},
            {value:"July", label:"July 2023 (1st - 12th)"}]
  },
  200: {
    text: "200 Hrs Teacher Training",
    fee: "$599",
    slots: [{value:"April", label:"April 2023 (1st - 18th)"},
    {value:"May", label:"May 2023 (1st - 18th)"},
    {value:"June", label:"June 2023 (1st - 18th)"},
    {value:"July", label:"July 2023 (1st - 18th)"}]
  },
  300: {
    text: "300 Hrs Teacher Training",
    fee: "$699",
    slots: [{value:"April", label:"April 2023 (1st - 22th)"},
    {value:"May", label:"May 2023 (1st - 22th)"},
    {value:"June", label:"June 2023 (1st - 22)"},
    {value:"July", label:"July 2023 (1st - 22th)"}]
  },
  500: {
    text: "500 Hrs Teacher Training",
    fee: "$799",
    slots: [{value:"April", label:"April 2023 (1st - 28th)"},
    {value:"May", label:"May 2023 (1st - 28th)"},
    {value:"June", label:"June 2023 (1st - 28th)"},
    {value:"July", label:"July 2023 (1st - 28th)"}]
  }
}

export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: RegisterationForm,
      loader: false,
      same_as_phone: false,
      fee: "",
      showError: true,
      loader: false,
      popUp: false,
      popUpContent:{mainContent:"", subContent:""},
      redirect: true
      };
  }

  componentDidMount(){
    this.prepareCourseList() 
  }

  updateForm(index, e){
    let {form} = this.state
    let input = form[index]
    if(typeof(e) == "object" && 'target' in e){
      input['value'] = e.target.value
    }
    else{
      input['value'] = e
    }
    form[index] = input
    if(input.key=="course"){
      form = this.updateSlots(e[0].value, form)
      this.updateFee(e[0].value)
    }
    this.setState({form: form})
  }

  updateFee(key){
    let course_slot = CourseCostAndSlot
    let course = course_slot[key]
    this.setState({
      fee: course.fee
    })
  }

  updateSlots(key, form){
    let course_slot = CourseCostAndSlot
    let index = this.getIndexByKey("slot")
    let course = course_slot[key]
    let input = form[index]
    input.value = []
    input.options = course.slots
    form[index] = input
    return form
  }

  prepareCourseList(){
    let course_slot = CourseCostAndSlot
    let {form} = this.state
    let index = this.getIndexByKey("course")
    let input = form[index]
    let hrs = Object.keys(course_slot)
    let courses = []
    hrs.map((hr,index)=>(courses.push({value:hr, label:course_slot[hr].text})))
    input.options = courses
    form[index] = input
    this.setState({
      form: form
    })
  }

  getIndexByKey(key){
    let {form} = this.state
    let input = form.filter(input => input.key == key)[0]
    return form.indexOf(input)
  }

  sameAsPhone(e){
    let {same_as_phone, form} = this.state
    let phoneIndex = this.getIndexByKey("phone")
    let phoneInput = form[phoneIndex]
    let index = this.getIndexByKey("whatsapp_phone")
    let input = form[index]
    same_as_phone = !same_as_phone
    if(same_as_phone){
      input.value = phoneInput.value
    }
    else{
      input.value = ""
    }
    form[index] = input
    this.setState({
      same_as_phone: same_as_phone,
      form: form
    })
  }

  validateForm(){
    let {form} = this.state
    let l = form.length
    let errors = false
    for(let i=0; i < l; i++){
      let input  = form[i]
      if(input.mendatory){
        if(!input.value || (Array.isArray(input.value) && !input.value.length )){
          input.showError = true
          errors = true
        }
        else{
          input.showError = false
          if(input.key=="email"){
            let isValid = validator.isEmail(input.value)
            if(!isValid){
              input.showError = true
              errors = true
            }
          }
        }
        form[i] = input
      }
    }
    if(errors){
      this.setState({
        form:form
      })
      return false
    }
    else{
      return true
    }
  }

  async onSubmit(event){
    event.preventDefault();
    this.setState({loader: true})
    let validate = this.validateForm()
    let {form, popUpContent} = this.state
    let l = form.length
    if(validate){
      let data = {}
      for(let i=0; i<l; i++){
        let input = form[i]
        data[input.key] = input.value
      }
      let res = await submitBookingRequest(data)
      if(res && res.status == "success"){
        popUpContent.mainContent = "Your booking is success. we'll get back to you shortly"
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
  }

  render() {
    let {form, same_as_phone, fee, loader, popUp, popUpContent, redirect} = this.state
    return (
      <div style={{backgroundColor:"#f6f7f8", paddingBottom:"3rem"}}>
        {popUp && <CustomPopUp content={popUpContent} />}
        {loader ? <div><div style={{height:"30rem", position:"fixed", zIndex:"999", width:"100%", backgroundColor:"f4f4f4d1"}}>
            <div style={{marginLeft:"50%", marginTop:"10%", }}>
              <Loader />
            </div>
            </div><div style={{height:"30rem"}}></div></div> :
      <form onSubmit={(e)=>this.onSubmit(e)} className="submit-form2">
        {form.map((input,index)=>(
          <label className="form-label2">
              <div style={{marginTop:"3%", display:"block"}}>
              <div><text style={{margin:"3%", fontSize:"18px"}}>{input.label}:</text></div>
                  { input.key == "whatsapp_phone" && 
                    <div>
                      <input type="checkbox" onChange={(e)=>this.sameAsPhone(e)} checked={same_as_phone}/> Same as Mobile No
                    </div>
                  } 
              </div>
              {input.type == "text" && <input type="text" value={input.value} placeholder={input.placeholder} onChange={(e) => this.updateForm(index, e)} className="register-input2"/>}
              {input.type == "phone" && 
                <PhoneInput
                  country={'us'}
                  value={input.value}
                  onChange={(e) => this.updateForm(index, e)}
                  containerStyle={{height:"3rem", width:"20rem", borderWidth:"0rem", borderBottomWidth:".2rem", borderRadius:"1rem", margin:"2%", marginBottom:"0%"}}
                  inputStyle={{height:"3rem", width:"95%", borderRadius:"1rem", paddingLeft:"4rem", margin:"6%", border:"0.2rem solid grey"}}
                  dropdownStyle={{borderRadius:"1rem", paddingLeft:"0.5rem", margin:"2%"}}
                  buttonStyle={{height:"3rem", width:"20%", borderTopLeftRadius:"1rem", borderBottomLeftRadius:"1rem", paddingLeft:"0.5rem", border:"0.2rem solid grey"}}
                />
              }
            
              {input.type == "radio" && 
                <div style={{margin: "2%", display:"flex"}}>
                  { input.options.map((option, index1) => (
                    <span style={{paddingLeft:"2rem", width:"50%", display:"flex"}}><input style={{height:"1.5rem", width:"40%", borderColor:"grey"}}  type="radio"  name={input.name}  value={option}  checked={input.value == option }  onChange={(option) => this.updateForm(index, option)}/> {option} </span>
                  ))}
                </div>
              }
              {input.type == "dropdown" && 
                  <Select 
                    options={input.options} 
                    values={input.value}
                    onChange={(e) => this.updateForm(index, e)} 
                    multi={false}
                    closeOnSelect = {true}
                    closeOnScroll = {true}
                    dropdownHandle = {true}
                    className = "register-input2"
                    style={{border:"0.2rem solid grey", borderRadius:"1rem", width:"20rem", paddingLeft:"2rem"}}
                  />
              }
            {input.showError && <div><text style={{marginLeft:"3%", fontSize:"12px", color:"red", lineHeight:"0"}}>{input.error_msg} </text></div>}
          </label>
        ))}
        <div style={{display:"block", margin:"3%", paddingTop:"4%", width:"100%"}}>
           <div style={{width:"100%", textAlign:"center", fontSize:"30px", fontWeight:"700", wordSpacing:"25px"}}><text>Fee : {  fee}</text></div>
           <div style={{width:"100%", marginLeft:"15%"}}><input type="submit" value="Book Now" className="label" style={{fontWeight:"700", color:'gold', width:"60%", backgroundColor:"#5c5889", height:"3rem", borderRadius:"2rem", display:"inline-flex", marginBottom:"2%", justifyContent:"center"}}/></div>
        </div>
      </form>
       } 
      </div>
    );
  }
}