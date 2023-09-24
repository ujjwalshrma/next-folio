import styles from './Gradient.module.scss'
import Image from 'next/image'

import goldenCircle from '@/assets/Ellipse1.svg'
import blueCircle from '@/assets/Ellipse2.svg'

const Gradient = () => {
	return (
		<div className={styles.gradient__wrapper}>
			<div className={styles.gradient__one}>
				<Image className={styles.blue__circle} src={blueCircle} alt='' />
			</div>
			<div className={styles.gradient__two}>
				<Image className={styles.golden__circle} src={goldenCircle} alt='' />
			</div>
		</div>
	)
}

export default Gradient
