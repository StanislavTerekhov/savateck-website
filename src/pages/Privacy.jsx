import { Link } from 'react-router-dom'

const EFFECTIVE_DATE = 'June 8, 2025'
const CONTACT_EMAIL = 'legal@savateck.com'
const COMPANY = 'Savateck LLC'

export default function Privacy() {
  return (
    <div className="page-shell">
      <div className="legal-page">
        <div className="container">

          {/* Header */}
          <div className="legal-header">
            <span className="label">Legal</span>
            <h1 className="legal-title">Privacy Policy</h1>
            <p className="legal-meta">Effective date: {EFFECTIVE_DATE} &nbsp;·&nbsp; Last updated: {EFFECTIVE_DATE}</p>
          </div>

          <div className="legal-body">

            {/* Intro */}
            <p>
              {COMPANY} ("<strong>Savateck</strong>", "<strong>we</strong>", "<strong>our</strong>", or "<strong>us</strong>")
              operates the <strong>savateck.com</strong> website and the following products: <strong>Ruedio</strong> (a
              mobile marketplace connecting customers with vetted automotive service providers), <strong>Ruedio Task</strong>
              (a provider‑facing app for managing jobs and earnings), and <strong>Halla CRM</strong> (an operations
              platform for managing bookings and workflows). This Privacy Policy describes how we collect, use, share, and
              protect information about you when you use any of these services (collectively, the "<strong>Services</strong>").
            </p>

            <p>
              By using the Services you agree to this Policy. If you do not agree, please do not use the Services.
            </p>

            {/* 1 */}
            <h2>1. Information We Collect</h2>

            <h3>1.1 Information you provide directly</h3>
            <ul>
              <li><strong>Account data</strong> — name, email address, and mobile phone number when you register.</li>
              <li><strong>Profile data</strong> — vehicle details, service address, or provider credentials you add to your profile.</li>
              <li><strong>Payment data</strong> — billing address and card details submitted during checkout. Card numbers are processed and stored exclusively by <strong>Stripe</strong> and are never stored on Savateck servers.</li>
              <li><strong>Communications</strong> — messages you send to support or through in‑app chat.</li>
            </ul>

            <h3>1.2 Information collected automatically</h3>
            <ul>
              <li><strong>Usage data</strong> — pages visited, features used, timestamps, and error logs.</li>
              <li><strong>Device data</strong> — browser type, operating system, IP address, and approximate geolocation (city/region level).</li>
              <li><strong>Location data</strong> — precise GPS coordinates when you grant location permission in the Ruedio mobile app, used solely to dispatch nearby providers.</li>
            </ul>

            <h3>1.3 Information from third parties</h3>
            <ul>
              <li>Identity verification data from background‑check partners for provider onboarding.</li>
              <li>Payment status updates from <strong>Stripe</strong>.</li>
            </ul>

            {/* 2 */}
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Create and manage your account.</li>
              <li>Match customers with available service providers.</li>
              <li>Process and track bookings through their full lifecycle.</li>
              <li>Send you transactional SMS messages — including one‑time passcodes (OTP) for authentication and booking status updates (see Section 4 for your opt‑out rights).</li>
              <li>Process payments and prevent fraud.</li>
              <li>Respond to support requests and disputes.</li>
              <li>Improve the Services through analytics and product research.</li>
              <li>Comply with legal obligations.</li>
            </ul>
            <p>
              We do <strong>not</strong> sell your personal information. We do <strong>not</strong> use your data for
              third‑party advertising or marketing purposes.
            </p>

            {/* 3 */}
            <h2>3. How We Share Your Information</h2>

            <h3>3.1 With service providers</h3>
            <p>
              We share data with trusted vendors who help us operate the Services, including:
            </p>
            <ul>
              <li><strong>Twilio</strong> — SMS delivery for OTP codes and booking notifications.</li>
              <li><strong>Stripe</strong> — payment processing.</li>
              <li><strong>Supabase / PostgreSQL</strong> — database and authentication infrastructure.</li>
              <li><strong>Google Cloud</strong> — hosting and compute infrastructure.</li>
              <li><strong>Vercel</strong> — website delivery.</li>
            </ul>
            <p>These vendors process data only as instructed by us and are bound by confidentiality obligations.</p>

            <h3>3.2 With independent service providers (Ruedio)</h3>
            <p>
              When you book a service, we share your name, service address, and relevant vehicle details with the
              assigned provider so they can fulfil the booking. Providers are independent contractors, not Savateck
              employees.
            </p>

            <h3>3.3 Legal and safety disclosures</h3>
            <p>
              We may disclose information if required by law, court order, or to protect the rights, property, or
              safety of Savateck, our users, or the public.
            </p>

            <h3>3.4 Business transfers</h3>
            <p>
              In connection with a merger, acquisition, or sale of assets, user data may be transferred as part of
              the transaction. We will notify users via email or a prominent notice on the website before such a
              transfer takes effect.
            </p>

            {/* 4 */}
            <h2>4. SMS Communications &amp; Opt‑Out</h2>
            <p>
              By providing your mobile phone number and completing registration, you consent to receive
              transactional SMS messages from Savateck, including:
            </p>
            <ul>
              <li>One‑time passcodes (OTP) for account login and verification.</li>
              <li>Booking confirmation and status updates.</li>
            </ul>
            <p>
              <strong>Message and data rates may apply.</strong> Message frequency depends on your activity.
            </p>
            <p>
              <strong>To opt out</strong>, reply <strong>STOP</strong> to any SMS from us at any time.
              After opting out you will no longer receive SMS notifications, but you can still log in via email.
              Reply <strong>HELP</strong> for assistance or contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
            <p>
              We do not send promotional or marketing SMS messages. All messages are transactional and directly
              related to your account activity.
            </p>

            {/* 5 */}
            <h2>5. Cookies and Tracking</h2>
            <p>
              We use essential cookies and local storage to keep you logged in and remember your preferences. We do
              not use advertising or tracking cookies. You can disable cookies in your browser settings, but some
              features may not function correctly.
            </p>

            {/* 6 */}
            <h2>6. Data Retention</h2>
            <p>
              We retain your data for as long as your account is active or as needed to provide the Services. After
              account deletion we may retain certain data for up to 90 days for fraud prevention and legal compliance,
              after which it is permanently deleted or anonymised.
            </p>

            {/* 7 */}
            <h2>7. Data Security</h2>
            <p>
              We implement industry‑standard safeguards including TLS encryption in transit, encrypted storage at
              rest, and access controls. No system is 100 % secure; if you suspect a security incident, please
              contact us immediately at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>

            {/* 8 */}
            <h2>8. Your Rights</h2>
            <p>
              Depending on your jurisdiction you may have the right to:
            </p>
            <ul>
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your data ("right to be forgotten").</li>
              <li>Object to or restrict certain processing.</li>
              <li>Port your data to another service.</li>
            </ul>
            <p>
              To exercise any of these rights, email us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              We will respond within 30 days.
            </p>

            {/* 9 */}
            <h2>9. Children's Privacy</h2>
            <p>
              The Services are not directed to children under 18. We do not knowingly collect personal information
              from children. If you believe a child has provided us with data, please contact us and we will delete it.
            </p>

            {/* 10 */}
            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material changes by posting
              the new policy on this page and, where appropriate, sending you an email. Continued use of the Services
              after the effective date constitutes acceptance of the updated policy.
            </p>

            {/* 11 */}
            <h2>11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or how your data is handled, please contact:
            </p>
            <div className="legal-contact-card">
              <p><strong>{COMPANY}</strong></p>
              <p>Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
              <p>Website: <a href="https://savateck.com">savateck.com</a></p>
            </div>

            {/* Footer nav */}
            <div className="legal-page-nav">
              <Link to="/terms" className="legal-page-nav-link">View Terms &amp; Conditions →</Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
