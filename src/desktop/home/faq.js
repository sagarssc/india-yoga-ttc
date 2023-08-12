import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { Faqs } from "../../constant/constant";

export default class Faq extends Component {
  render() {
    const isMobile = window.innerWidth <= 768;
    let course = this.props.course
    if(!course){course = "default"}
    let faqs = Faqs[course]
    return (
      <div>
        {!isMobile ? 
          <div style={{paddingBottom:"1%", backgroundImage:"url('/home/bg/4.png')", backgroundRepeat:"no-repeat", backgroundPosition:"bottom left"}}>
            <div className="heading" style={{ 
              fontFamily: "'Roboto', sans-serif", 
              fontSize: "36px", 
              fontWeight: "bold", 
              color: "#333", 
              margin: "0 auto 40px", 
              textAlign: "center" 
            }}>FAQ's</div>
            <div style={{display:"flex" ,               
                // backgroundColor:"#f8f8f8", 
                boxShadow:"0 0 20px rgba(0, 0, 0, 0.1)", width:"90%",
                borderRadius: "10px",marginLeft:"auto", marginRight:"auto"}}>
              <div style={{ 
                width: "48%", 
                height: "auto", 
                margin:"2%", 
                marginTop:'0%', 
                marginLeft:"auto",
                marginRight:"auto", 
                padding: "40px"
              }}>
                <Accordion allowZeroExpanded={true}>
                  {faqs.map((faq, index) => (
                    <div>{index % 2 == 0 &&<AccordionItem key={index}>
                      <AccordionItemHeading>
                        <AccordionItemButton
                          style={{ 
                            fontFamily: "'Roboto', sans-serif", 
                            fontSize: "15px", 
                            fontWeight: "600",
                            backgroundColor: "#0000",
                            height: "4.5rem"
                          }}
                        >
                          {faq.question}
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel
                        style={{
                          fontFamily: "'Lora', serif",
                          fontSize: "18px",
                          fontWeight: "normal",
                          textAlign: "start",
                          lineHeight: "1.5",
                          letterSpacing: "0.5px",
                          color: "#000"
                        }}
                      >
                        {faq.answer}
                      </AccordionItemPanel>
                    </AccordionItem>}</div>
                  ))}
                </Accordion>
              </div>
              <div style={{ 
                width: "48%", 
                height: "auto", 
                margin:"2%", 
                marginTop:'0%', 
                marginLeft:"auto",
                marginRight:"auto", 
                padding: "40px"
              }}>
                <Accordion allowZeroExpanded={true}>
                  {faqs.map((faq, index) => (
                    <div>{index % 2 != 0 &&<AccordionItem key={index}>
                      <AccordionItemHeading>
                        <AccordionItemButton
                          style={{ 
                            fontFamily: "'Roboto', sans-serif", 
                            fontSize: "15px", 
                            fontWeight: "600",
                            backgroundColor: "#0000",
                            height: "4.5rem"
                          }}
                        >
                          {faq.question}
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel
                        style={{
                          fontFamily: "'Lora', serif",
                          fontSize: "18px",
                          fontWeight: "normal",
                          textAlign: "start",
                          lineHeight: "1.5",
                          letterSpacing: "0.5px",
                          color: "#000"
                        }}
                      >
                        {faq.answer}
                      </AccordionItemPanel>
                    </AccordionItem>}</div>
                  ))}
                </Accordion>
              </div>
            </div>
          </div> : 
          <div style={{paddingBottom:"1%", backgroundImage:"url('/home/bg/4.png')", backgroundRepeat:"no-repeat", backgroundPosition:"bottom left"}}>
            <div className="heading" style={{ 
              fontFamily: "'Roboto', sans-serif", 
              fontSize: "30px", 
              fontWeight: "bold", 
              color: "#333", 
              margin: "0 auto 40px", 
              textAlign: "center" 
            }}>FAQ's</div>
            <div 
            style={{ 
              width: "90%", 
              height: "auto", 
              marginTop:'0%', 
              marginLeft:"auto",
              marginRight: "auto", 
              // backgroundColor:"#f8f8f8", 
              boxShadow:"0 0 20px rgba(0, 0, 0, 0.1)"
            }}>
              <Accordion allowZeroExpanded={true}>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index}>
                    <AccordionItemHeading>
                      <AccordionItemButton
                        style={{ 
                          fontFamily: "'Roboto', sans-serif", 
                          fontSize: "15px", 
                          fontWeight: "500",
                          backgroundColor: "#0000",
                          // color: "#333"
                        }}
                      >
                        {faq.question}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel
                      style={{
                        fontFamily: "'Lora', serif",
                        fontSize: "15px",
                        fontWeight: "normal",
                        textAlign: "start",
                        lineHeight: "1.5",
                        letterSpacing: "0.5px",
                        // color: "#555"
                      }}
                    >
                      {faq.answer}
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        }
      </div>
    );
  }
}
