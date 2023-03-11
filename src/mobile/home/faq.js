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
    return (
      <div style={{paddingBottom:"5%", backgroundImage:"url('/home/bg/header.png')"}}>

        <div className="heading">FAQ's</div>
      <div style={{ width: "80%", height: "auto", margin:"5%",marginTop:'0%',marginLeft:"10%", backgroundColor:"white", boxShadow:"-5px 5px 8px 5px"}}>
        <Accordion allowZeroExpanded={true}>
          {Faqs.map((faq, index) => (
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton
                  style={{ fontSize: "15px", fontWeight: "500", textAlign:"justify"}}
                >
                  {faq.question}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                  textAlign: "justify",
                }}
              >
                {faq.answer}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      </div>

    );
  }
}
