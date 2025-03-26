"use client"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import type React from "react"

interface FaqItemProps {
  id: string
  title: string
  descriptions: string[]
  isOpen: boolean
  onToggle: (id: string) => void
}

const FaqItem: React.FC<FaqItemProps> = ({ id, title, descriptions, isOpen, onToggle }) => {
  return (
    <Collapsible open={isOpen} onOpenChange={() => onToggle(id)} className="px-6 py-3 border-b border-[#2D2E2D]">
      <main className="flex items-center justify-between">
        <h3 className="text-sm font-medium">{title}</h3>
        <CollapsibleTrigger asChild>
          <button className="border rounded-[48px] border-[#2D2E2D] px-3 py-[6px] text-xs font-normal">
            {isOpen ? "Collapse" : "Expand"}
          </button>
        </CollapsibleTrigger>
      </main>
      <CollapsibleContent className="space-y-2">
        <ul>
          {descriptions.map((description, index) => (
            <li key={index} className="text-xs font-normal mb-1 list-disc list-inside">
              {description}
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  )
}

export default FaqItem

