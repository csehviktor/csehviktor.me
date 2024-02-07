export const Tooltip = ({ label }: { label?: string }) => {
    return(
        <span className="absolute w-full text-center bottom-20 min-w-max text-lg font-semibold transition-all duration-100 scale-0 group-hover:scale-100">
            <div className="bg-[#d3d2d2] dark:bg-[#0d0d0d] rounded-xl shadow-md px-2 py-1">
                { label }
            </div>
        </span>
    )
}