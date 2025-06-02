import Button from "./Button"

type Props = {}

export default function Shorten({}: Props) {
    return (
        <div className="flex flex-col w-full lg:max-w-5xl xl:max-w-6xl absolute bottom-0 translate-y-2/4">
            <form className="flex flex-col md:flex-row gap-4 mx-6 bg-dark-violet bg-[url(/images/bg-shorten-mobile.svg)] md:bg-[url(/images/bg-shorten-desktop.svg)] bg-no-repeat bg-top-right p-6 xl:px-16 xl:py-13 rounded-lg">
                <input type="text" name="" className="bg-white xl:text-[20px] p-3 xl:p-4 rounded-sm md:flex-1" placeholder="Shorten a link here..." />
                <Button>
                    Shorten It!
                </Button>
            </form>
        </div>
    )
}