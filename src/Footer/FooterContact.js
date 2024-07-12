import React from 'react';
import { Box, Typography } from '@mui/material';

const FooterContact = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>Contact Us</Typography>
      <Typography variant="body2">Email: support@yourcompany.com</Typography>
      <Typography variant="body2">Phone: +1 234 567 890</Typography>
      <Typography variant="body2">Address: 123 Your Street, Your City, Your Country</Typography>
    </Box>
  );
};

export default FooterContact;
