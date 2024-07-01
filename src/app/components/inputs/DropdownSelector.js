import Image from "next/image"

const DropdownSelector = ({
    options,
    value,
    onChange,
    placeholder,
    name,
    required,
    twstyles,
    startIcon,
    endIcon,
    disabled,
    label,
    styles

}) => {
  return (
    <div className={`flex flex-col items-start gap-2 ${styles}`}>
        {((value && value?.icon) || startIcon) &&
        <Image src={value?.icon||startIcon} width={20} height={20} alt={value?.label||"icon"} 
        className="rounded-full mr-2 -ml-2"
        />
     }
        <label className="text-lg font-normal text-gray-900 dark:text-gray-200">{label}</label>
        <div className={`flex items-center border w-full bg-transparent border-gray-50 rounded-md py-3 px-2 md:py-4 md:px-4 text-sm text-gray-400 focus:outline-none ${twstyles}`}>
        <select
            value={value}
            onChange={onChange}
            name={name}
            required={required}
            disabled={disabled}
            className={`w-full bg-transparent focus:outline-none placeholder:text-gray-200`}
        >
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
        {endIcon && <span className="ml-2 -mr-2">{endIcon}</span>}
    </div>
    </div>
  )
}

export default DropdownSelector