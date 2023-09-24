/**
 * @typedef {import("@prismicio/client").Content.ArrowSectionSlice} ArrowSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArrowSectionSlice>} ArrowSectionProps
 * @param {ArrowSectionProps}
 */
const ArrowSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for arrow_section (variation: {slice.variation})
      Slices
    </section>
  )
}

export default ArrowSection
