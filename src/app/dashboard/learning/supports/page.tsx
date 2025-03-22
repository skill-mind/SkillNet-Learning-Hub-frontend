import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import FaqItem from "./components/Faqitem";


const faqData = [
  { title: "Course Creation Guide (How to structure, upload, and edit courses)" },
  { title: "Earnings & Payments (How earnings are calculated & withdrawal process)" },
  { title: "Student Engagement Tips (How to improve student interaction & ratings)" },
  { title: "Technical Issues (Troubleshooting course uploads, media files, etc.)" },
  { title: "Blockchain Integration Help (Understanding on-chain payments & certifications)" },
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
  return(
<>

<h1 className="font-semibold text-sm mb-[26px]">Support</h1>
<main className=" w-full flex flex-col gap-4 mb-11">
  {
    faqData.map((faq, index)=>(
      <FaqItem key={index} title={faq.title}/>
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
