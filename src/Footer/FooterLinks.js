import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const FooterLinks = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>Quick Links</Typography>
      <Link href="/" color="inherit" underline="none">Home</Link><br />
      <Link href="/schedule-pickup" color="inherit" underline="none">Schedule Pickup</Link><br />
      <Link href="/track-pickup" color="inherit" underline="none">Track Pickup</Link><br />
      <Link href="/reports" color="inherit" underline="none">Reports</Link><br />
      <Link href="/login" color="inherit" underline="none">Login</Link>
    </Box>
  );
};

export default FooterLinks;
