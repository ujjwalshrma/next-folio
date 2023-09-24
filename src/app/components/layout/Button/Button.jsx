import styles from './Button.module.scss'
import Link from 'next/link'

const Button = ({ className, children, href, target }) => {
	return (
		<Link
			href={href}
			target={target}
			className={`${className} ${styles.main__btn}`}
		>
			{children}
		</Link>
	)
}

export default Button
