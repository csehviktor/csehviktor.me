import { ImageWrapper } from '@/lib/components/wrapper/ImageWrapper'

export default function NotFound() {
    return (
        <div className='w-full h-svh flex flex-col justify-center items-center'>
            <ImageWrapper src='./notfound.jpg' className='max-w-xl m-7 w-11/12 h-1/2'/>
            <h1 className='text-8xl'>404</h1>
        </div>
    )
}