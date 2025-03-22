
interface FaqItemProps {
    title: string
}

const FaqItem: React.FC<FaqItemProps> = ({ title }) => {
    return(
        <div className="px-6 py-3 border-b flex items-center justify-between border-[#2D2E2D]">
        <h3 className="text-sm font-medium">{title}</h3>
        <button className=" border rounded-[48px] border-[#2D2E2D] px-3 py-[6px] text-xs font-normal ">Expand</button>
      </div>
    )
}

export default FaqItem;