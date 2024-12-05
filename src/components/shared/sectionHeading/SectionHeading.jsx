

const SectionHeading = ({subheading, heading, paragraph}) => {
  return (
    <div className="flex justify-center text-center">
    <div className="max-w-lg space-y-3">
    <button className="text-primary bg-primary/10 font-medium py-1 px-2 rounded">{subheading}</button>
    <h2 className="font-Rubik font-medium text-5xl">{heading}</h2>
    <p className="font-Questrial text-base ">{paragraph}</p>
    </div>
    </div>
  )
}

export default SectionHeading