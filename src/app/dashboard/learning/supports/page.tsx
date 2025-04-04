"use client"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import FaqItem from "./components/Faqitem";
import { useState } from "react";


const faqData = [
  { id: "faq-1",
    title: "Enrolling in a Course",
    descriptions: [
      "Find a Course: Browse available courses based on interests or career goals.",
      "Check Requirements: Review prerequisites, course syllabus, and learning objectives.",
      "Sign Up: Create an account or log in to enroll in the course.",
      "Select Payment Option: Choose between free, one-time payment, or subscription models.",
      "Confirm Enrollment: Complete the enrollment process and gain access to course materials."
    ]
  },
  {id: "faq-2",
    title: "Starting the Course",
    descriptions: [
      "Access Materials: Navigate through video lectures, PDFs, quizzes, and discussion forums.",
      "Set a Learning Schedule: Plan study time to stay on track with the course.",
      "Engage with Instructors & Peers: Participate in discussions, ask questions, and seek feedback."
    ]
  },
  {
    id: "faq-3",
    title: "Completing the Course",
    descriptions: [
      "Submit Assignments & Quizzes: Complete exercises to reinforce learning.",
      "Track Progress: Use the platform's dashboard to monitor completion status.",
      "Take Final Assessment: Pass required tests or projects to earn certification."
    ]
  },
  {
    id: "faq-4",
    title: "Post-Course Actions",
    descriptions: [
      "Receive Certification: Download and share your certificate on LinkedIn or resumes.",
      "Apply Knowledge: Implement what you've learned in real-world projects or job applications.",
      "Continue Learning: Explore advanced courses or related topics for further skill development."
    ]
  },
 
];
const tickets = [
  {
    sn: "1",
    dateTime: "12th Dec, 2025",
    ticketId: "#12345",
    issueCategory: "Payment Issue",
    status: "Resolved",
    lastUpdate: "2025-02-19",
  },
  {
    sn: "2",
    dateTime: "12th Dec, 2025",
    ticketId: "#67890",
    issueCategory: "Course Upload Error",
    status: "Pending",
    lastUpdate: "2025-02-17",
  },
  {
    sn: "3",
    dateTime: "12th Dec, 2025",
    ticketId: "#24680",
    issueCategory: "Student Dispute",
    status: "Completed",
    lastUpdate: "2025-02-16",
  },
  
]

function Page() {
  const [openItemId, setOpenItemId] = useState<string | null>(null)

  const handleToggle = (id: string) => {
    setOpenItemId(openItemId === id ? null : id)
  }
  return(
<>

<h1 className="font-semibold text-sm mb-[26px]">Support</h1>
<main className=" w-full flex flex-col gap-4 mb-11">
  {
    faqData.map((faq, index)=>(
      <FaqItem id={faq.id} key={faq.id} title={faq.title} descriptions={faq.descriptions} isOpen={openItemId === faq.id} onToggle={handleToggle}/>
    ))
  }
  
  </main>
  <h1 className="font-normal text-sm mb-[17px]">Action History Table</h1>
<main>
<Table>
      
      <TableHeader className="bg-[#161716] h-12">
        <TableRow className="border-none text-white text-xs font-normal hover:bg-[#161716]  " >
          <TableHead className="w-[70px]">SN</TableHead>
          <TableHead className="w-[140px]">Date & Time</TableHead>
          <TableHead className="w-[140px]">Ticket ID</TableHead>
          <TableHead className="w-[140px]">Issue Category</TableHead>
          <TableHead className="w-[120px]">Status</TableHead>
          <TableHead className="w-[140px]">Last Update</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tickets.map((ticket) => (
          <TableRow key={ticket.ticketId}  className="h-[68px] py-[10px] text-xs font-normal border-[#000000] hover:bg-[#161716] transition-colors">
            <TableCell >{ticket.sn}</TableCell>
            <TableCell>{ticket.dateTime}</TableCell>
            <TableCell>{ticket.ticketId}</TableCell>
            <TableCell >{ticket.issueCategory}</TableCell>
            <TableCell className="text-[#4b4b4b]">{ticket.status}</TableCell>
            <TableCell>{ticket.lastUpdate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
     
    </Table>
</main>
</>
  ) 
}
export default Page;
