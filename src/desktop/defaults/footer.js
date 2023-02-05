import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {FooterLinks, icons} from "../../constant"

const titles = ["Courses", "About Us", "Blog", "Contact" ]

const social_images = [
  { img: "/facebook.png"},
  { img: "/instagram.png"},
  { img: "/youtube.png"},
];

export default class Footer extends Component {
    render() {
      let footer = FooterLinks
        return (
          <nav className="footer">
            <hr style={{ boxShadow:"0 1rem 4px 0 rgb(0 0 0 / 64%)"}}/>
            <div className="nav-container">
              <div style={{display:"block", width:"30%", paddingTop:"1rem"}}>
                <Link to="/" className="link"><div style={{width:"30%",height:"40%", backgroundImage:"url('./icons/logo.png')", backgroundSize:"100% 100%", paddingTop:"1rem", backgroundColor:"gold", marginLeft:"auto", marginRight:"auto"}}></div>
                <div style={{justifyContent:"space-around", textAlign:"center", fontSize:"25px", fontWeight:"500", paddingTop:".5rem"}}>India Yoga TTC</div></Link>
                <div className="social-media" style={{paddingTop:"2rem",justifyContent:"space-around", display:"flex"}}>
                  {social_images.map((social, index) =>(
                    <div>
                      <img src={social.img} style={{width:"30px"}}/>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{display:"block", width:"40%", paddingTop:"1rem"}}>
                <div style={{justifyContent:"space-around", textAlign:"center", fontSize:"25px", fontWeight:"300", paddingTop:".5rem"}}>Quick Links</div>
                <ul style={{paddingTop:"2rem",justifyContent:"space-around", columnCount:2, listStyleType: "none"}}>
                  {footer.ql.map((head, index) =>(
                    <li style={{marginLeft:"5rem", fontSize:"20px"}}><Link to={head.link} className="link">{head.text}</Link></li>
                    // <li style={{marginLeft:"5rem", fontSize:"20px"}}>{head.text}</li>
                    ))}
                </ul>
              </div>
                    <div style={{display:"block", width:"30%", paddingTop:"1rem"}}>
                      <div style={{justifyContent:"space-around", textAlign:"center", fontSize:"25px", fontWeight:"300", paddingTop:".5rem"}}>Contact Us</div>
                      <div style={{paddingTop:"2rem",justifyContent:"space-around"}}>
                        {footer.contact.map((contact, index)=>(
                          <div style={{display:"flex", marginLeft:"auto", marginRight:"auto"}}>
                            <div style={{width:"20%"}}>
                              <div style={{height:"4rem", backgroundImage: contact.icon, backgroundSize:"100% 100%", backgroundColor:"gold"}}></div>
                            </div>
                            <div style={{width:"80%"}}>
                              <p style={{margin:"0", fontWeight:"700"}}>{contact.heading}</p><p>{contact.value}</p>
                            </div>
                          </div> 
                        ))}
                      </div>
                    </div>
            </div>
            <div style={{padding:"1rem", backgroundColor:"black", color:"white", textAlign:"center"}}>  
              <text style={{color:"#fff",fontSize:"18px"}}>{footer.copyright}</text>
            </div>
          </nav>
        );
    }
}
