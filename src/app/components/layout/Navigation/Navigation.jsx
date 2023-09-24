'use client'

import { useState, useEffect } from 'react'

import styles from './Navigation.module.scss'

import Link from 'next/link'

const Navigation = () => {
	const [scrollY, setScrollY] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY)
		}

		handleScroll()

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const navClass =
		scrollY === 0
			? `${styles.nav__start} ${styles.nav} navigation`
			: `${styles.nav} navigation`

	return (
		<nav className={navClass}>
			<div className='container'>
				<div className={styles.nav__flex}>
					<Link href='/' className={styles.nav__link}>
						UJJWAL SHARMA
					</Link>
					<ul className={styles.nav__links__wrapper}>
						<li className={styles.nav__link}>
							<Link href='/#projects'>PROJECTS</Link>
						</li>
						<li className={styles.nav__link}>
							<Link href='/#about'>ABOUT</Link>
						</li>
						<li className={styles.nav__link}>
							<Link href='mailto:contact@ujjwalsharma.dev'>CONTACT</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navigation
