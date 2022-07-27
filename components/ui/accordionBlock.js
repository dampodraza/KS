import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const AccordionBlock = ({ header, content, extra }) => {
  return (
    <Accordion sx={{ bgcolor: "#F8F3F0", boxShadow: "none" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <p className="text-lg font-spartan-bold">{header}</p>
      </AccordionSummary>
      <AccordionDetails>
        {extra}
        <Typography>{content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionBlock;
