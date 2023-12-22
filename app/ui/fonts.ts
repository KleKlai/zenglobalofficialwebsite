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