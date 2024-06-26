const TextArea = ({
    value,
    onChange,
    name,
    placeholder,
    type,
    required,
    disabled,
    error,
    errorMessage,
    className,
    label,
    rows=5,
    ...props
}) => {
  return (
    <div className="flex flex-col gap-3 text w-full">
        <label htmlFor={name} className="text-lg font-normal text-gray-900">{label}</label>
        <textarea
            value={value}
            onChange={onChange}
            name={name}
            placeholder={placeholder}
            type={type}
            required={required}
            disabled={disabled}
            rows={rows}
            className={`border border-gray-50 rounded-md py-3 px-4 md:py-4 md:px-6 text-sm text-gray-400 placeholder:text-gray-200 focus:outline-none ${className}`}
            {...props}
        />
        {error && <p className="text-sm text-danger">{errorMessage}</p>}
    </div>
  )
}

export default TextArea

