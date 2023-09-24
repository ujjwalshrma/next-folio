import { PrismicRichText } from '@prismicio/react'

import { useCreateClient } from './hooks/useCreateClient'

import arrImg from '@/assets/project-section-arrow.svg'
import ArrowCircle from './components/svg/ArrowCircle'

import Image from 'next/image'
import Link from 'next/link'

import Marquee from 'react-fast-marquee'

import Button from './components/layout/Button/Button'

import styles from './page.module.scss'

import { getSections } from './utils/getHomeSections'

const Home = async () => {
	const page = await useCreateClient('single', 'home', [
		'project.project_title',
		'project.project_labels',
		'project.main_project_image',
	])

	const { slices } = page.data

	const heroSection = getSections(slices, 'hero_section')
	const arrowSection = getSections(slices, 'arrow_section')
	const aboutSection = getSections(slices, 'about_section')
	const projectsSection = getSections(slices, 'projects_section')

	return (
		<main className={styles.main}>
			<div className='container'>
				<section className={styles.home__hero__section} id='hero'>
					<div className={styles.home__hero__section__wrapper}>
						<div className={styles.hero__section__heading__div}>
							<div className={styles.heading__1__div}>
								<h1 className='heading__1'>
									{heroSection.primary.hero_title_1}
								</h1>
								<figure className={styles.hero__section__image__figure}>
									<Image
										width={224}
										height={112}
										src={heroSection.primary.hero_image.url}
										alt={heroSection.primary.hero_image.alt}
									/>
								</figure>
							</div>
							<div className={styles.heading__2__div}>
								<div className={styles.hero__section__para__wrapper}>
									<p className='para'>{heroSection.primary.hero_para}</p>
								</div>
								<h1 className='heading__1'>
									{heroSection.primary.hero_title_2}
								</h1>
							</div>
						</div>
					</div>
				</section>

				{/* arrow section */}
				<section className={styles.home__arrow__section}>
					<div className={styles.home__arrow__section__wrapper}>
						<ArrowCircle className={styles.home__arrow__section__image} />
						<div className={styles.home__arrow__section__content}>
							<div className={styles.arrow__section__para__wrapper}>
								<PrismicRichText
									field={arrowSection.primary.arrow_description}
									components={{
										paragraph: ({ children }) => (
											<p className='para'>{children}</p>
										),

										hyperlink: ({ children, node }) => (
											<Link
												className='inner__link'
												target='_blank'
												href={node.data.url}
											>
												{children}
											</Link>
										),
									}}
								/>
							</div>
							<div className={styles.arrow__contact__wrapper}>
								<Button href={arrowSection.primary.contact_link.url}>
									{arrowSection.primary.contact_text}
								</Button>
								{arrowSection.items.map((social, idx) => {
									return (
										<div className={styles.social__link__wrapper} key={idx}>
											<Link href={social.social_link.url} target='_blank'>
												<figure className={styles.social__icon__figure}>
													<Image
														src={social.social_icon.url}
														alt=''
														width={22}
														height={22}
													/>
												</figure>
											</Link>
										</div>
									)
								})}
							</div>
						</div>
					</div>
				</section>

				{/* project section */}
				<section className={styles.home__projects__section} id='projects'>
					<div className={styles.home__projects__section__wrapper}>
						<div className={styles.project__section__title__wrapper}>
							<span className='para small'>FEATURED PROJECTS</span>
							<figure className={styles.project__section__arrow__figure}>
								<Image src={arrImg} alt='' />
							</figure>
						</div>

						<div className={styles.home__projects__wrapper}>
							{projectsSection.items.map((project) => (
								<div
									className={styles.project__wrapper}
									key={project.projects.id}
								>
									<Link
										href={project.projects.uid}
										className={styles.project__inner__wrapper}
									>
										<div className={styles.project__heading__wrapper}>
											<h1 className={`${styles.project__heading} heading__2`}>
												{project.projects.data.project_title}
											</h1>
											{project.projects.data.project_labels.map((labelInfo) => {
												if (labelInfo.label === 'Date') {
													return (
														<p
															key={labelInfo.label_text}
															className={`${styles.project__date} para`}
														>
															{labelInfo.label_text}
														</p>
													)
												}
											})}
										</div>
										<figure className={styles.project__image}>
											<Image
												src={project.projects.data.main_project_image.url}
												alt=''
												width={548}
												height={423}
											/>
										</figure>
									</Link>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* about section */}
				<div className={styles.home__about__section} id='about'>
					<div className={styles.home__about__section__wrapper}>
						<div className={styles.marquee__wrapper}>
							<Marquee gradient='true' gradientColor='#161616'>
								<h1 className={`${styles.about__heading} heading__1`}>
									{aboutSection.primary.marquee_text} -
								</h1>
								<h1 className={`${styles.about__heading} heading__1`}>
									{aboutSection.primary.marquee_text} -
								</h1>
								<h1 className={`${styles.about__heading} heading__1`}>
									{aboutSection.primary.marquee_text} -
								</h1>
							</Marquee>
							<div className={styles.about__accordian__wrapper}>
								{aboutSection.items.map((accordian, idx) => (
									<div className={styles.about__accordian} key={idx}>
										<h2 className='heading__2'>
											{accordian.accordian_heading}
										</h2>
										<PrismicRichText
											field={accordian.accordian_content}
											components={{
												paragraph: ({ children }) => (
													<p className={`${styles.accordian__para} para`}>
														{children}
													</p>
												),
												hyperlink: ({ children, node }) => (
													<Link
														className='inner__link'
														target='_blank'
														href={node.data.url}
													>
														{children}
													</Link>
												),
											}}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Home
