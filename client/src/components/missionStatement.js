import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Mission() {
  return (
    <div>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>P</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Providing stylish and user-friendly functionality to the consumer
          </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>A</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Accessing company/stock data across various stock exchanges/markets
          </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3a-content"
        id="panel3a-header"
      >
        <Typography>C</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Correctly interpret company/stock data to provide reliable market predictions
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>E</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          End investment loss many first time/investors experience from lack of knowledge
          or fluctuating market trends
        </Typography>
      </AccordionDetails>
    </Accordion>
  </div>

  )}
