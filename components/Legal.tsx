/* ---------------------------------------------------------------------------
   Legal policies — Ledgify Solutions
   src/constants/legal.ts

   The three policies were previously hardcoded as JSX inside Footer.tsx,
   which meant ~500 lines of legal prose sitting in a layout component, three
   near-identical modal implementations around them, and no way to reuse the
   text anywhere else. They're data now.

   The text below is VERBATIM from the existing modals. Nothing has been
   reworded — these are legal documents and changing them isn't a design
   decision. But several passages look like they came from a template written
   for a different kind of business, and they should go to whoever drafted
   them. Each one is flagged with a ⚠ REVIEW comment at the section it
   affects. None of this is legal advice; it's a list of things that look
   inconsistent with an accounting firm, for a lawyer to confirm.

   Worth doing next
   ----------------
   These should also live at real URLs — /terms, /privacy, /refund-policy —
   not only inside modals. Policy pages in a modal are invisible to search
   engines, can't be linked to directly, and can't be cited in a contract or
   a payment processor review. Now that the content is here, a policy page
   route is a few lines: read the same record, render the same sections.
--------------------------------------------------------------------------- */

export type PolicyId = "terms" | "privacy" | "refund";

export interface PolicySection {
  heading: string;
  paragraphs: string[];
}

export interface Policy {
  id: PolicyId;
  /** Shown in the footer link and as the dialog title. */
  title: string;
  /** Optional. Rendered under the title — worth filling in; readers and
   *  payment processors both look for it. */
  updated?: string;
  sections: PolicySection[];
}

