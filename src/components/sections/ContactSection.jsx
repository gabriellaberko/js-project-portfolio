import React from 'react';
import { GitHubIcon } from '../icons/GitHubIcon';
import { LinkedInIcon } from '../icons/LinkedinIcon'; 
import { LinkIcon } from '../icons/LinkIcon';
import { ProfileImg } from '../images/ProfileImg';
import { Typography } from '../typography/typography';


export const ContactSection = () => {
  return (
    <section className="contact-section">
      <Typography as="h2" size="large" weight="bold">Let's Talk!</Typography>
      <ProfileImg />
      <div className = "contact-info-container">
        <Typography weight="medium">Gabriella Berkowicz</Typography>
        <Typography weight="medium">+46(0) 736 37 46 46</Typography>
        <Typography weight="medium">gabriellaberko@live.se</Typography>
        <div className="icons-container">
          <LinkIcon link="https://www.linkedin.com/in/gabriella-berkowicz/">
            <LinkedInIcon />
          </LinkIcon>
          <LinkIcon link="https://github.com/gabriellaberko">
            <GitHubIcon />
          </LinkIcon>
        </div>
      </div>
    </section>
  );
}