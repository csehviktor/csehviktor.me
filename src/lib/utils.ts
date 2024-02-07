export const calculateAge = (): number => {
    const now = new Date().getTime()
    const then = new Date('2005-01-23').getTime()

    return Math.floor(new Date(now - then).getUTCFullYear() - 1970)
}

export const parseURL = (url: string) => {
    return url.substring(url.lastIndexOf('/'))
}

export const randomizeKey = (str: string): number => {
    return Math.random() * str.length
}

export const truncate = (str: string, n: number) => str.length > n ? str.slice(0, n - 1) + '...' : str