export const POLICIES: Record<PolicyId, Policy> = {
  terms: {
    id: "terms",
    title: "Terms and conditions",
    sections: [
      {
        heading: "Customer support",
        paragraphs: [
          "Ledgify Solutions LLC prides itself on fast and courteous customer service. For any questions regarding the purchase or sale of services, contact us directly with your name, email, and order number.",
        ],
      },
      {
        heading: "Digital services and completion time",
        paragraphs: [
          "All plan services are provided digitally via the Internet. Services are expected to be completed within 1 to 7 days, depending on project complexity and contractual agreements.",
        ],
      },
      {
        /* ⚠ REVIEW — the second paragraph here describes an information
           product, not an accounting engagement: "educational and
           entertainment purposes only", "no income is guaranteed",
           "additional purchases may be required to start a business". On a
           firm that prepares tax documentation, "educational and
           entertainment purposes only" contradicts what the rest of the site
           says the service is, and a client could reasonably point at it. */
        heading: "Restrictions on use of materials",
        paragraphs: [
          "All materials on this site, including text, graphics, databases, HTML code, and other intellectual property, are protected under International Copyright Laws. They may not be copied, reprinted, published, re-engineered, hosted, translated, or distributed without explicit permission. Trademarks are property of their respective owners and used with permission.",
          "Services are for educational and entertainment purposes only. No income is guaranteed. Additional purchases may be required to start a business. All decisions are made at your own discretion.",
        ],
      },
      {
        heading: "Database ownership, license, and use",
        paragraphs: [
          "You may use information obtained from this site only for private or internal purposes. You may not sell, reproduce, redistribute, or publish any part of the databases in any form. Unauthorized use may result in legal action.",
        ],
      },
      {
        heading: "Liability",
        paragraphs: [
          'Materials are provided "as is" without warranties of any kind. Ledgify Solutions LLC does not guarantee uninterrupted or error-free functionality, nor assume liability for damages arising from use. Applicable laws may limit exclusions or limitations of liability.',
          "Total liability shall not exceed the amount paid, if any, for accessing services from this site.",
        ],
      },
      {
        heading: "Accuracy of information",
        paragraphs: [
          "Information on this website is believed accurate at the time of posting. Content is for informational purposes and does not constitute legal, financial, or tax advice. Services are offered only where legally permitted.",
        ],
      },
      {
        heading: "Links and marks",
        paragraphs: [
          "Links to third-party sites are for convenience only. Ledgify Solutions LLC is not responsible for external content. Trademarks, logos, and trade names displayed are the property of their respective owners. Unauthorized use is prohibited.",
        ],
      },
      {
        /* ⚠ REVIEW — "coaching, webinars, seminars, and proprietary
           software" doesn't match the services the site sells. */
        heading: "Returns and refund policies",
        paragraphs: [
          "Returnable services are covered by a 30-day money-back guarantee. Services, coaching, webinars, seminars, and proprietary software are eligible for refund within 30 days from completion of services (see Refund Policy for details); after the 30-day period they are generally non-refundable. Please refer to service sales pages for additional details.",
        ],
      },
      {
        heading: "Confidentiality",
        paragraphs: [
          "Subscriber codes, usernames, passwords, and all information accessed through password-protected areas must be kept strictly confidential and not shared with others.",
        ],
      },
      {
        /* ⚠ REVIEW — arbitration seated in "Manitoba, Canada" for an
           Arkansas LLC serving US clients. This is the single most likely
           copy-paste error in the document and the most consequential: a
           dispute clause pointing at a foreign forum is the kind of thing
           that gets a whole clause struck, or worse, enforced. */
        heading: "Legal and governing law",
        paragraphs: [
          "Terms apply to all access and use of this site. Ledgify Solutions LLC may revise these Terms, with the revised version applying immediately upon publication. Terms are governed by U.S. law. Intellectual property violations may result in legal action in U.S. courts.",
          "Disputes will first attempt timely resolution. Unresolved disputes will be submitted to confidential arbitration in Manitoba, Canada, except for intellectual property violations enforceable in U.S. courts under exclusive jurisdiction.",
        ],
      },
      {
        heading: "Termination",
        paragraphs: [
          "Terms of Use remain effective until terminated. You may terminate by destroying all materials obtained. The agreement terminates immediately if you fail to comply with any term.",
        ],
      },
      {
        heading: "Copyright and security",
        paragraphs: [
          "All website content is protected by international copyright laws. Unauthorized use will result in legal action. Payments and personal information are protected via SSL encryption.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "For any questions regarding these Terms and Conditions, email us at info@ledgifysolutions.com.",
        ],
      },
    ],
  },

  privacy: {
    id: "privacy",
    title: "Privacy policy",
    sections: [
      {
        /* ⚠ REVIEW — opening a privacy policy with an instruction to leave
           the site reads as hostile, and "WE HATE SPAM!" in capitals sits
           oddly on a firm holding clients' financial records. Content is
           unchanged here; tone is a decision for you and your lawyer. */
        heading: "Notice — read this page",
        paragraphs: [
          "If you do not agree to these Terms, discontinue using the site immediately.",
        ],
      },
      {
        heading: "Introduction",
        paragraphs: [
          'Company/Seller (herein referred to as "this Site") strives to offer its visitors the advantages of Internet technology and to provide an interactive and personalized experience. Ledgify Solutions LLC may use Personally Identifiable Information (your name, e-mail address, street address, telephone number) subject to the terms of this privacy policy. We will never sell, barter, or rent your email address to any unauthorized third party. WE HATE SPAM!',
        ],
      },
      {
        heading: "Information collection",
        paragraphs: [
          "How we collect and store information depends on the page you are visiting, the activities in which you participate, and the services provided. This may include registration, newsletters, purchases, contests, chat areas, and other interactive areas. We may also collect information automatically via cookies and other tools.",
        ],
      },
      {
        /* ⚠ REVIEW — "more personalized content and advertising" and the
           advertising/affiliate section below describe an ad-supported
           business. If Ledgify doesn't run advertising or share data with
           advertisers, these paragraphs commit you to practices you don't
           have and undercut the security claims made elsewhere on the site. */
        heading: "Use of collected information",
        paragraphs: [
          "Information is collected to enhance your experience and deliver more personalized content and advertising. Aggregated data may be used for analytics to improve our site and services. Personal information may be used to communicate about your registration, customization preferences, services, and other topics of interest. We do not sell your email or credit card information.",
          "Your information may also be used for site administration, e-commerce processing, contests, or communications. Certain technical third parties may access your data as required by law or for operational purposes.",
        ],
      },
      {
        heading: "Third parties, ads, and affiliated sites",
        paragraphs: [
          "Third-party partners, advertisers, and affiliates may have their own data collection practices. We are not responsible for their privacy policies. Cookies and other tracking technologies may be used by advertisers and partners. Information you voluntarily disclose on message boards or chat areas may be collected and used by third parties.",
        ],
      },
      {
        heading: "Compliance with laws",
        paragraphs: [
          "Online Privacy Protection Act: we comply with the Act and will not distribute personal information without consent.",
          "Children's Online Privacy Protection Act (COPPA): no information is collected from anyone under 13.",
          "CAN-SPAM Act: we comply with anti-spam laws and never send misleading information.",
        ],
      },
      {
        /* ⚠ REVIEW — support hours are given in MST, while the firm is in
           Arkansas (Central). Worth confirming which is correct, since this
           is the only place on the site that states hours at all. */
        heading: "Contacting us",
        paragraphs: [
          "Support is available Monday to Friday, 9am–7pm CST, and Saturday to Sunday, 10am–5pm MST. Phone and chat support are available during standard hours. Tickets are responded to within 12 business hours. For privacy concerns, email us at info@ledgifysolutions.com.",
        ],
      },
      {
        heading: "Governing law and dispute resolution",
        paragraphs: [
          "This policy and site use are governed by U.S. law. Disputes will first attempt mediation, and if unsuccessful, binding arbitration within the United States applies. This policy does not create contractual or legal rights on behalf of any party.",
        ],
      },
      {
        heading: "Credit card security",
        paragraphs: [
          "Payments and personal information are protected via industry-standard SSL encryption. Ledgify Solutions LLC does not share customer information with third-party providers.",
        ],
      },
    ],
  },

  refund: {
    id: "refund",
    title: "Refund policy",
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Ledgify Solutions LLC offers a 30-day money-back guarantee for new purchases. If you are dissatisfied with our work, we may issue a refund within 30 working days either as credits or a direct deposit to your account.",
        ],
      },
      {
        /* ⚠ REVIEW — "any design or service" suggests this was written for a
           design studio. */
        heading: "Refund and cancellation policy",
        paragraphs: [
          "Clients are encouraged to read and familiarize themselves with our refund policy. Ledgify Solutions LLC strives to provide high-quality services. Refunds may be issued for any design or service, but internal management reserves the right to reject a refund request at its discretion.",
          "Refunds will generally be issued to the original payment method. Clients must specify account details and reason for the refund to our associates.",
        ],
      },
      {
        heading: "Return period for services",
        paragraphs: [
          "For services (including consulting, implementations, coaching, webinars, and similar engagements), clients may request a refund within 30 days from the completion of services. The 30-day period begins on the date Ledgify Solutions LLC notifies the client that the services are complete or the completion date specified in the applicable agreement, whichever is earlier. Refunds requested after this 30-day period will generally not be eligible, except at the sole discretion of our management.",
        ],
      },
      {
        heading: "Non-delivery of service",
        paragraphs: [
          "If delivery emails are not received due to mailing issues, contact us for assistance. Claims must be submitted within 30 days from delivery; otherwise, the service will be considered successfully delivered.",
        ],
      },
      {
        /* ⚠ REVIEW — downloading and unzipping files is not something an
           accounting engagement involves. Almost certainly template residue. */
        heading: "Download and unzipping issues",
        paragraphs: [
          "Problems with downloading or unzipping services must be reported to our Technical Support Department. Failure to report within 30 days may result in the refund being declined.",
        ],
      },
      {
        heading: "Service not as described",
        paragraphs: [
          "Issues must be reported within 30 days with clear evidence that the service differs from its description. Complaints based on false expectations or personal preferences will not be honored.",
        ],
      },
      {
        heading: "Children policy",
        paragraphs: [
          "Only persons aged 18 or older may access our services. We do not knowingly collect information from children under 13. Parents or guardians discovering that their child has provided personal information should contact us immediately. Any information collected from children under 13 will be removed, and the order canceled.",
        ],
      },
    ],
  },
};

export const POLICY_ORDER: PolicyId[] = ["terms", "privacy", "refund"];