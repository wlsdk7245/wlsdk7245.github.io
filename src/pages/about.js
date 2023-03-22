import React from 'react';
import AppLayout from '../app.layout/AppLayout/AppLayout';
import ScreenAbout from '../app.feature/About/ScreenAbout';

const About = ({ location }) => {
  return (
    <AppLayout location={location}>
      <ScreenAbout />
    </AppLayout>
  );
};

export default About;
