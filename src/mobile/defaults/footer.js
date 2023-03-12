import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {FooterLinks, icons, social_images} from "../../constant/default"

const titles = ["Courses", "About Us", "Blog", "Contact" ]

export default class Footer extends Component {
    render() {
      let footer = FooterLinks
        return (
          <nav className="footer">
            <hr style={{ boxShadow:"0 1rem 4px 0 rgb(0 0 0 / 64%)"}}/>
            <div className="nav-container" style={{display:"block"}}>
              <div style={{display:"block", width:"100%", paddingTop:"1rem"}}>
                <Link to="/" className="link"><div style={{width:"30%",height:"5rem", backgroundImage:"url('./icons/logo.png')", backgroundSize:"100% 100%", paddingTop:"1rem", marginLeft:"auto", marginRight:"auto"}}></div>
                <div style={{justifyContent:"space-around", textAlign:"center", fontSize:"25px", fontWeight:"500", paddingTop:".5rem"}}>India Yoga TTC</div></Link>
                <div className="social-media" style={{paddingTop:"2rem",justifyContent:"space-around", display:"flex"}}>
                  {social_images.map((social, index) =>(
                    <div>
                      <a href={social.url} target="_blank" className="link"><img src={social.img} style={{width:"30px"}}/></a>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{display:"block", width:"100%", paddingTop:"1rem"}}>
                <div style={{justifyContent:"space-around", textAlign:"center", fontSize:"25px", fontWeight:"300", paddingTop:".5rem"}}>Quick Links</div>
                <ul style={{paddingTop:"2rem",justifyContent:"space-around", columnCount:3, listStyleType: "none"}}>
                  {footer.ql.map((head, index) =>(
                    <li style={{ fontSize:"20px"}}><Link to={head.link} className="link">{head.text}</Link></li>
                    ))}
                </ul>
              </div>
                    <div style={{display:"block", width:"100%", paddingTop:"1rem"}}>
                      <div style={{justifyContent:"space-around", textAlign:"center", fontSize:"25px", fontWeight:"300", paddingTop:".5rem"}}>Contact Us</div>
                      <div style={{paddingTop:"2rem",justifyContent:"space-around"}}>
                        {footer.contact.map((contact, index)=>(
                          <div style={{display:"flex", marginLeft:"auto", marginRight:"auto"}}>
                            <div style={{width:"20%"}}>
                              <div style={{height:"4rem", backgroundImage: contact.icon, backgroundSize:"100% 100%", backgroundColor:"gold"}}></div>
                            </div>
                            <div style={{width:"80%"}}>
                              <p style={{margin:"0", fontWeight:"700"}}>{contact.heading}</p>
                              <a href={contact.ref} target="_blank" className="link"><p>{contact.value}</p></a>
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
