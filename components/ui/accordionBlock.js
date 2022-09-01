import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const AccordionBlock = ({ header, content, extra, expanded }) => {
  return (
    <>
      <Accordion
        sx={{ bgcolor: "#F8F3F0", boxShadow: "none" }}
        onChange={(e, exp) => {
          try {
            expanded(exp);
          } catch {
            console.log("error");
          }
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id={`${header}`}
        >
          <p className="text-lg font-spartan-bold">{header}</p>
        </AccordionSummary>
        <AccordionDetails>
          {content && (
            <p className="font-spartan-light leading-[23px] mt-4 mb-4">
              {content}
            </p>
          )}
          {extra && extra}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AccordionBlock;
