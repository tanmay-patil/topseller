import React from 'react';
import { Grid } from '@material-ui/core';
import footerConstants, { generateElement } from '../../constants/footerConstants';
const Footer = () => {
    const footerNav = generateElement('footerLinks', footerConstants.topFooter);
    const footerContent = generateElement('footerContent', footerConstants.footerContent);
    return (
        <div className="footer">
            <div className="footerTop">
                <Grid className="container" container direction="row" justify="flex-start" alignItems="flex-end" spacing={0}>
                    <Grid className="footerContainer" item xs={12} lg={4}>
                        <h4>Connect</h4>
                        <img src='https://via.placeholder.com/64' alt="facebook" />
                        <img src='https://via.placeholder.com/64' alt="Instagram" />
                        <img src='https://via.placeholder.com/64' alt="Koerean market" />
                    </Grid>
                </Grid>
            </div>
            <div className="footerNavigation">
                <Grid className="container" container direction="row" justify="flex-start" alignItems="flex-end" spacing={0}>
                    <Grid item xs={12} lg={7} md={8} className='footerNavigation__item'>
                        {footerNav}
                    </Grid>
                </Grid>
            </div>
            <div className="footerContent">
                <Grid className="container" container direction="row" justify="flex-start" alignItems="flex-end" spacing={0}>
                    <Grid item xs={12}>
                        {footerContent}
                    </Grid>
                </Grid>
            </div>
            <div className="footerCopyRight">
                <Grid className="container" container direction="row" justify="flex-start" alignItems="flex-end" spacing={0}>
                    <Grid item xs={12}>
                        {footerConstants.copyRight}
                    </Grid>

                </Grid>
            </div>
        </div>
    );
};
export default Footer;