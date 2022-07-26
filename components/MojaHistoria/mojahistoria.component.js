import React from "react";
import Image from "next/image";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MojaHistoria = () => {
  return (
    <section className="flex bg-[#F8F3F0] flex-col  text-center  pt-10">
      <p className="text-4xl font-spartan-bold mb-6 text-center">
        Moja historia
      </p>
      <div className="block">
        <Image
          src={"/images/kasia-img.png"}
          alt={`kasia-img`}
          width={390}
          height={330}
          layout="responsive"
        />
      </div>
      <p className="font-spartan-light mx-10 mt-4 mb-4">
        Mantra według której żyje to wdzięczność. Być wdzięcznym za to kim
        jestem. Wdzięcznym za to, co mam wokół siebie. Jestem wdzięczna że mogę
        służyć, ponieważ urodziliśmy się na tym świecie by służyć. W tym życiu
        nigdy nie chodzi o ciebie. Wdzięczność za to, że mogę żyć moim
        marzeniem. Mieszkam na wsi, mam piękne życie, męża i psa. Ukończyłam
        Łódzką Szkołę Filmową, kurs Bussines Coaching Diploma na PWC oraz
        nauczycielski kurs jogi RYT 200.
      </p>
      <div>
      <Accordion sx={{ bgcolor: '#F8F3F0', boxShadow: "none"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="text-lg font-spartan-bold">Rodzina i wartości</p>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ bgcolor: '#F8F3F0', boxShadow: "none"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <p className="text-lg font-spartan-bold">Kariera i pasja</p>
        </AccordionSummary>
        <AccordionDetails>
        <div className="block">
        <Image
          src={"/images/kasia-img.png"}
          alt={`kasia-img`}
          width={390}
          height={330}
          layout="responsive"
        />
      </div>
          <Typography>
          Kiedy uświadomisz sobie że życie jest darem, zdecyduj się na życie pełne sensu, życie z celem. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ bgcolor: '#F8F3F0', boxShadow: "none"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="text-lg font-spartan-bold">Zmiany i zawody</p>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ bgcolor: '#F8F3F0', boxShadow: "none"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="text-lg font-spartan-bold">Życie i miłość</p>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ bgcolor: '#F8F3F0', boxShadow: "none"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="text-lg font-spartan-bold">Cele i marzenia</p>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
     
    </section>
  );
};

export default MojaHistoria;
