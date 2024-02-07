import { Description } from '@/lib/components/common/Description'
import { Header } from '@/lib/components/common/Header'
import { Headers } from '@/lib/models/variants'

export default function() {
    return(
        <div className="flex flex-col items-center my-52">
            <Header type={Headers.TITLE}>status <span className="text-red-500">404</span></Header>
            <Description className="text-xl lg:text-3xl">
                page was not found
            </Description>
        </div>
    )
}