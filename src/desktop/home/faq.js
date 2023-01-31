import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const Faqs = [
  {
    question:
      "denw dnjew dfenwjkdf nlfdew dfewjhifd fdjhwo dfwejif nweniodwef ?",
    answer:
      "deaknjfbhjdfe eajkncde ledsnkj dekjnefds lkedsf edsiljedsf niledsjbndefjhkefsd esdfhji dcnjke decnjesf maesilkesf descjklncsn jihdcs kcsjjkdfwe,ikcsrjdnslifjjlifdeso \
    felkdfskncvdsf njdsak cdsjn dscjndscfnjkl ijdsfmnklj dscjklndsf nnkdefs jdcsjjk jodsefn",
  },
  {
    question:
      "denw dnjew dfenwjkdf nlfdew dfewjhifd fdjhwo dfwejif nweniodwef ?",
    answer:
      "deaknjfbhjdfe eajkncde ledsnkj dekjnefds lkedsf edsiljedsf niledsjbndefjhkefsd esdfhji dcnjke decnjesf maesilkesf descjklncsn jihdcs kcsjjkdfwe,ikcsrjdnslifjjlifdeso \
    felkdfskncvdsf njdsak cdsjn dscjndscfnjkl ijdsfmnklj dscjklndsf nnkdefs jdcsjjk jodsefn",
  },
];

export default class Faq extends Component {
  render() {
    return (
      <div style={{ width: "80%", height: "auto", margin:"5%", marginLeft:"10%", backgroundColor:"white", boxShadow:"-5px 5px 8px 5px"}}>
        <Accordion allowZeroExpanded={true}>
          {Faqs.map((faq, index) => (
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton
                  style={{ fontSize: "15px", fontWeight: "500" , backgroundColor:"#e9d8d8"}}
                >
                  {faq.question}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                  textAlign: "start",
                }}
              >
                {faq.answer}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  }
}
