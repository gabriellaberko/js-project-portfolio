import React from 'react';
import { GitHubIcon } from '../svg/GitHubIcon';
import { LinkedInIcon } from '../svg/LinkedinIcon'; 
import { LinkIcon } from '../buttonsAndLinks/LinkIcon';
import { ProfileImg } from '../images/ProfileImg';
import { Typography } from '../typography/typography';


export const ContactSection = () => {
  return (
    <section className="contact-section">
      <Typography className="section-title" variant="h2">Let's Talk!</Typography>
      <ProfileImg />
      <div className = "contact-info-container">
        <p>Gabriella Berkowicz</p>
        <p>+46(0) 736 37 46 46</p>
        <p>gabriellaberko@live.se</p>
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