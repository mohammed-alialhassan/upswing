import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Instructions() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Step 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Click On The Magnifying Glass At The Top
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Step 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Type The Target Company's Ticker
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Step 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Click The Search Button
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Step 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Watch Upswing work its magic!
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  )}
