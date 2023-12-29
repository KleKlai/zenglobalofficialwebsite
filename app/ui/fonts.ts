import localFont from 'next/font/local'

export const helvetica = localFont({
    src: [
        {
            path: '../../public/fonts/Helvetica/Helvetica-Bold.ttf',
        }
    ],
    variable: '--font-helvetica'
})

export const notoSans = localFont({
    src: [
        {
            path: '../../public/fonts/Noto_Sans_JP/NotoSansJP-VariableFont_wght.ttf',
        }
    ],
    variable: '--font-natoSans'
})

export const outfit = localFont({
    src: [
        {
            path: '../../public/fonts/Outfit/Outfit-VariableFont_wght.ttf',
        }
    ],
    variable: '--font-outfit'
})

export const roboto = localFont({
    src: [
        {
            path: '../../public/fonts/Roboto/Roboto-Regular.ttf',
        }
    ],
    variable: '--font-roboto'
})