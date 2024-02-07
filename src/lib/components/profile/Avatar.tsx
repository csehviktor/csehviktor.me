export const Avatar = ({ avatar }: { avatar: string }) => {
    return(
        <div className="md:w-64 md:h-64 w-48 h-48 rounded-3xl bg-center bg-cover"
            style={{
                backgroundImage: `url(${avatar})`
            }}
        />
    )
}