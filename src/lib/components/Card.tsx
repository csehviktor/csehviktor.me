import type { CardModel } from '@/lib/models/elements'

export const Card = ({ children, color }: CardModel) => {
    return(
        <div className='w-full flex-grow rounded-xl p-5 transition-all duration-300 bg-opacity-50 hover:bg-opacity-50 hover:scale-105 bg-[#050505] hover:bg-[#080808]'
            style={{
                borderColor: color,
                borderRightWidth: color ? '.3rem': '0',
            }}
        >
            { children }
        </div>
    )
}