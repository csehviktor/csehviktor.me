import type { ImageWrapperModel } from '@/lib/models/elements'

export const ImageWrapper = ({ src, size, className }: ImageWrapperModel) => {
    return(
        <div className={`bg-center bg-cover ${className}`} 
            style={{
                width: size ? `${size}rem` : '',
                height: size ? `${size}rem` : '',
                backgroundImage: `url(${src})`,
            }}
        />
    )
}