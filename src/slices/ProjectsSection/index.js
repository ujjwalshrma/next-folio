/**
 * @typedef {import("@prismicio/client").Content.ProjectsSectionSlice} ProjectsSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectsSectionSlice>} ProjectsSectionProps
 * @param {ProjectsSectionProps}
 */
const ProjectsSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for projects_section (variation: {slice.variation})
      Slices
    </section>
  )
}

export default ProjectsSection
