import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import './TermsOfUse.scss';
import CloseSVG from '../../../icons/svg/CloseSVG';

export default class TermsOfUse extends React.Component {
    state = {
        open: true
    };
    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <Dialog
                id="dialog-terms-of-use"
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    Terms of Use
                    <span onClick={this.handleClose} className="close-icon">
                        <CloseSVG />
                    </span>
                </DialogTitle>
                <DialogContent className="dialog-content">
                    <div className="text-container">
                        This web site (the "Site") is owned and operated by
                        Singapore Post Limited. ("Singapore Post", "The Sample
                        Store", “Sample Store”, "we", "us" or "our").The use of
                        this Site and the content and information available on
                        this Site (collectively the "Services") shall be subject
                        to acceptance of and compliance with the terms and
                        conditions set forth in these terms of use
                        (collectively, the "Terms of Use") and elsewhere on this
                        Site. The terms "you," "your", "yours", "member"
                        "members" and "yourself" refer to all visitors/members
                        to this Site. Your agreement to comply with and be bound
                        by these Terms of Use is deemed to occur upon your first
                        use of the Site. If you do not agree to these Terms of
                        Use, you should not review information or obtain goods,
                        services or products from this Site. The Sample Store
                        has the total right to edit or delete any content in the
                        Site, including this Agreement, without notifying you.
                        <br />
                        <br /> USE OF THIS SITE You agree not to:-
                        <br />
                        <br />
                        (a) reproduce, copy, distribute, modify, publish,
                        transmit, display, use, reuse, re-publicize, assign,
                        sublicense, sell, or exploit for any public or
                        commercial purpose, any portion of the Site, use of the
                        Site, or access to the Site.
                        <br />
                        <br />
                        (b) attempt to change, add to, remove, deface, hack or
                        otherwise interfere with this Site or any material or
                        content displayed on this Site; and/or
                        <br />
                        <br />
                        (c) access or use this Site in any way that could or is
                        intended to damage or impair the Site, or any server or
                        network underlying the Site, or interfere with anyone
                        else's use and enjoyment of the Site. USE OF INFORMATION
                        We have a group privacy policy which sets out how we
                        handle personal data that you may provide or that we may
                        collect, in connection with your access or use of this
                        website. The policy is available on this website. You
                        accept and agree to the terms set out in the policy and
                        consent to the collection, use and disclosure of your
                        personal data in accordance with the policy. SUBMISSIONS
                        You may post reviews of products or services, comments,
                        suggestions, or other messages (collectively referred to
                        as “Submissions”) so long as the content of your
                        Submission is not unlawful, threatening, abusive,
                        spiteful, defamatory, invasive of privacy, obscene,
                        profane, sexually explicit, fraudulent or otherwise
                        objectionable or injurious to third parties (including,
                        but not limited to, any content that encourages conduct
                        that would constitute a criminal offense, give rise to
                        civil liability, or otherwise violate applicable law).
                        You may not use a false e-mail address, impersonate any
                        person or entity, or otherwise mislead as to the origin
                        of your Submission. The Sample Store reserves the right
                        (but not the obligation) to monitor, edit and remove any
                        Submission. By posting or sending us any Submission, you
                        grant The Sample Store a non-exclusive, perpetual,
                        irrevocable and fully sublicensable right to use,
                        reproduce, modify, adapt, publish, translate, create
                        derivative works from, distribute, and display such
                        Submission in any media. PROMOTIONS From time to time,
                        we may offer and/or co-sponsor contests and games on the
                        Site. Each of these activities shall be governed by
                        specific rules accessible from the Site.
                    </div>
                </DialogContent>
            </Dialog>
        );
    }
}
