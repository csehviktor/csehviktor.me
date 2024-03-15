export const calculateAge = (): number => {
    const now = new Date().getTime()
    const then = new Date('2005-01-23').getTime()

    return Math.floor(new Date(now - then).getUTCFullYear() - 1970)
}

export const randomizeKey = (param: string | number): number => {
    const additive = typeof param === 'string' 
        ? param.length 
        : param
    
    return Math.ceil(Date.now() * Math.random()) + additive
}

export const parseURL = (str: string) => str.startsWith('https://') ? str.substring(str.lastIndexOf('/')) : str
export const truncate = (str: string, n: number) => str.length > n ? str.slice(0, n - 1) + '...' : str