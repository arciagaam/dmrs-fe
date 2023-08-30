const BgTextMarquee = () => {
  const contents = ['INTELLIGENCE', 'RESEARCH', 'INVESTIGATION', 'OTHER SERVICES', 'INTELLIGENCE', 'RESEARCH']
  const words = [];

  contents.forEach((content, index) => {
    words.push(<p className={"font-bold text-secondary-100/60 text-6xl z-0 whitespace-nowrap"} key={index}>{content}</p>)
  })

  return (
    <div className="marquee flex flex-row gap-8 w-full ">
      {words}
    </div>
  )
}

export default BgTextMarquee