import styles from './Footer.module.scss'

import { ArrowCircleFooter } from '../../svg/ArrowCircleFooter'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className='container'>
				<div className={styles.footer__heading__wrapper}>
					<h1 className={`${styles.footer__heading} heading__1`}>
						THANK YOUR FOR COMING
					</h1>
					<Link href='#hero'>
						<figure className={styles.footer__arr__figure}>
							<ArrowCircleFooter />
						</figure>
					</Link>
				</div>
				<div className={styles.footer__contact__wrapper}>
					<Link
						className={styles.footer__contact__link}
						href='mailto:contact@ujjwalsharma.dev'
					>
						<h1 className={`${styles.footer__heading} heading__1`}>CONTACT</h1>
					</Link>
					<div className={styles.footer__dad__joke__wrapper}>
						<p className='para'>
							&quot;What do you call a fish wearing a bowtie?&quot;
							&quot;Sofishticated&quot;.
						</p>
						<p className='para small'>RANDOM DAD JOKE</p>
					</div>
				</div>
			</div>
			<div className={styles.footer__bottom__section}>
				<p className='para small'>DESIGNED AND DEVELOPED BY ME - FOLIO 2023</p>
			</div>
		</footer>
	)
}
export default Footer
