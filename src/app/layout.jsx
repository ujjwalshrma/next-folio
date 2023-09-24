import localFont from 'next/font/local'

import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'

import Navigation from './components/layout/Navigation/Navigation'
import Footer from './components/layout/Footer/Footer'

import './scss/globals.scss'

import { Inter } from 'next/font/google'

const dahlia = localFont({
	src: '../assets/fonts/dahlia.woff2',
	display: 'swap',
	weight: '400',
	variable: '--font-dahlia',
})

const inter = Inter({
	subsets: ['latin'],
	weight: ['300', '600'],
	display: 'swap',
	variable: '--font-inter',
})

export const metadata = {
	title: {
		default: 'Portfolio',
		template: 'Portfolio | %s',
	},
	description: 'Ujjwal Sharma Portfolio',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${inter.variable} ${dahlia.variable}`}>
				<Navigation />
				<div className='content' id='content'>
					{children}
					<PrismicPreview repositoryName={repositoryName} />
					<Footer />
				</div>
			</body>
		</html>
	)
}
