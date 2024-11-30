const NavigationSection = ({
  name,
  currentSection,
  sectionId,
  Icon,
  setCurrentSection,
}) => {
  const handleSectionChange = () => {
    setCurrentSection(sectionId)
  }
  return (
    <button
      onClick={handleSectionChange}
      className={`${currentSection === sectionId ? "text-[--primary-blue] bg-[--pure-white]" : "text-[--text-black-dark] bg-[--quinary-gray-light]"} md:h-[2.75rem] px-4 py-2 rounded-t-lg flex flex-col md:flex-row gap-2 items-center shadow-[0_-4px_7.8px_0_#0000000D]`}
    >
      {<Icon className="h-[1rem] w-[1rem] md:h-[r1.5em] md:w-[1.5rem]" />}
      <div className="text-xs md:text-sm font-bold">{name}</div>
    </button>
  )
}

export default NavigationSection
