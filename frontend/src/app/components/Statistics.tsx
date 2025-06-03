import StatCard from "./StatCard";

export default function Statistics() {
    return (
        <div className="flex flex-col items-center w-full bg-grayish-violet-light py-30">
                <div className="flex flex-col items-center gap-4 px-6 mb-10.5 w-full lg:max-w-5xl xl:max-w-6xl">
                    <h3 className="text-[28px] font-bold text-center tracking-[-0.75px] xl:text-[40px]">Advanced Statistics</h3>
                    <p className="text-grayish-violet text-center leading-7 xl:text-[16px] md:max-w-[450px]">
                        Track how your links are performing across the web with our advanced statistics dashboard.
                    </p>
                </div>
            <div className="flex w-full lg:max-w-5xl xl:max-w-6xl pb-9">
                <div className="flex flex-col items-center lg:flex-row md:gap-8 px-6 md:before:flex relative">
                    <div className="flex w-2 h-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-1/2 md:h-2 absolute md:top-3/5 md:left-1/2 md:-translate-x-1/2 bg-cyan"></div>
                    <StatCard 
                        icon="images/icon-brand-recognition.svg" 
                        title="Brand Recognition" 
                        description="Boost you brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content"
                    />
                    <StatCard 
                        icon="images/icon-detailed-records.svg" 
                        title="Detailed Records" 
                        description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
                        styles="md:translate-y-[42px]"
                    />
                    <StatCard 
                        icon="images/icon-fully-customizable.svg" 
                        title="Fully Customizable" 
                        description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
                        styles="md:translate-y-[84px]"
                    />
                </div>
            </div>
        </div>
    )
}