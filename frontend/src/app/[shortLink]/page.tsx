import ButtonRounded from '@components/ButtonRounded';
import Footer from '@components/Footer';
import Header from '@components/Header';
import axios from 'axios'
export default async function Redirect({ params }: { params: Promise<{ shortLink: string }> }) {

    const { shortLink } = await params
    
    const link = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}/api/links/${shortLink}`)

    return (
        <>
            <Header onTop={true}/>
            <main className="flex flex-col items-center w-full">
                <div className='flex flex-col items-center justify-center gap-6 w-full h-[calc(100dvh-92px)]'>
                    <img src="images/celebration.svg" alt="" className='w-full md:w-md'/>
                    <p className="text-[16px] text-center text-very-dark-violet px-10">Congratulations! Your link is ready and you can get it from button below</p>
                    <ButtonRounded size='lg' link={link.data.originalLink}>
                        Get Link
                    </ButtonRounded>
                </div>
            </main>
            <Footer/>
        </>
    )
}