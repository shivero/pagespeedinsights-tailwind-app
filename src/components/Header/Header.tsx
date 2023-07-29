import { Heading } from '../../IFeatureScore';


const Headings = ({ heading }: { heading?: Heading[] }) => {
  if (!heading) return null;
  return (
    heading.map((heading: Heading, index: number) => (
      <div>{heading.label} ({heading.valueType})</div>
    )
    )

  )
};

export default Headings;
