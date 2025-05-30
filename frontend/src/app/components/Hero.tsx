import ButtonRounded from "./ButtonRounded";

export default function Hero() {
    return (
        <div className="flex flex-col items-center w-full lg:max-w-5xl xl:max-w-7xl gap-12 pb-14">
            <div className="flex overflow-hidden">
                <img src="/images/illustration-working.svg" className="h-[326] ml-6 object-cover object-left" alt="" />
            </div>
            <div className="flex flex-col items-center gap-8">
                <div className="flex flex-col px-4 gap-3">
                    <h1 className="text-dark-violet text-[40px] font-bold leading-12 tracking-tight text-center">More than just shorter links</h1>
                    <p className="text-grayish-violet text-lg text-center leading-7">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                </div>
                <ButtonRounded variant="lg">
                    Get Started
                </ButtonRounded>
            </div>
        </div>
    )
}
