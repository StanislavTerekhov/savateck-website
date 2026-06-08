import { Link } from 'react-router-dom'

const EFFECTIVE_DATE = 'June 8, 2025'
const CONTACT_EMAIL = 'legal@savateck.com'
const COMPANY = 'Savateck LLC'

export default function Terms() {
  return (
    <div className="page-shell">
      <div className="legal-page">
        <div className="container">

          {/* Header */}
          <div className="legal-header">
            <span className="label">Legal</span>
            <h1 className="legal-title">Terms &amp; Conditions</h1>
            <p className="legal-meta">Effective date: {EFFECTIVE_DATE} &nbsp;·&nbsp; Last updated: {EFFECTIVE_DATE}</p>
          </div>

          <div className="legal-body">

            {/* Intro */}
            <p>
              These Terms and Conditions ("<strong>Terms</strong>") govern your access to and use of any product or
              service offered by <strong>{COMPANY}</strong> ("<strong>Savateck</strong>", "<strong>we</strong>",
              "<strong>our</strong>", or "<strong>us</strong>"), including the <strong>Ruedio</strong> customer app,{' '}
              <strong>Ruedio Task</strong> provider app, and <strong>Halla CRM</strong> platform
              (collectively, the "<strong>Services</strong>").
            </p>
            <p>
              By accessing or using the Services you confirm that you are at least 18 years old, have read and
              understood these Terms, and agree to be bound by them. If you do not agree, please do not use the
              Services.
            </p>

            {/* 1 */}
            <h2>1. About Savateck and the Platform</h2>
            <p>
              Savateck is a technology company that builds and operates software tools for service businesses.
              Our platform connects <strong>customers</strong> who need services with independent
              <strong> service providers</strong> who fulfil those services.
            </p>
            <ul>
              <li>
                <strong>Ruedio</strong> — a marketplace app for on‑demand and scheduled automotive services
                (detailing, oil changes, tire swaps, battery replacement, roadside assistance, and more).
                Customers book in the app; providers travel to the customer's location.
              </li>
              <li>
                <strong>Ruedio Task</strong> — a standalone interface for providers to manage their tasks,
                earnings, schedule, and profile.
              </li>
              <li>
                <strong>Halla CRM</strong> — a cloud‑based operations platform used by Savateck administrators
                to track and manage bookings across their full lifecycle.
              </li>
            </ul>
            <p>
              <strong>Savateck acts solely as a technology platform.</strong> We do not ourselves provide
              automotive or any other professional services. Services are performed exclusively by independent
              contractors who use the platform, and Savateck is not responsible for the quality, safety, or
              legality of services performed by those contractors. See Section 7 for details.
            </p>

            {/* 2 */}
            <h2>2. Accounts and Registration</h2>

            <h3>2.1 Creating an account</h3>
            <p>
              You must create an account to use most features of the Services. You agree to provide accurate,
              current, and complete information and to keep it updated. You are responsible for all activity that
              occurs under your account.
            </p>

            <h3>2.2 Authentication via SMS OTP</h3>
            <p>
              We verify your identity using one‑time passcodes (OTP) sent by SMS to your registered phone number.
              By registering you consent to receive these transactional SMS messages. Standard message and data
              rates may apply. Reply <strong>STOP</strong> to opt out (see our{' '}
              <Link to="/privacy">Privacy Policy</Link> for details).
            </p>

            <h3>2.3 Account security</h3>
            <p>
              Keep your login credentials confidential. Notify us immediately at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> if you suspect unauthorised access.
            </p>

            <h3>2.4 Account termination</h3>
            <p>
              You may delete your account at any time via the app settings. We reserve the right to suspend or
              terminate accounts that violate these Terms, engage in fraud, or harm other users or the platform.
            </p>

            {/* 3 */}
            <h2>3. Prohibited Activities</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Services for any unlawful purpose or in violation of applicable law.</li>
              <li>Impersonate any person or misrepresent your identity or qualifications.</li>
              <li>Post, transmit, or distribute offensive, defamatory, or infringing content.</li>
              <li>Attempt to gain unauthorised access to any part of the platform or its infrastructure.</li>
              <li>Use automated tools (bots, scrapers) to collect data from the Services without permission.</li>
              <li>Interfere with or disrupt the integrity or performance of the Services.</li>
            </ul>
            <p>
              Violations may result in immediate suspension or termination of your account and, where applicable,
              legal action.
            </p>

            {/* 4 */}
            <h2>4. Booking Services (Ruedio)</h2>

            <h3>4.1 Booking process</h3>
            <p>
              Customers select a service, choose a date and time, and submit a booking request through the Ruedio
              app. Savateck's platform matches the request with an available provider. A booking is confirmed when
              a provider accepts the request.
            </p>

            <h3>4.2 Booking statuses</h3>
            <p>
              Bookings pass through the following stages: <em>pending → matching → confirmed → in‑progress →
              completed</em>. A booking may also enter <em>cancelled</em> or <em>disputed</em> states. The Halla
              CRM platform allows our operations team to monitor and intervene at any stage.
            </p>

            <h3>4.3 Customer responsibilities</h3>
            <p>
              You agree to provide safe and reasonable access to your vehicle and the service location at the
              agreed time. You are responsible for ensuring that the vehicle and location information you provide
              is accurate.
            </p>

            {/* 5 */}
            <h2>5. Payments and Fees</h2>

            <h3>5.1 Payment processing</h3>
            <p>
              Payments are processed securely through <strong>Stripe</strong>. By submitting payment information
              you authorise Savateck (via Stripe) to charge the selected payment method for the agreed service fee
              and any applicable taxes. Funds may be pre‑authorised at booking and captured upon completion.
            </p>

            <h3>5.2 Pricing</h3>
            <p>
              Service prices are displayed in the app before you confirm a booking. Savateck reserves the right
              to adjust pricing at any time; the price shown at booking confirmation is final for that booking.
            </p>

            <h3>5.3 Cancellations and refunds</h3>
            <p>
              You may cancel a booking before the provider begins travel to your location. Cancellation and refund
              policies are displayed during booking and may vary by service type. Savateck reserves the right to
              charge a cancellation fee for late cancellations.
            </p>

            <h3>5.4 Disputes</h3>
            <p>
              If you believe a charge is incorrect or a service was not delivered as described, contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> within 7 days. We will investigate and
              respond within 10 business days.
            </p>

            {/* 6 */}
            <h2>6. Provider Terms (Ruedio Task)</h2>
            <p>
              Providers using Ruedio Task are independent contractors, not employees, agents, or partners of
              Savateck. By registering as a provider you agree to:
            </p>
            <ul>
              <li>Hold all required licences, certifications, and insurance for the services you offer.</li>
              <li>Accurately represent your qualifications and capabilities.</li>
              <li>Perform services professionally, safely, and as described in the booking.</li>
              <li>Comply with all applicable laws, including those governing labour, tax, and data privacy.</li>
            </ul>
            <p>
              Savateck screens providers before onboarding but does not continuously supervise their work.
              Providers are solely responsible for their service quality, safety standards, and any damage or
              injury resulting from their work.
            </p>

            {/* 7 */}
            <h2>7. Platform Role and Limitation of Liability</h2>

            <h3>7.1 Platform only</h3>
            <p>
              Savateck provides technology infrastructure that facilitates connections between customers and
              independent providers. <strong>We are not a party to the service agreement between a customer and
              a provider</strong>, and we are not responsible for the outcome, quality, timeliness, or safety of
              any service performed.
            </p>

            <h3>7.2 No warranties</h3>
            <p>
              The Services are provided "<strong>as is</strong>" and "<strong>as available</strong>" without
              warranties of any kind, express or implied, including warranties of merchantability, fitness for a
              particular purpose, non‑infringement, or continuous availability.
            </p>

            <h3>7.3 Limitation of liability</h3>
            <p>
              To the maximum extent permitted by law, Savateck shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, including loss of profits, data, goodwill, or other
              intangible losses, arising from your use of or inability to use the Services.
            </p>
            <p>
              Our total aggregate liability for any claim arising out of or relating to these Terms or the Services
              is limited to the greater of <strong>$100 USD</strong> or the amount you paid to Savateck in the
              30 days preceding the event giving rise to the claim.
            </p>

            <h3>7.4 Risk acknowledgement</h3>
            <p>
              You acknowledge that automotive and other on‑location services involve inherent risks. You agree to
              provide safe access and assume all risks associated with allowing a provider access to your vehicle
              or property, except to the extent directly caused by Savateck's intentional misconduct.
            </p>

            {/* 8 */}
            <h2>8. Intellectual Property</h2>

            <h3>8.1 Savateck IP</h3>
            <p>
              All content, trademarks, logos, software, and product names on the Services are the exclusive
              property of Savateck or its licensors. Nothing in these Terms grants you any right to use Savateck's
              intellectual property other than as necessary to use the Services as intended.
            </p>

            <h3>8.2 User content</h3>
            <p>
              If you submit content to the Services (reviews, photos, feedback), you grant Savateck a worldwide,
              non‑exclusive, royalty‑free licence to use, reproduce, display, and distribute that content solely
              for the purpose of operating and improving the Services. You retain ownership of your content.
            </p>

            {/* 9 */}
            <h2>9. Privacy</h2>
            <p>
              Your use of the Services is also governed by our{' '}
              <Link to="/privacy">Privacy Policy</Link>, which is incorporated into these Terms by reference.
              Please read it carefully — it explains how we collect, use, and protect your personal information,
              including SMS communications.
            </p>

            {/* 10 */}
            <h2>10. Changes to These Terms</h2>
            <p>
              We may modify these Terms at any time. When we do, we will update the "Last updated" date at the
              top of this page and, for material changes, notify you by email. Continued use of the Services
              after the effective date of updated Terms constitutes acceptance.
            </p>

            {/* 11 */}
            <h2>11. Governing Law and Disputes</h2>
            <p>
              These Terms are governed by the laws of the State of <strong>Delaware, United States</strong>,
              without regard to its conflict‑of‑law provisions. Any dispute arising from these Terms shall be
              resolved by binding arbitration administered by a mutually agreed arbitration body, except that
              either party may seek injunctive relief in a court of competent jurisdiction.
            </p>

            {/* 12 */}
            <h2>12. Contact Us</h2>
            <p>
              Questions about these Terms? Please reach out to:
            </p>
            <div className="legal-contact-card">
              <p><strong>{COMPANY}</strong></p>
              <p>Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
              <p>Website: <a href="https://savateck.com">savateck.com</a></p>
            </div>

            {/* Footer nav */}
            <div className="legal-page-nav">
              <Link to="/privacy" className="legal-page-nav-link">View Privacy Policy →</Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
