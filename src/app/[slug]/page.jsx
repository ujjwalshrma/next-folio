import { useCreateClient } from '../hooks/useCreateClient'
import { PrismicRichText } from '@prismicio/react'

import Button from '../components/layout/Button/Button'

import styles from './project.module.scss'

import Image from 'next/image'

export const generateMetadata = ({ params }) => {
	const slug = params.slug
		.toLowerCase()
		.split('-')
		.map(function (word) {
			return word.charAt(0).toUpperCase() + word.slice(1)
		})
		.join(' ')
	return {
		title: slug,
	}
}

const Project = async ({ params }) => {
	const page = await useCreateClient('uid', 'project', '', `${params.slug}`)

	return (
		<main className={styles.project} id='hero'>
			<div className={styles.project__wrapper}>
				<figure className={styles.project__main__image}>
					<Image
						src={page.data.main_project_image.url}
						alt={page.data.main_project_image.alt}
						width={1440}
						height={700}
					/>
				</figure>

				<div className='container'>
					<div className={styles.project__content}>
						<div className={styles.project__content__wrapper}>
							<h1 className='heading__1'>{page.data.project_title}</h1>
							<div className={styles.project__para__wrapper}>
								<PrismicRichText
									field={page.data.project_description}
									components={{
										paragraph: ({ children }) => (
											<p className={`${styles.project__para} para`}>
												{children}
											</p>
										),
									}}
								/>
							</div>
							<div className={styles.project__labels}>
								{page.data.project_labels.map((labelInfo, idx) => {
									return (
										<div className={styles.project__label__wrapper} key={idx}>
											<p className={`${styles.project__label} para bold`}>
												{labelInfo.label}
											</p>
											<div className={styles.label__para__wrapper}>
												<p className='para bold'>{labelInfo.label_text}</p>
											</div>
										</div>
									)
								})}
							</div>
							<Button href={page.data.view_button_link.url} target='_blank'>
								{page.data.view_button_text}
							</Button>
						</div>
					</div>
				</div>
				<div className={styles.project__images}>
					{page.data.project_image.map((img, idx) => {
						return (
							<figure key={idx} className={styles.project__images__figure}>
								<Image src={img.images.url} alt='' width={1440} height={700} />
							</figure>
						)
					})}
				</div>
			</div>
		</main>
	)
}

export default Project
