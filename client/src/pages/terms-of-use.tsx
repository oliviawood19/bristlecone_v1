import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        <div className="container-custom pt-32 pb-6 sm:pt-40 sm:pb-8">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-primary leading-tight max-w-3xl mx-auto">
            Terms of Use
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
                  <p>
                    By accessing or using the website located at{" "}
                    <a href="https://www.bristleconecompanies.com/" className="text-primary hover:underline font-medium">www.bristleconecompanies.com</a>
                    {" "}and any related pages, features, content, or services (collectively, the "Site"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree with these Terms, do not access or use the Site.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">1. Eligibility and Scope</h2>
                  <div className="space-y-4">
                    <p>
                      <strong>1.1 General Use.</strong> You may access and use the Site only if you do so in compliance with these Terms. The Site is intended for adults and professionals, including business owners, operators, advisors, and other corporate counterparties. The Site does not require you to create an account or enter into any transaction with Bristlecone.
                    </p>
                    <p>
                      <strong>1.2 Use on Behalf of an Organization.</strong> If you access the Site on behalf of a business or organization, your use does not, by itself, create any agreement or relationship between Bristlecone and that organization. If you submit information on behalf of an organization, you represent you are authorized to do so.
                    </p>
                    <p>
                      <strong>1.3 Geographic and Regulatory Restrictions.</strong> The Site is controlled and operated from the United States. Nothing on the Site should be construed as an intention to market any securities, investment services, or investment opportunities in any jurisdiction where such offers are prohibited by applicable law. You are solely responsible for compliance with laws applicable in your jurisdiction.
                    </p>
                    <p>
                      <strong>1.4 Binding Agreement.</strong> These Terms form a binding agreement between you and Bristlecone. Each time you access or use the Site, you confirm your agreement to the then-current version of these Terms.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">2. Informational Purposes Only – No Offer, No Advice</h2>
                  <div className="space-y-4">
                    <p>
                      <strong>2.1 General Informational Content.</strong> All content on the Site is provided solely for informational purposes. Bristlecone does not represent or warrant that any information on the Site is complete, accurate, reliable, updated, or appropriate for any particular purpose, and is under no obligation to update or correct any Site content.
                    </p>
                    <p>
                      <strong>2.2 No Offer or Solicitation.</strong> Descriptions of Bristlecone's business activities, including evaluation and acquisition of businesses, do not constitute offers or solicitations to sell or buy securities or investment advisory services in any jurisdiction. Any offering of interests in any investment vehicle will be made only through formal offering materials provided to eligible investors in compliance with applicable law.
                    </p>
                    <p>
                      <strong>2.3 No Investment, Legal, Tax, or Other Advice.</strong> The Site does not provide investment, legal, tax, accounting, or other professional advice, and you agree not to rely on the Site or its content for such purposes. Use of the Site does not create any advisory, fiduciary, or professional relationship between you and Bristlecone.
                    </p>
                    <p>
                      <strong>2.4 No Client or Fiduciary Relationship.</strong> Access to or use of the Site does not create any contractual, fiduciary, advisory, professional services, or client relationship. No relationship will exist unless and until a formal written agreement is executed by authorized representatives.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">3. Forward-Looking Statements and Past Performance</h2>
                  <div className="space-y-4">
                    <p>
                      <strong>3.1 Forward-Looking Statements.</strong> The Site may contain projections, estimates, or forward-looking statements. These are based on current expectations and assumptions and involve risks, uncertainties, and contingencies that are difficult to predict. Actual outcomes may differ materially and Bristlecone undertakes no obligation to update any forward-looking statements.
                    </p>
                    <p>
                      <strong>3.2 Past Performance and Prior Activities.</strong> References to past acquisitions, transactions, or results are provided for illustrative purposes only. Past performance is not indicative of future results, and no user should assume future performance based on historical examples.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">4. Testimonials, Case Studies & Third-Party Statements</h2>
                  <div className="space-y-4">
                    <p>
                      <strong>4.1 Individual Experiences Only.</strong> The Site may include testimonials, endorsements, or case studies. These represent individual views and are not guarantees of any particular outcome.
                    </p>
                    <p>
                      <strong>4.2 No Compensation or Endorsements.</strong> Unless disclosed, testimonials are unsolicited and individuals providing them are not compensated. Ongoing relationships (e.g., as partners or advisors) may create potential bias, and testimonials should not be relied on for any decisions.
                    </p>
                    <p>
                      <strong>4.3 Third-Party Content.</strong> Third-party content (quotes, links, data) is provided "as is." Bristlecone does not verify, endorse, or guarantee the accuracy or completeness of such content and disclaims liability for its use.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">5. Permitted and Prohibited Uses</h2>
                  <div className="space-y-4">
                    <p>
                      <strong>5.1 Permitted Use.</strong> You may access and use the Site solely for lawful purposes and to obtain general information about Bristlecone.
                    </p>
                    <p>
                      <strong>5.2 Prohibited Use.</strong> You agree <strong>not</strong> to, directly or indirectly:
                    </p>
                    <div className="pl-4 space-y-2">
                      <p>a. Violate any applicable law or regulation;</p>
                      <p>b. Transmit unlawful, harmful, defamatory, offensive, or infringing content;</p>
                      <p>c. Attempt unauthorized access to the Site or related systems;</p>
                      <p>d. Interfere with Site operations;</p>
                      <p>e. Use automated means, such as robots or scrapers, without written permission;</p>
                      <p>f. Reverse engineer the Site;</p>
                      <p>g. Infringe on intellectual property or privacy rights; or</p>
                      <p>h. Copy, reproduce, or distribute Site content except as expressly permitted.</p>
                    </div>
                    <p>Bristlecone may suspend or terminate access if it believes these Terms have been violated.</p>
                  </div>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">6. Intellectual Property and Limited License</h2>
                  <div className="space-y-4">
                    <p>
                      <strong>6.1 Ownership.</strong> The Site and all content — including text, graphics, logos, images, designs, and software — are owned by or licensed to Bristlecone and protected under copyright, trademark, and other intellectual property laws.
                    </p>
                    <p>
                      <strong>6.2 Limited License.</strong> Subject to your compliance with these Terms, you are granted a limited, non-exclusive, revocable, non-transferable license to access and use the Site for personal or internal business purposes only.
                    </p>
                    <p><strong>6.3 Restrictions.</strong> Except as expressly permitted, you will not:</p>
                    <ul className="list-disc pl-6 space-y-1.5 marker:text-primary/50">
                      <li>Copy, modify, create derivative works from, display, or distribute Site content;</li>
                      <li>Remove or obscure any proprietary notices;</li>
                      <li>Use Bristlecone trademarks without prior written consent;</li>
                      <li>Frame or link to the Site in a manner implying endorsement.</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">7. Downloadable Materials and Resources</h2>
                  <p>
                    The Site may provide downloadable materials (e.g., whitepapers, documents). You may download these for personal or internal business use only. Such materials are provided "as is" and Bristlecone assumes no obligation to update them.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">8. Job Opportunities and Recruiting</h2>
                  <p>
                    Job postings on the Site are informational and do not constitute offers of employment or guarantees of positioning or compensation. Recruiting and employment relationships are governed by separate agreements and policies.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">9. User Submissions & Communications</h2>
                  <div className="space-y-4">
                    <p>
                      <strong>9.1 Accuracy and Authorization.</strong> If you submit information via contact forms, you represent it is accurate and that you have the authority to provide it.
                    </p>
                    <p>
                      <strong>9.2 Non-Confidential Communications.</strong> Except as set forth in the Privacy Policy, information you submit is non-confidential and Bristlecone has no obligations regarding such submissions.
                    </p>
                    <p>
                      <strong>9.3 Security.</strong> Electronic communications may not be secure; do not submit sensitive, proprietary, or highly confidential information (including material non-public information).
                    </p>
                    <p>
                      <strong>9.4 License to Use Submitted Content.</strong> You grant Bristlecone a worldwide, non-exclusive, royalty-free, irrevocable license to use, reproduce, modify, and distribute any non-personal information you submit for legitimate business purposes.
                    </p>
                    <p>
                      <strong>9.5 No Sensitive Information.</strong> Do not submit trade secrets, material non-public information, personal financial data, protected health information, confidential plans, or proprietary code. Bristlecone disclaims liability for submissions violating this.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">10. Third-Party Content and Links</h2>
                  <p>
                    The Site may link to third-party websites or resources. These are provided for convenience; Bristlecone is not responsible for their content, policies, or practices and does not endorse them.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">11. Privacy and Cookies</h2>
                  <p>
                    Your use of the Site is governed by Bristlecone's Privacy Policy, which describes data collection and use practices. Continued use indicates consent to cookies and similar technologies as described in that policy.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">12. No Warranties</h2>
                  <p>
                    THE SITE AND CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF ANY KIND. Bristlecone disclaims all warranties, whether express, implied, or statutory, including but not limited to warranties of merchantability, fitness for a particular purpose, accuracy, completeness, or non-infringement.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">13. Limitation of Liability</h2>
                  <p>
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, BRISTLECONE AND ITS AFFILIATES WILL NOT BE LIABLE TO YOU FOR INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, PUNITIVE, OR EXEMPLARY DAMAGES OR LOST PROFITS ARISING FROM YOUR USE OF THE SITE. If liability cannot be excluded, Bristlecone's total liability will not exceed $100.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">14. Indemnification</h2>
                  <p>
                    You agree to indemnify, defend, and hold harmless Bristlecone and its officers, directors, employees, agents, and affiliates from claims, damages, liabilities, losses, and expenses arising out of (a) your use of the Site, (b) your violation of these Terms, or (c) your violation of applicable law or third-party rights.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">15. Changes to the Site and Terms</h2>
                  <p>
                    Bristlecone may modify, update, or discontinue any part of the Site at any time without notice. It may also amend these Terms from time to time; your continued use of the Site after posting of updated Terms constitutes acceptance of those changes.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">16. Termination</h2>
                  <p>
                    Bristlecone may suspend or terminate your access to the Site (in whole or in part) at any time without notice for any reason, especially if these Terms are violated. Certain provisions (e.g., Sections 2, 5, 6, 9, 13, and 14) will survive termination.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">17. Governing Law and Jurisdiction</h2>
                  <p>
                    These Terms and any dispute arising out of or relating to them or the Site are governed by the laws of the State of Delaware, excluding conflict-of-laws principles. You and Bristlecone agree that any legal action shall be brought exclusively in the state or federal courts located in <strong>Wilmington, Delaware</strong>, and consent to personal jurisdiction and venue in those courts.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">18. Miscellaneous</h2>
                  <p>
                    These Terms, together with the Privacy Policy and any cookies policies, are the entire agreement between you and Bristlecone regarding your use of the Site. If any provision is invalid, the remainder will remain in effect. No waiver will be deemed a further waiver. You may not assign these Terms without prior written consent, and headings are for convenience only.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl sm:text-2xl text-primary mb-4">Contact Us</h2>
                  <div className="space-y-4">
                    <p>If you have questions about these Terms, please contact:</p>
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
