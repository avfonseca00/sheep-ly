import ButtonRounded from "./ButtonRounded";
import Shorten from "./Shorten";

export default function Hero() {
    return (
        <div className="flex flex-col items-center w-full lg:max-w-5xl md:flex-row-reverse lg:overflow-visible xl:max-w-6xl md:pt-13.5 gap-12 pb-42 relative">
            <div className="flex overflow-hidden md:overflow-visible">
                <img src="/images/illustration-working.svg" className="h-[326] lg:overflow-visible xl:h-[482px] ml-6 object-cover object-left" alt="" />
            </div>
            <div className="flex flex-col items-center md:items-start md:pl-6 gap-8">
                <div className="flex flex-col md:px-0 px-4 gap-3">
                    <h1 className="text-dark-violet text-[40px] md:text-5xl md:leading-13 lg:text-6xl lg:leading-16 md:text-left xl:text-[80px] xl:leading-22.5 font-bold leading-12 tracking-tight text-center">More than just shorter links</h1>
                    <p className="text-grayish-violet text-lg md:text-left xl:text-[22px] xl:max-w-[550px] xl:leading-8 text-center leading-7">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                </div>
                <ButtonRounded variant="lg">
                    Get Started
                </ButtonRounded>
            </div>
        </div>
    )
}
