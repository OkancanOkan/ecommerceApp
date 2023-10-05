import React from 'react';
import TitleLinks from '../title-links';
import Text from '../text';
import IconLabel from '../icon-label';
import iconNavigation from '../../assets/icons/position.svg';
import iconPhone from '../../assets/icons/phone.svg';
import Icon from '../icon';
import iconFacebook from '../../assets/icons/facebook.svg';
import iconTwitter from '../../assets/icons/twitter.svg';
import iconTumblr from '../../assets/icons/tumblr.svg';
import InputIcon from '../input-icon';
import iconArrow from '../../assets/icons/arrow.svg';
import Hyperlinks from '../hyperlinks';
import './footer.css';

const Footer = () => {
  return (
    <div className="styled-footer">
      <div className="styled-footer-top">
        <div className="styled-footer-top-first">
          <Text colour="black" size="m" bold>
            <p>Address</p>
          </Text>
          <IconLabel
            icon={iconNavigation}
            size={16}
            text="Helendo, Chicago, USA 2023"
          />
          <IconLabel icon={iconPhone} size={16} text="+846677028028" />
          <div className="styled-footer-top-first-iconGroup">
            <Icon icon={iconFacebook} size={16} onClick={() => {}} />
            <Icon icon={iconTwitter} size={16} onClick={() => {}} />
            <Icon icon={iconTumblr} size={16} onClick={() => {}} />
          </div>
        </div>
        <div className="styled-footer-top-second">
          <TitleLinks
            title="Help & Informat  ion"
            items={[
              'Help & Contact Us',
              'Returns & Refunds',
              'Online Stores',
              'Terms & Conditions',
            ]}
          />
        </div>
        <div className="styled-footer-top-third">
          <TitleLinks
            title="About Us"
            items={['About Us', 'What We Do', 'FAQ Page', 'Contact Us']}
          />
        </div>
        <div className="styled-footer-top-last">
          <Text colour="black" size="m" bold>
            <p>Newsletter</p>
          </Text>
          <InputIcon
            inputIcon={iconArrow}
            value="Your email address"
            setValue={() => {}}
            onClick={() => {}}
          />
          <div className="styled-footer-top-hyperlink">
            <Hyperlinks text="Term & Condition" path="" />
            <Hyperlinks text="Policy" path="" />
            <Hyperlinks text="Map" path="" />
          </div>
        </div>
      </div>
      <div className="styled-footer-bottom">
        <div className="styled-footer-bottom-hyperlink">
          <Hyperlinks text="Term & Condition" path="" />
          <Hyperlinks text="Policy" path="" />
          <Hyperlinks text="Map" path="" />
        </div>
        <h1 className="styled-navbar-header">Helendo</h1>
        <div className="styled-footer-bottom-last">
          <Text size="m" bold colour="black">
            <p>Follow Us On Social</p>
          </Text>
          <div className="styled-footer-bottom-last-iconGroup">
            <Icon icon={iconFacebook} size={16} onClick={() => {}} />
            <Icon icon={iconTwitter} size={16} onClick={() => {}} />
            <Icon icon={iconTumblr} size={16} onClick={() => {}} />
          </div>
        </div>
      </div>
      <div className="styled-footer-copyright">
        <p>© 2023 Helendo. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
