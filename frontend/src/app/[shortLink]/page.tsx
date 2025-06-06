import ButtonRounded from '@components/ButtonRounded';
import axios from 'axios'
export default async function Redirect({ params }: { params: Promise<{ shortLink: string }> }) {

    const { shortLink } = await params
    
    const link = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}/api/links/${shortLink}`)

    return (
        <div className='flex items-center h-dvh'>
            <ButtonRounded size='lg' link={link.data.originalLink}>
                Get Link
            </ButtonRounded>
        </div>
    )
}