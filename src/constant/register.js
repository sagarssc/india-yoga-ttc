export const RegisterationForm = [
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
    key:"phone_number",
    label: "Mobile No.",
    type: "phone",
    value: "",
    placeholder: "Mobile No",
    error_msg: "Mobile No. is required",
    mendatory: true
  },
  {
    key:"whatsapp_number",
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
    key:"batch",
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

export const CourseCostAndSlot = {
  100: {
    text: "100 Hrs Teacher Training",
    fee: "499",
    slots: [{value:"April", label:"April 2023 (1st - 12th)"},
            {value:"May", label:"May 2023 (1st - 12th)"},
            {value:"June", label:"June 2023 (1st - 12th)"},
            {value:"July", label:"July 2023 (1st - 12th)"}]
  },
  200: {
    text: "200 Hrs Teacher Training",
    fee: "599",
    slots: [{value:"April", label:"April 2023 (1st - 18th)"},
    {value:"May", label:"May 2023 (1st - 18th)"},
    {value:"June", label:"June 2023 (1st - 18th)"},
    {value:"July", label:"July 2023 (1st - 18th)"}]
  },
  300: {
    text: "300 Hrs Teacher Training",
    fee: "699",
    slots: [{value:"April", label:"April 2023 (1st - 22th)"},
    {value:"May", label:"May 2023 (1st - 22th)"},
    {value:"June", label:"June 2023 (1st - 22)"},
    {value:"July", label:"July 2023 (1st - 22th)"}]
  },
  500: {
    text: "500 Hrs Teacher Training",
    fee: "799",
    slots: [{value:"April", label:"April 2023 (1st - 28th)"},
    {value:"May", label:"May 2023 (1st - 28th)"},
    {value:"June", label:"June 2023 (1st - 28th)"},
    {value:"July", label:"July 2023 (1st - 28th)"}]
  }
}
