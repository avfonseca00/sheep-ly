import ButtonRounded from "./ButtonRounded";

export default function BoostLinks() {
    return (
        <div className="flex flex-col items-center w-full gap-4 py-23 md:p-17 bg-dark-violet bg-[url(/images/bg-boost-mobile.svg)] md:bg-[url(/images/bg-boost-desktop.svg)] bg-no-repeat bg-top-right p-6 xl:px-16 xl:py-13">
            <h4 className="text-[28px] text-white font-bold text-center tracking-[-0.75px] xl:text-[40px]">Boost your links today</h4>
            <ButtonRounded size="lg">
                Get Started
            </ButtonRounded>
        </div>
    )
}