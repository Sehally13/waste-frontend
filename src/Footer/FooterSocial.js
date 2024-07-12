import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const FooterSocial = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>Follow Us</Typography>
      <Link href="https://facebook.com" color="inherit" target="_blank" rel="noopener">
        <Facebook />
      </Link>
      <Link href="https://twitter.com" color="inherit" target="_blank" rel="noopener">
        <Twitter />
      </Link>
      <Link href="https://instagram.com" color="inherit" target="_blank" rel="noopener">
        <Instagram />
      </Link>
    </Box>
  );
};

export default FooterSocial;
