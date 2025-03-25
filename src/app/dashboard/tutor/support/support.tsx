import React, { useState } from "react";

interface SupportItem {
  title: string;
  description: string;
  body: string;
}

interface HistoryItem {
  sn: number;
  dateTime: string;
  ticketId: string;
  issueCategory: string;
  status: string;
  lastUpdate: string;
}

const SupportDashboard: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const supportItems: SupportItem[] = [
    {
      title: "Course Creation Guide",
      description: "(How to structure, upload, and edit courses)",
      body: `
1. Structuring Your Course
• Define Objectives: Identify target audience & learning outcomes.
• Create Outline: Divide into modules (Introduction, Core Lessons, Assessments, Conclusion).
• Choose Formats: Video lectures, PDFs, quizzes, assignments, and discussion forums.

2. Uploading Your Course
• Upload Content: Ensure high-quality videos, structured lessons, and interactive elements.
• Set Pricing: Free, one-time payment, or subscription model.

3. Editing & Managing
• Update Content: Keep lessons relevant, improve UX, and add new resources.
• Track Progress: Use analytics to monitor engagement, respond to questions.
• Enhance Accessibility: Optimize video quality, add captions.

4. Launch & Promotion
• Pre-Launch: Build an email list, offer early access, create a landing page.
• Marketing: Use social media ads, SEO, influencers, and webinars.
• Optimize: Gather feedback, offer bonuses, and build a learner community.
      `.trim(),
    },
    {
      title: "Earnings & Payments",
      description: "(How earnings are calculated & withdrawal process)",
      body: `
1. Earnings Calculation
• Revenue Sharing: Percentage-based earnings from course sales.
• Pricing Tiers: Higher-priced courses earn more per sale.
• Bonus Structures: Additional earnings for high engagement and ratings.

2. Payment Methods
• Supported Platforms: PayPal, Bank Transfer, Cryptocurrency.
• Minimum Withdrawal: Set threshold for initiating payouts.
• Payment Frequency: Monthly or quarterly disbursements.

3. Financial Tracking
• Dashboard Insights: Real-time earnings and sales analytics.
• Tax Documentation: Generate necessary financial reports.
• Performance Metrics: Track revenue growth and student acquisition.

4. Blockchain Integration
• Transparent Transactions: Secure, verifiable payment records.
• Global Accessibility: Reduce international payment barriers.
• Smart Contract Payouts: Automated, trustless revenue distribution.
      `.trim(),
    },
    {
      title: "Student Engagement Tips",
      description: "(How to improve student interaction & ratings)",
      body: `
1. Course Design Strategies
• Interactive Content: Create engaging, multimedia-rich lessons.
• Clear Learning Paths: Provide structured, achievable milestones.
• Gamification: Implement badges, progress tracking, and rewards.

2. Communication Techniques
• Responsive Feedback: Quick and constructive responses to student queries.
• Discussion Forums: Encourage peer-to-peer learning and interaction.
• Live Q&A Sessions: Regular webinars or live chat support.

3. Continuous Improvement
• Student Surveys: Collect and act on feedback.
• Content Updates: Regularly refresh course materials.
• Performance Analytics: Monitor completion rates and student satisfaction.

4. Community Building
• Networking Opportunities: Connect students with industry professionals.
• Peer Study Groups: Facilitate collaborative learning environments.
• Success Stories: Showcase student achievements and testimonials.
      `.trim(),
    },
    {
      title: "Technical Issues",
      description: "(Troubleshooting course uploads, media files, etc.)",
      body: `
1. Content Upload Troubleshooting
• File Format Compatibility: Supported video, audio, and document types.
• Size Limitations: Maximum file sizes and compression guidelines.
• Metadata Management: Proper tagging and categorization.

2. Media Optimization
• Video Encoding: Recommended formats and quality settings.
• Subtitle/Caption Integration: Adding and syncing text overlays.
• Cross-Platform Compatibility: Ensuring content works on all devices.

3. Platform Technical Support
• Diagnostic Tools: Self-help troubleshooting resources.
• Technical Support Channels: Email, chat, and ticket-based assistance.
• Known Issues: Regularly updated list of platform limitations.

4. System Requirements
• Minimum Hardware Specs: Recommended devices for course creation.
• Software Compatibility: Supported operating systems and browsers.
• Network Considerations: Bandwidth and streaming recommendations.
      `.trim(),
    },
    {
      title: "Blockchain Integration Help",
      description: "(Understanding on-chain payments & certifications)",
      body: `
1. Blockchain Basics
• Cryptocurrency Payments: Supported digital currencies.
• Smart Contract Mechanisms: Automated course enrollment and payments.
• Decentralized Authentication: Secure student verification.

2. Course Certification
• NFT Certificates: Unique, verifiable digital credentials.
• Blockchain Verification: Immutable proof of course completion.
• Portable Credentials: Easy sharing and professional validation.

3. On-Chain Transactions
• Payment Processing: Direct, fee-reduced cryptocurrency transactions.
• Revenue Transparency: Real-time, auditable financial records.
• Global Accessibility: Overcome traditional banking limitations.

4. Technical Integration
• Wallet Connections: Supported blockchain wallets and networks.
• Security Protocols: Protecting student and instructor financial data.
• Future-Proofing: Adapting to emerging blockchain technologies.
      `.trim(),
    },
  ];

  const historyItems: HistoryItem[] = [
    {
      sn: 1,
      dateTime: "12th Dec, 2025",
      ticketId: "#12345",
      issueCategory: "Payment Issue",
      status: "Resolved",
      lastUpdate: "2025-02-19",
    },
    {
      sn: 2,
      dateTime: "12th Dec, 2025",
      ticketId: "#67890",
      issueCategory: "Course Upload Error",
      status: "Pending",
      lastUpdate: "2025-02-17",
    },
    {
      sn: 3,
      dateTime: "12th Dec, 2025",
      ticketId: "#24680",
      issueCategory: "Student Dispute",
      status: "Completed",
      lastUpdate: "2025-02-16",
    },
  ];

  return (
    <div className="min-h-screen bg-transparent mb-16 text-white p-6">
      <div className="mx-auto">
        <div className="mb-10">
          <h2 className="text-xl font-medium mb-4">Support</h2>

          <div className="space-y-1">
            {supportItems.map((item, index) => (
              <div key={index} className="border-b border-[#2D2E2D] py-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-sm">
                      {item.title}
                      <span className="text-gray-400 text-sm">
                        {item.description}
                      </span>
                    </h3>
                  </div>
                  <button
                    onClick={() => toggleExpand(index)}
                    className="bg-transparent border border-gray-700 px-3 py-1 text-xs rounded hover:bg-gray-800 transition"
                  >
                    Expand
                  </button>
                </div>

                {expandedItems[index] && (
                  <div className="mt-3 text-sm text-gray-300 whitespace-pre-wrap">
                    {item.body}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-medium mb-6">Action History Table</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm bg-[#161716]">
                  <th className="py-3 px-4 font-medium">SN</th>
                  <th className="py-3 px-4 font-medium">Date & Time</th>
                  <th className="py-3 px-4 font-medium">Ticket ID</th>
                  <th className="py-3 px-4 font-medium">Issue Category</th>
                  <th className="py-3 px-4 font-medium">Status</th>
                  <th className="py-3 px-4 font-medium">Last Update</th>
                </tr>
              </thead>
              <tbody>
                {historyItems.map((item) => (
                  <tr key={item.sn} className="border-b border-[#2D2E2D]">
                    <td className="py-4 px-4">{item.sn}</td>
                    <td className="py-4 px-4">{item.dateTime}</td>
                    <td className="py-4 px-4">{item.ticketId}</td>
                    <td className="py-4 px-4">{item.issueCategory}</td>
                    <td className="py-4 px-4">
                      <span className="inline-block rounded-full px-2 py-1 text-xs text-[#4B4B4B]">
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">{item.lastUpdate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportDashboard;
