import Button from "./Button"
import LinkCard from "./LinkCard"

export default function Shorten() {
    return (
        <div className="flex flex-col items-center relative w-full bg-grayish-violet-light pt-25 md:pt-27">
            <div className="flex flex-col gap-4 w-full lg:max-w-5xl xl:max-w-6xl absolute top-0 -translate-y-20">
                <form className="flex flex-col md:flex-row gap-4 md:gap-6 mx-6 bg-dark-violet bg-[url(/images/bg-shorten-mobile.svg)] md:bg-[url(/images/bg-shorten-desktop.svg)] bg-no-repeat bg-top-right p-6 xl:px-16 xl:py-13 rounded-lg">
                    <input type="text" name="" className="bg-white xl:text-[20px] p-3 xl:p-4 rounded-sm md:rounded-lg md:flex-1" placeholder="Shorten a link here..." />
                    <Button variant="lg">
                        Shorten It!
                    </Button>
                </form>
            </div>
            <div className="flex flex-col gap-6 md:gap-4 w-full lg:max-w-5xl xl:max-w-6xl">
                <LinkCard link="http://mylink.com/exampleof/largelink" short="http://sheep-ly.com/gT7xC8"/>
                <LinkCard link="http://mylink.com/exampleof/largelink" short="http://sheep-ly.com/gT7xC8"/>
                <LinkCard link="http://mylink.com/exampleof/largelink" short="http://sheep-ly.com/gT7xC8"/>
            </div>
        </div>
    )
}