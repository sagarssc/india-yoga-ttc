// import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import { Circles } from "react-loader-spinner";
import { submitBookingRequest, onSuccess } from "../../core/request";
import Loader from "../../core/loader";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import ReactSelect from "react-select";
import validator from "validator";
import { CustomPopUp } from "../defaults/popup";
import { RegisterationForm, CourseCostAndSlot } from "../../constant/register";
import Razorpay from "razorpay";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

function RegistrationForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState(RegisterationForm);
  const [fee, setFee] = useState("");
  const [showError, setShowError] = useState(true);
  const [loader, setLoader] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [popUpContent, setPopUpContent] = useState({
    mainContent: "",
    subContent: "",
  });
  const [redirect, setRedirect] = useState(true);
  const [same_as_phone, setSameAsPhone] = useState(false);

  useEffect(() => {
    prepareCourseList();
  }, []);

  const updateForm = (index, e) => {
    let newForm = [...form];
    let input = newForm[index];
    input.value = typeof e === "object" && "target" in e ? e.target.value : e;
    newForm[index] = input;
    if (input.key === "course") {
      newForm = updateSlots(e.value, newForm);
      updateFee(e.value);
    }
    setForm(newForm);
  };

  const updateFee = (key) => {
    const course_slot = CourseCostAndSlot;
    const course = course_slot[key];
    setFee(course.fee);
  };

  const updateSlots = (key, form) => {
    let course_slot = CourseCostAndSlot;
    let index = getIndexByKey(form, "batch");
    let course = course_slot[key];
    let input = form[index];
    input.value = [];
    input.options = course.slots;
    form[index] = input;
    return form;
  };

  const prepareCourseList = () => {
    let course_slot = CourseCostAndSlot;
    const newForm = [...form];
    let index = getIndexByKey(newForm, "course");
    let input = newForm[index];
    let hrs = Object.keys(course_slot);
    let courses = [];
    hrs.map((hr, index) =>
      courses.push({ value: hr, label: course_slot[hr].text })
    );
    input.options = courses;
    newForm[index] = input;
    setForm(newForm);
  };

  const getIndexByKey = (newForm, key) => {
    // const newForm = [...form];
    let input = newForm.filter((input) => input.key == key)[0];
    return newForm.indexOf(input);
  };

  const sameAsPhone = (e) => {
    // const { same_as_phone, form } = state;
    const newForm = [...form];
    const phoneIndex = getIndexByKey(newForm, "phone_number");
    const phoneInput = newForm[phoneIndex];
    const index = getIndexByKey(newForm, "whatsapp_number");
    let input = newForm[index];
    const newSameAsPhone = !same_as_phone;
    if (newSameAsPhone) {
      input = { ...input, value: phoneInput.value };
    } else {
      input = { ...input, value: "" };
    }
    newForm[index] = input;
    setSameAsPhone(newSameAsPhone);
    setForm(newForm);
  };

  const loadRazorpay = async () => {
    const res = await fetch("https://checkout.razorpay.com/v1/checkout.js");
    const scriptContent = await res.text();
    eval(scriptContent);
  };

  const validateForm = () => {
    const newForm = [...form];
    let l = newForm.length;
    let errors = false;
    for (let i = 0; i < l; i++) {
      let input = newForm[i];
      if (input.mendatory) {
        if (
          !input.value ||
          (Array.isArray(input.value) && !input.value.length)
        ) {
          input.showError = true;
          errors = true;
        } else {
          input.showError = false;
          if (input.key == "email") {
            let isValid = validator.isEmail(input.value);
            if (!isValid) {
              input.showError = true;
              errors = true;
            }
          }
        }
        newForm[i] = input;
      }
    }
    if (errors) {
      setForm(newForm);
      return false;
    } else {
      return true;
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);
    const validate = validateForm();
    const l = form.length;
    if (validate) {
      let data = {};
      for (let i = 0; i < l; i++) {
        let input = form[i];
        if (typeof input.value == "object") {
          data[input.key] = input.value.value;
        } else {
          if (input.key == "gender") {
            data[input.key] = input.value[0];
          } else {
            data[input.key] = input.value;
          }
        }
      }
      data["amount"] = parseInt(fee) * 100;
      const res = await submitBookingRequest(data);
      console.log(res);
      if ( res && res.status=="success") {
        const options = {
          name: "India Yoga TTC",
          description: "Payment for your Booking",
          order_id: res.order_id,
          handler: async function (response) {
            console.log(response);
            response["registeration_id"] = res.registration_id
            const res1 = await onSuccess(response);
            if(res1["status"] == "success"){
              console.log(res1);
              navigate("/success");
            }
            else{
              console.log("failded on success",res1);
              navigate("/error");
            }
          },
          modal: {
            ondismiss: function(){
              console.log("failded on payment cancelled");
              navigate("/payment-cancelled");
            }
          },
          prefill: {
            name: data['name'],
            email: data['email'],
            contact: data['phone_number'],
          },
          theme: {
            color: "green",
          },
        };
        loadRazorpay().then(() => {
          const rzp1 = new window.Razorpay(options);
          rzp1.open();
        });
      } else {
        console.log("failded from server");
        navigate("/error");
      }
    } else {
      setLoader(false);
    }
  };
  return (
    <div style={{ backgroundColor: "#f6f7f8", paddingBottom: "3rem" }}>
      {popUp && <CustomPopUp content={popUpContent} />}
      {loader ? (
        <div>
          <div
            style={{
              height: "30rem",
              position: "fixed",
              zIndex: "999",
              width: "100%",
              backgroundColor: "f4f4f4d1",
            }}
          >
            <div style={{ marginLeft: "50%", marginTop: "10%" }}>
              <Loader />
            </div>
          </div>
          <div style={{ height: "30rem" }}></div>
        </div>
      ) : (
        <form onSubmit={(e) => onSubmit(e)} className="submit-form">
          {form.map((input, index) => (
            <label className="form-label">
              <div style={{ marginTop: "3%" }}>
                <text style={{ margin: "3%", fontSize: "18px" }}>
                  {input.label}:
                </text>
                {input.key == "whatsapp_number" && (
                  <span>
                    <input
                      type="checkbox"
                      onChange={(e) => sameAsPhone(e)}
                      checked={same_as_phone}
                    />{" "}
                    Same as Mobile No
                  </span>
                )}
              </div>
              {input.type == "text" && (
                <input
                  type="text"
                  value={input.value}
                  placeholder={input.placeholder}
                  onChange={(e) => updateForm(index, e)}
                  className="register-input"
                />
              )}
              {input.type == "phone" && (
                <PhoneInput
                  country={"us"}
                  value={input.value}
                  onChange={(e) => updateForm(index, e)}
                  containerStyle={{
                    height: "3rem",
                    width: "30rem",
                    borderWidth: "0rem",
                    borderBottomWidth: ".2rem",
                    borderRadius: "1rem",
                    margin: "2%",
                    marginBottom: "0%",
                  }}
                  inputStyle={{
                    height: "3rem",
                    width: "95%",
                    borderRadius: "1rem",
                    paddingLeft: "6rem",
                    margin: "6%",
                    border: "0.2rem solid grey",
                  }}
                  dropdownStyle={{
                    borderRadius: "1rem",
                    paddingLeft: "2.5rem",
                    margin: "2%",
                  }}
                  buttonStyle={{
                    height: "3rem",
                    width: "20%",
                    borderTopLeftRadius: "1rem",
                    borderBottomLeftRadius: "1rem",
                    paddingLeft: "2.5rem",
                    border: "0.2rem solid grey",
                  }}
                />
              )}

              {input.type == "radio" && (
                <div style={{ margin: "2%", display: "flex" }}>
                  {input.options.map((option, index1) => (
                    <span
                      style={{
                        paddingLeft: "2rem",
                        width: "50%",
                        display: "flex",
                      }}
                    >
                      <input
                        style={{
                          height: "1.5rem",
                          width: "40%",
                          borderColor: "grey",
                        }}
                        type="radio"
                        name={input.name}
                        value={option}
                        checked={input.value == option}
                        onChange={(option) => updateForm(index, option)}
                      />{" "}
                      {option}{" "}
                    </span>
                  ))}
                </div>
              )}
              {input.type == "dropdown" && (
                <ReactSelect
                  options={input.options}
                  value={input.value}
                  onChange={(e) => updateForm(index, e)}
                  // isMulti={false}
                  // isClearable={true}
                  // closeMenuOnSelect = {true}
                  // menuShouldScrollIntoView = {true}
                  // menuIsOpen = {false}
                  // // className = "register-input"
                  // onBlur={() => this.setState({ forceUpdate: !this.state.forceUpdate })}
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      border: "0.2rem solid grey",
                      borderRadius: "1rem",
                      width: "30rem",
                      paddingLeft: "2rem",
                    }),
                  }}
                />
              )}
              {input.showError && (
                <div>
                  <text
                    style={{
                      marginLeft: "3%",
                      fontSize: "12px",
                      color: "red",
                      lineHeight: "0",
                    }}
                  >
                    {input.error_msg}{" "}
                  </text>
                </div>
              )}
            </label>
          ))}
          <div
            style={{
              display: "flex",
              margin: "3%",
              paddingTop: "4%",
              width: "100%",
            }}
          >
            <div
              style={{
                width: "50%",
                textAlign: "center",
                fontSize: "30px",
                fontWeight: "700",
                wordSpacing: "25px",
              }}
            >
              <text>Fee : ${fee}</text>
            </div>
            <div style={{ width: "50%", marginLeft: "30%" }}>
              <input
                type="submit"
                value="Book Now"
                className="label"
                style={{
                  fontWeight: "700",
                  color: "gold",
                  width: "75%",
                  backgroundColor: "#5c5889",
                  height: "3rem",
                  borderRadius: "2rem",
                  display: "inline-flex",
                  marginBottom: "2%",
                  justifyContent: "center",
                }}
              />
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default RegistrationForm;
