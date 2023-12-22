import localFont from 'next/font/local'

export const helvetica = localFont({
    src: [
        {
            path: '../../public/fonts/Helvetica/Helvetica-Bold.ttf',
            weight: '700',
            style: 'normal'
        }
    ],
    variable: '--font-helvetica'
})

export const notoSans = localFont({
    src: [
        {
            path: '../../public/fonts/Nato_Sans_JP/static/NotoSansJP-Regular.ttf',
            weight: '400',
            style: 'normal'
        }
    ],
    variable: '--font-natoSans-regular'
})