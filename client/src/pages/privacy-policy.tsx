import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        <div className="container-custom pt-32 pb-6 sm:pt-40 sm:pb-8">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-primary leading-tight max-w-3xl mx-auto">
            Privacy Policy
          </h1>
        </div>

        <div className="container-custom pb-16 sm:pb-24">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/60 border border-border/60 rounded-2xl p-6 sm:p-10 md:p-12 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              <p className="text-sm text-muted-foreground mb-8 pb-6 border-b border-border/50">
                <strong>Last Updated: February 24, 2026</strong>
              </p>

              <div className="space-y-12 text-foreground/85 leading-relaxed text-[15px] sm:text-base">

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">1. Introduction</h2>
                  <div className="space-y-4">
                    <p>
                      Bristlecone Companies, LLC ("Bristlecone," "we," "us," or "our") respects your privacy and is committed to protecting personal information in a thoughtful, transparent, and responsible manner.
                    </p>
                    <p>
                      This Privacy Policy explains how we collect, use, disclose, and safeguard personal information when you visit{" "}
                      <a href="https://www.bristleconecompanies.com/" className="text-primary hover:underline font-medium">www.bristleconecompanies.com</a>
                      {" "}or any other website we operate that links to this Policy (collectively, the "Site"), or when you otherwise interact with us.
                    </p>
                    <p>
                      This Site is intended for founders, business owners, operators, job candidates, and other professional counterparties. It is not directed to consumers for personal or household use.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">2. Scope</h2>
                  <div className="space-y-4">
                    <p>This Privacy Policy applies to personal information collected:</p>
                    <ul className="list-disc pl-6 space-y-1.5 marker:text-primary/50">
                      <li>Through our website</li>
                      <li>Through email, contact forms, and other communications</li>
                      <li>In connection with business development, recruiting, and corporate activities</li>
                    </ul>
                    <p>This Policy does <strong>not</strong> apply to:</p>
                    <ul className="list-disc pl-6 space-y-1.5 marker:text-primary/50">
                      <li>Information collected by our portfolio companies (which operate under their own privacy policies)</li>
                      <li>Information governed by separate contractual agreements</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">3. Personal Information We Collect</h2>
                  <div className="space-y-6">
                    <p>We collect personal information in the following categories:</p>

                    <div>
                      <h3 className="font-semibold text-primary/80 text-base sm:text-lg mb-2">A. Information You Provide Directly</h3>
                      <p className="mb-2">You may provide us with:</p>
                      <ul className="list-disc pl-6 space-y-1.5 marker:text-primary/50">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Company name and title</li>
                        <li>Resume or employment history (if applying for a role)</li>
                        <li>Information about your business (if you contact us regarding a potential transaction)</li>
                        <li>Any other information you voluntarily submit</li>
                      </ul>
                      <p className="mt-3">You should not submit highly sensitive personal data unless specifically requested.</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary/80 text-base sm:text-lg mb-2">B. Information Collected Automatically</h3>
                      <p className="mb-2">When you visit our Site, we may automatically collect:</p>
                      <ul className="list-disc pl-6 space-y-1.5 marker:text-primary/50">
                        <li>IP address</li>
                        <li>Browser type and version</li>
                        <li>Device type and operating system</li>
                        <li>Pages viewed and referring URLs</li>
                        <li>Date and time of access</li>
                        <li>Interaction data (e.g., clicks, scroll depth)</li>
                      </ul>
                      <p className="mt-3">We may use cookies and similar technologies to collect this information. See Section 8 for more detail.</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary/80 text-base sm:text-lg mb-2">C. Information from Third Parties</h3>
                      <p className="mb-2">We may receive personal information from:</p>
                      <ul className="list-disc pl-6 space-y-1.5 marker:text-primary/50">
                        <li>Professional networking platforms</li>
                        <li>Public databases</li>
                        <li>Referrals</li>
                        <li>Service providers assisting with recruiting or sourcing</li>
                      </ul>
                      <p className="mt-3">We use such information only for legitimate business purposes.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">4. How We Use Personal Information</h2>
                  <div className="space-y-4">
                    <p>We use personal information to:</p>
                    <ul className="list-disc pl-6 space-y-1.5 marker:text-primary/50">
                      <li>Respond to inquiries</li>
                      <li>Evaluate potential business acquisitions</li>
                      <li>Communicate with founders, executives, and partners</li>
                      <li>Evaluate candidates for employment</li>
                      <li>Operate and improve our website</li>
                      <li>Maintain security and prevent fraud</li>
                      <li>Comply with legal obligations</li>
                      <li>Protect our rights and interests</li>
                    </ul>
                    <p>We do not sell personal information.</p>
                  </div>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">5. Legal Basis for Processing (EEA/UK Visitors)</h2>
                  <div className="space-y-4">
                    <p>If you are located in the European Economic Area or United Kingdom, we process personal information on the basis of:</p>
                    <ul className="list-disc pl-6 space-y-1.5 marker:text-primary/50">
                      <li>Legitimate interests (e.g., business development, recruiting)</li>
                      <li>Performance of a contract</li>
                      <li>Legal obligations</li>
                      <li>Consent (where required)</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">6. Disclosure of Personal Information</h2>
                  <div className="space-y-6">
                    <p>We may disclose personal information to:</p>

                    <div>
                      <h3 className="font-semibold text-primary/80 text-base sm:text-lg mb-2">A. Service Providers</h3>
                      <p className="mb-2">Third-party vendors who assist with:</p>
                      <ul className="list-disc pl-6 space-y-1.5 marker:text-primary/50">
                        <li>Website hosting</li>
                        <li>Analytics</li>
                        <li>IT support</li>
                        <li>Recruiting systems</li>
                        <li>Professional services (legal, accounting, compliance)</li>
                      </ul>
                      <p className="mt-3">These providers are contractually required to protect information.</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary/80 text-base sm:text-lg mb-2">B. Corporate Transactions</h3>
                      <p>In connection with mergers, acquisitions, financing transactions, or restructurings.</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary/80 text-base sm:text-lg mb-2">C. Legal Requirements</h3>
                      <p>When required by law, subpoena, regulation, or to protect rights, safety, and security.</p>
                    </div>

                    <p>We do not sell personal information or share it for cross-context behavioral advertising.</p>
                  </div>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">7. Data Retention</h2>
                  <div className="space-y-4">
                    <p>We retain personal information only as long as reasonably necessary to:</p>
                    <ul className="list-disc pl-6 space-y-1.5 marker:text-primary/50">
                      <li>Fulfill the purposes outlined in this Policy</li>
                      <li>Maintain business records</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                    <p>Retention periods vary depending on context (e.g., recruiting records vs. website analytics logs).</p>
                  </div>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">8. Cookies and Tracking Technologies</h2>
                  <div className="space-y-4">
                    <p>We use cookies and similar technologies to:</p>
                    <ul className="list-disc pl-6 space-y-1.5 marker:text-primary/50">
                      <li>Ensure website functionality</li>
                      <li>Analyze usage and performance</li>
                      <li>Improve user experience</li>
                    </ul>
                    <p>You may control cookies through your browser settings. Disabling cookies may affect functionality.</p>
                    <p>If required by law in your jurisdiction, we will present a cookie consent mechanism.</p>
                  </div>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">9. Data Security</h2>
                  <div className="space-y-4">
                    <p>We implement reasonable technical and organizational safeguards designed to protect personal information against unauthorized access, disclosure, alteration, and destruction.</p>
                    <p>However, no system can guarantee absolute security.</p>
                  </div>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">10. Your Rights</h2>
                  <div className="space-y-4">
                    <p>Depending on your jurisdiction, you may have the right to:</p>
                    <ul className="list-disc pl-6 space-y-1.5 marker:text-primary/50">
                      <li>Access personal information we hold about you</li>
                      <li>Request correction of inaccurate information</li>
                      <li>Request deletion</li>
                      <li>Object to or restrict processing</li>
                      <li>Request data portability</li>
                      <li>Withdraw consent where applicable</li>
                    </ul>
                    <p>To exercise your rights, contact us at:</p>
                    <p><strong><a href="mailto:info@bristleconecompanies.com" className="text-primary hover:underline">info@bristleconecompanies.com</a></strong></p>
                    <p>We may need to verify your identity before responding.</p>
                  </div>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">11. California Privacy Rights</h2>
                  <div className="space-y-4">
                    <p>If you are a California resident, you may have rights under the California Consumer Privacy Act (CCPA/CPRA), including:</p>
                    <ul className="list-disc pl-6 space-y-1.5 marker:text-primary/50">
                      <li>The right to know what personal information we collect</li>
                      <li>The right to request deletion</li>
                      <li>The right to correct inaccurate information</li>
                      <li>The right to limit use of sensitive personal information (if applicable)</li>
                      <li>The right not to be discriminated against for exercising privacy rights</li>
                    </ul>
                    <p>Bristlecone does not sell personal information.</p>
                    <p>Requests may be submitted to:</p>
                    <p><strong><a href="mailto:info@bristleconecompanies.com" className="text-primary hover:underline">info@bristleconecompanies.com</a></strong></p>
                  </div>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">12. International Transfers</h2>
                  <div className="space-y-4">
                    <p>Personal information may be transferred to and processed in the United States or other jurisdictions where we or our service providers operate.</p>
                    <p>Where required, we implement appropriate safeguards for cross-border transfers.</p>
                  </div>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">13. Children's Privacy</h2>
                  <p>Our Site is not directed to children under 16. We do not knowingly collect personal information from children.</p>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">14. Third-Party Links</h2>
                  <p>Our Site may contain links to third-party websites. We are not responsible for the privacy practices of those sites.</p>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">15. Changes to This Policy</h2>
                  <p>We may update this Privacy Policy periodically. Updates will be posted with a revised "Last Updated" date.</p>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">16. Contact Information</h2>
                  <div className="space-y-4">
                    <p>If you have questions about this Privacy Policy or our data practices, please contact:</p>
                    <div>
                      <p><strong>Bristlecone Companies</strong></p>
                      <p>Email: <a href="mailto:info@bristleconecompanies.com" className="text-primary hover:underline">info@bristleconecompanies.com</a></p>
                      <p className="mt-2">
                        1448 NW Market St., Ste. 500<br />
                        Seattle, WA 98107
                      </p>
                    </div>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
