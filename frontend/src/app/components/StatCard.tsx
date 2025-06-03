type Props = {
    icon: string,
    title: string,
    description: string
    styles?: string
}

export default function StatCard({icon, title, description, styles = ""}: Props) {
    return (
        <div className={`flex items-center md:items-start flex-col bg-white rounded-lg my-12 relative ${styles}`}>
            <div className="flex w-fit rounded-full p-6 bg-dark-violet absolute md:translate-x-1/3 -translate-y-2/4">
                <img src={icon} alt="" width={40} height={40}/>
            </div>
            <div className="flex flex-col items-center md:items-start gap-4 p-8 pt-[76px]">
                <h4 className="text-[22px] font-bold">{title}</h4>
                <p className="text-[15px] md:text-left leading-6.5 text-center text-grayish-violet">{description}</p>
            </div>
        </div>
    )
}