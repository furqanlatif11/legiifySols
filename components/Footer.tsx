import React, { useState, useEffect } from "react";
import { lockScroll, unlockScroll } from "../utils/scrollLock";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC<{ onInquire: () => void }> = ({ onInquire }) => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isRefundPolicyOpen, setIsRefundPolicyOpen] = useState(false);

  useEffect(() => {
    if (isTermsOpen || isPrivacyOpen) lockScroll();
    else unlockScroll();
    return () => unlockScroll();
  }, [isTermsOpen, isPrivacyOpen]);

  return (
    <footer id="contact" className="bg-emerald-950 text-white pt-32">
      <div className="container mx-auto px-6">
        {/* MASSIVE CTA */}
        <div className="bg-emerald-600 rounded-[3rem] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 mb-32 -translate-y-40 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl text-center lg:text-left relative z-10">
            <h3 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tighter">
              Ready to Scale your <br />
              Financial Integrity?
            </h3>
            <p className="text-emerald-50 text-xl font-medium">
              Connect with an institutional-grade partner today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 shrink-0 relative z-10">
            <button
              onClick={onInquire}
              className="bg-emerald-950 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-black transition-all shadow-2xl"
            >
              Get Free Consultation
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-20 border-b border-white/5 mt-[-100px]">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <img
                src="/assets/logos/ls-mainLogo600x200_footer.svg"
                alt="Ledgify Solutions Logo"
                className="w-80"
              />
            </div>
            <p className="text-emerald-100/40 leading-relaxed mb-10 text-lg font-medium">
              The premier choice for institutional accounting and strategic
              growth in the USA. Protecting your legacy with absolute precision.
            </p>
            <div className="flex gap-4">
              <Link
                to="/"
                className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-emerald-600 transition-all hover:scale-110"
              >
                <Linkedin size={22} />
              </Link>
              <Link
                to="/"
                className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-emerald-600 transition-all hover:scale-110"
              >
                <Twitter size={22} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 uppercase tracking-widest text-emerald-500">
              Tier 1 Services
            </h4>
            <ul className="space-y-5 text-emerald-100/60 font-bold">
              <li>
                <Link
                  to="/services"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Tax Architecture
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Financial Analysis
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Virtual CFO
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Tax Dispute Support
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Wealth Strategy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 uppercase tracking-widest text-emerald-500">
              Corporate
            </h4>
            <ul className="space-y-5 text-emerald-100/60 font-bold">
              <li>
                <Link
                  to="/philosophy"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Our Philosophy
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Who We Serve
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-emerald-400 transition-colors"
                >
                  About Company
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Partner Network
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 uppercase tracking-widest text-emerald-500">
              HQ Concierge
            </h4>

            <ul className="space-y-6 text-emerald-100/60 font-bold">
              {/* Address */}
              <li className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Walnut+Ridge,+AR+72476"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-emerald-400 transition-colors"
                >
                  WALNUT RIDGE, AR 72476
                </a>
              </li>

              {/* Phone */}
              <li className="flex gap-4 items-center">
                <Phone className="w-6 h-6 text-emerald-500 shrink-0" />
                <a
                  href="tel:+18702026004"
                  className="text-lg hover:text-emerald-400 transition-colors"
                >
                  +1 (870) 202-6004
                </a>
              </li>

              {/* Email */}
              <li className="flex gap-4 items-center">
                <Mail className="w-6 h-6 text-emerald-500 shrink-0" />
                <a
                  href="mailto:info@ledgifysolutions.com"
                  className="text-lg hover:text-emerald-400 transition-colors"
                >
                  info@ledgifysolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="mt-6">
            <h4 className="text-lg text-center  text-white mb-4">We Accept</h4>

            <div className="flex flex-wrap items-center gap-6">
              <div className=" flex items-center justify-center">
                <img
                  src="/assets/logos/visa.svg"
                  alt="VISA"
                  className="h-10 object-contain"
                />
              </div>

              <div className=" flex items-center justify-center">
                <img
                  src="/assets/logos/mastercard.svg"
                  alt="Mastercard"
                  className="h-10 object-contain"
                />
              </div>

              <div className=" flex items-center justify-center ">
                <img
                  src="/assets/logos/amex.svg"
                  alt="American Express"
                  className="h-10 object-contain"
                />
              </div>

              <div className=" flex items-center justify-center">
                <img
                  src="/assets/logos/discover.svg"
                  alt="Discover"
                  className="h-10 object-contain"
                />
              </div>

              <div className=" flex items-center justify-center">
                <img
                  src="/assets/logos/bank.svg"
                  alt="Bank Transfer"
                  className="h-7 object-contain text-white"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-8 text-xs font-bold uppercase tracking-[0.2em] text-emerald-100/20">
          <p>© 2026 Ledgify Solutions LLC. A Global Financial Partner.</p>
          <div className="flex gap-6">
            <button
              onClick={() => setIsTermsOpen(true)}
              className="hover:text-white transition-colors"
            >
              Terms &amp; Conditions
            </button>
            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setIsRefundPolicyOpen(true)}
              className="hover:text-white transition-colors"
            >
              Refund Policy
            </button>
          </div>
        </div>

        {isRefundPolicyOpen && (
          <div className="fixed inset-0 z-[101] flex items-center justify-center">
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsRefundPolicyOpen(false)}
            ></div>

            {/* Modal */}
            <div className="relative bg-white rounded-2xl max-w-4xl w-[90%] p-8 shadow-2xl z-10">
              {/* Header */}
              <h3 className="text-2xl text-emerald-700 font-black mb-6">
                Refund Policy
              </h3>

              {/* Scrollable Content */}
              <div className="text-slate-700 max-h-[70vh] overflow-y-auto space-y-6">
                <section>
                  <h4 className="font-bold text-lg mb-2">Overview</h4>
                  <p>
                    Ledgify Solutions LLC offers a 30-day money-back guarantee
                    for new purchases. If you are dissatisfied with our work, we
                    may issue a refund within 30 working days either as credits
                    or a direct deposit to your account.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-lg mb-2">
                    Refund Policy & Cancellation Policy
                  </h4>
                  <p>
                    Clients are encouraged to read and familiarize themselves
                    with our refund policy. Ledgify Solutions LLC strives to
                    provide high-quality services. Refunds may be issued for any
                    design or service, but internal management reserves the
                    right to reject a refund request at its discretion.
                  </p>
                  <p>
                    Refunds will generally be issued to the original payment
                    method. Clients must specify account details and reason for
                    the refund to our associates.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-lg mb-2">
                    Return Period for Services
                  </h4>
                  <p>
                    For services (including consulting, implementations,
                    coaching, webinars, and similar engagements), clients may
                    request a refund within 30 days from the completion of
                    services. The 30-day period begins on the date Ledgify
                    Solutions LLC notifies the client that the services are
                    complete or the completion date specified in the applicable
                    agreement, whichever is earlier. Refunds requested after
                    this 30-day period will generally not be eligible, except at
                    the sole discretion of our management.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-lg mb-2">
                    Non-Delivery of Product
                  </h4>
                  <p>
                    If delivery emails are not received due to mailing issues,
                    contact us for assistance. Claims must be submitted within
                    30 days from delivery; otherwise, the product will be
                    considered successfully delivered.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-lg mb-2">
                    Download and Unzipping Issues
                  </h4>
                  <p>
                    Problems with downloading or unzipping products must be
                    reported to our Technical Support Department. Failure to
                    report within 30 days may result in the refund being
                    declined.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-lg mb-2">Major Defects</h4>
                  <p>
                    All products are tested before release, but unexpected
                    errors may occur. Report issues to our Technical Support
                    Team. We will attempt to fix defects within 72 hours. If
                    unresolved, a full refund or replacement of equal value will
                    be offered. Technicians may request temporary server access
                    to identify issues; refusal may delay or void eligibility
                    for refund.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-lg mb-2">
                    Product Not-As-Described
                  </h4>
                  <p>
                    Issues must be reported within 30 days with clear evidence
                    that the product differs from its description. Complaints
                    based on false expectations or personal preferences will not
                    be honored.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-lg mb-2">Children Policy</h4>
                  <p>
                    Only persons aged 18 or older may access our products. We do
                    not knowingly collect information from children under 13.
                    Parents or guardians discovering that their child has
                    provided personal information should contact us immediately.
                    Any information collected from children under 13 will be
                    removed, and the order canceled.
                  </p>
                </section>
              </div>

              {/* Close Button */}
              <div className="mt-6 text-right">
                <button
                  onClick={() => setIsRefundPolicyOpen(false)}
                  className="px-6 py-2 bg-emerald-900 text-white rounded-lg font-bold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Terms & Privacy Modals */}
        {isTermsOpen && (
          <div className="fixed inset-0 z-[101] flex items-center justify-center">
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsTermsOpen(false)}
            ></div>

            {/* Modal */}
            <div className="relative bg-white rounded-2xl max-w-4xl w-[90%] p-8 shadow-2xl z-10">
              {/* Header */}
              <h3 className="text-2xl text-emerald-700 font-black mb-6">
                Terms &amp; Conditions
              </h3>

              {/* Scrollable Content */}
              <div className="text-slate-700 max-h-[70vh] overflow-y-auto space-y-6">
                <section>
                  <h4 className="font-bold text-lg mb-2">Customer Support</h4>
                  <p>
                    Ledgify Solutions LLC prides itself on fast and courteous
                    customer service. For any questions regarding the purchase
                    or sale of products or services, contact us directly with
                    your name, email, and order number.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-lg mb-2">
                    Digital Services & Completion Time
                  </h4>
                  <p>
                    All plan services are provided digitally via the Internet.
                    Services are expected to be completed within 1 to 7 days,
                    depending on project complexity and contractual agreements.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-lg mb-2">
                    Restrictions on Use of Materials
                  </h4>
                  <p>
                    All materials on this site, including text, graphics,
                    databases, HTML code, and other intellectual property, are
                    protected under International Copyright Laws. They may not
                    be copied, reprinted, published, re-engineered, hosted,
                    translated, or distributed without explicit permission.
                    Trademarks are property of their respective owners and used
                    with permission.
                  </p>
                  <p>
                    Products and services are for educational and entertainment
                    purposes only. No income is guaranteed. Additional purchases
                    may be required to start a business. All decisions are made
                    at your own discretion.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-lg mb-2">
                    Database Ownership, License, and Use
                  </h4>
                  <p>
                    You may use information obtained from this site only for
                    private or internal purposes. You may not sell, reproduce,
                    redistribute, or publish any part of the databases in any
                    form. Unauthorized use may result in legal action.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-lg mb-2">Liability</h4>
                  <p>
                    Materials are provided "as is" without warranties of any
                    kind. Ledgify Solutions LLC does not guarantee uninterrupted
                    or error-free functionality, nor assume liability for
                    damages arising from use. Applicable laws may limit
                    exclusions or limitations of liability.
                  </p>
                  <p>
                    Total liability shall not exceed the amount paid, if any,
                    for accessing products or services from this site.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-lg mb-2">
                    Accuracy of Information
                  </h4>
                  <p>
                    Information on this website is believed accurate at the time
                    of posting. Content is for informational purposes and does
                    not constitute legal, financial, or tax advice. Services are
                    offered only where legally permitted.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-lg mb-2">Links and Marks</h4>
                  <p>
                    Links to third-party sites are for convenience only. Ledgify
                    Solutions LLC is not responsible for external content.
                    Trademarks, logos, and trade names displayed are the
                    property of their respective owners. Unauthorized use is
                    prohibited.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-lg mb-2">
                    Returns & Refund Policies
                  </h4>
                  <p>
                    Returnable products are covered by a 30-day money-back
                    guarantee. Services, coaching, webinars, seminars, and
                    proprietary software are eligible for refund within 30 days
                    from completion of services (see Refund Policy for details);
                    after the 30-day period they are generally non-refundable.
                    Please refer to product sales pages for additional details.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-lg mb-2">Confidentiality</h4>
                  <p>
                    Subscriber codes, usernames, passwords, and all information
                    accessed through password-protected areas must be kept
                    strictly confidential and not shared with others.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-lg mb-2">
                    Legal & Governing Law
                  </h4>
                  <p>
                    Terms apply to all access and use of this site. Ledgify
                    Solutions LLC may revise these Terms, with the revised
                    version applying immediately upon publication. Terms are
                    governed by U.S. law. Intellectual property violations may
                    result in legal action in U.S. courts.
                  </p>
                  <p>
                    Disputes will first attempt timely resolution. Unresolved
                    disputes will be submitted to confidential arbitration in
                    Manitoba, Canada, except for intellectual property
                    violations enforceable in U.S. courts under exclusive
                    jurisdiction.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-lg mb-2">Termination</h4>
                  <p>
                    Terms of Use remain effective until terminated. You may
                    terminate by destroying all materials obtained. The
                    agreement terminates immediately if you fail to comply with
                    any term.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-lg mb-2">
                    Copyright & Security
                  </h4>
                  <p>
                    All website content is protected by international copyright
                    laws. Unauthorized use will result in legal action. Payments
                    and personal information are protected via SSL encryption.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-lg mb-2">Contact</h4>
                  <p>
                    For any questions regarding these Terms & Conditions, email
                    us at{" "}
                    <a
                      href="mailto:info@ledgifysolutions.com"
                      className="text-emerald-700 underline"
                    >
                      info@ledgifysolutions.com
                    </a>
                    .
                  </p>
                </section>
              </div>

              {/* Close Button */}
              <div className="mt-6 text-right">
                <button
                  onClick={() => setIsTermsOpen(false)}
                  className="px-6 py-2 bg-emerald-900 text-white rounded-lg font-bold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {isPrivacyOpen && (
          <div className="fixed inset-0 z-[101] flex items-center justify-center">
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsPrivacyOpen(false)}
            ></div>

            {/* Modal */}
            <div className="relative bg-white rounded-2xl max-w-4xl w-[90%] p-8 shadow-2xl z-10">
              {/* Header */}
              <h3 className="text-2xl text-emerald-700 font-black mb-6">
                Privacy Policy
              </h3>

              {/* Scrollable Content */}
              <div className="text-slate-700 max-h-[70vh] overflow-y-auto space-y-6">
                <section>
                  <h4 className="font-bold text-lg mb-2">
                    Notice – Read This Page
                  </h4>
                  <p>
                    If you do not agree to these Terms, discontinue using the
                    site immediately!
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-lg mb-2">Introduction</h4>
                  <p>
                    Company/Seller (herein referred to as "this Site") strives
                    to offer its visitors the advantages of Internet technology
                    and to provide an interactive and personalized experience.
                    LedgifySolutions LLC may use Personally Identifiable
                    Information (your name, e-mail address, street address,
                    telephone number) subject to the terms of this privacy
                    policy. We will never sell, barter, or rent your email
                    address to any unauthorized third party. WE HATE SPAM!
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-lg mb-2">
                    Information Collection
                  </h4>
                  <p>
                    How we collect and store information depends on the page you
                    are visiting, the activities in which you participate, and
                    the services provided. This may include registration,
                    newsletters, purchases, contests, chat areas, and other
                    interactive areas. We may also collect information
                    automatically via cookies and other tools.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-lg mb-2">
                    Use of Collected Information
                  </h4>
                  <p>
                    Information is collected to enhance your experience and
                    deliver more personalized content and advertising.
                    Aggregated data may be used for analytics to improve our
                    site and services. Personal information may be used to
                    communicate about your registration, customization
                    preferences, services, and other topics of interest. We do
                    not sell your email or credit card information.
                  </p>
                  <p>
                    Your information may also be used for site administration,
                    e-commerce processing, contests, or communications. Certain
                    technical third parties may access your data as required by
                    law or for operational purposes.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-lg mb-2">
                    Third Parties, Ads, and Affiliated Sites
                  </h4>
                  <p>
                    Third-party partners, advertisers, and affiliates may have
                    their own data collection practices. We are not responsible
                    for their privacy policies. Cookies and other tracking
                    technologies may be used by advertisers and partners.
                    Information you voluntarily disclose on message boards or
                    chat areas may be collected and used by third parties.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-lg mb-2">
                    Compliance with Laws
                  </h4>
                  <p>
                    <strong>Online Privacy Protection Act:</strong> We comply
                    with the Act and will not distribute personal information
                    without consent.
                    <strong>
                      Children's Online Privacy Protection Act (COPPA):
                    </strong>{" "}
                    No information is collected from anyone under 13.
                    <strong>CAN-SPAM Act:</strong> We comply with anti-spam laws
                    and never send misleading information.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-lg mb-2">Contacting Us</h4>
                  <p>
                    Support is available Monday to Friday: 9am–7pm MST, Saturday
                    to Sunday: 10am–5pm MST. Phone and Chat support are
                    available during standard hours. Tickets are responded to
                    within 12 business hours. For privacy concerns, email us at{" "}
                    <a
                      href="mailto:info@ledgifysolutions.com"
                      className="text-emerald-700 underline"
                    >
                      info@ledgifysolutions.com
                    </a>
                    .
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-lg mb-2">
                    Governing Law & Dispute Resolution
                  </h4>
                  <p>
                    This policy and site use are governed by U.S. law. Disputes
                    will first attempt mediation, and if unsuccessful, binding
                    arbitration within the United States applies. This policy
                    does not create contractual or legal rights on behalf of any
                    party.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-lg mb-2">
                    Credit Card Security
                  </h4>
                  <p>
                    Payments and personal information are protected via
                    industry-standard SSL encryption. LedgifySolutions LLC does
                    not share customer information with third-party providers.
                  </p>
                </section>
              </div>

              {/* Close Button */}
              <div className="mt-6 text-right">
                <button
                  onClick={() => setIsPrivacyOpen(false)}
                  className="px-6 py-2 bg-emerald-900 text-white rounded-lg font-bold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
