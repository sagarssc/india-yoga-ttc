
export const social_images = [
  { img: "/facebook.png", url: "https://instagram.com"},
  { img: "/instagram.png", url: "https://instagram.com"},
  { img: "/youtube.png", url: "https://instagram.com"},
  { img: "/tripad.png", url: "https://instagram.com"},
];

export const logo = "url('./icons/logo.png')"

export const contactNo = "+91 9719700541"

export const Contacts = {
  mobile: "+91 9719700541",
  email: "sagarsinghchauhan49@gmail.com",
  googleLocation: "https://goo.gl/maps/WqxFZ2xrK4Jdr8u87",
  emailLink: 'mailto:sagarsinghchauhan49@gmail.com',
  whatsappLink:"https://api.whatsapp.com/send?phone="+contactNo.replace('+','').replace(' ',''),
  address: "Rishikesh Yog Nirvana Upper Tapovan, Balaknath Road, Rishikesh – 249192, India"
}

export const icons = {
  mobile: "url('./icons/call.png')",
  email: "url('./icons/email.png')",
  location: "url('./icons/location.png')"
}

export const contactus = {
  ContactDetails: [
    {icon: icons.mobile, heading:"CALL/WHATSAPP", value: Contacts.mobile, ref: Contacts.whatsappLink},
    {icon: icons.email, heading:"E-MAIL", value: Contacts.email, ref: Contacts.emailLink},
    {icon: icons.location, heading:"LOCATION", value: Contacts.address, ref: Contacts.googleLocation},
  ],
}

export const FooterLinks = {
  logo: logo,
  ql: [
    {text: "Courses", link:"/10-hrs-course"},
    {text: "About Us", link:"/aboutus"},
    {text: "Blog", link:"/blog"},
    {text: "Contact", link:"/contact"},
    {text: "100 Hrs Course", link:"/100-hrs-course"},
    {text: "200 Hrs Course", link:"/200-hrs-course"},
    {text: "300 Hrs Course", link:"/300-hrs-course"},
    {text: "500 Hrs Course", link:"/500-hrs-course"},
    {text: "Online Training", link:"/online-training"},
  ],
  contact: [
    {icon: icons.mobile, heading:"CALL/WHATSAPP", value: Contacts.mobile, ref: Contacts.whatsappLink},
    {icon: icons.email, heading:"E-MAIL", value: Contacts.email, ref: Contacts.emailLink},
    {icon: icons.location, heading:"LOCATION", value: Contacts.address, ref: Contacts.googleLocation},
  ],
  copyright: "Copyright © 2023, India Yoga TTC",
}


export const schdules ={
  100:{
    headers: ["Time", "Class"],
    details:[
      {time:"6:30 AM - 7:30 AM", class: "Shatkarma/Pranayama"},
      {time:"7:00 AM - 8:30 AM", class: "Ashtanga Vinyasa"},
      {time:"8:30 AM - 9:30 AM", class: "Breakfast"},
      {time:"10:30 AM - 11:30 AM", class: "Yoga Philosophy"},
      {time:"11:30 AM - 12:30 PM", class: "Body Alignment"},
      {time:"12:30 PM - 1:30 PM", class: "Anatomy"},
      {time:"1:30 PM - 2:30 PM", class: "Lunch"},
      {time:"4:30 PM - 6:00 PM", class: "Vinyasa Flow"},
      {time:"6:00 PM - 7:00 PM", class: "Meditation"},
      {time:"7:00 PM - 8:00 PM", class: "Dinner"},

    ]
  }
}
