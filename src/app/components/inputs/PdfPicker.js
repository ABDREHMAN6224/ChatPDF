import Image from "next/image";

const PdfPicker = ({ value, onChange, name, required,twstyles }) => {
  return (
    <div className={`flex flex-col gap-3 ${twstyles}`}>
      <input
        type="file"
        id="file-upload"
        className="hidden"
        onChange={(e) => onChange(e.target.files[0])}
        name={name}
        required={required}
        accept=".pdf , .doc, .docx, .txt, .rtf, .odt, .ott, .fodt, .uot, .xml, .html, .htm, .epub, .mobi, .fb2, .djvu, .xps, .oxps, .cbz, .cbr, .cb7, .cbt, .cba, .cbt, .cbw, .odp, .otp, .fodp, .uop, .ppt, .pptx, .pps, .ppsx, .odp, .otp, .fodp, .uop, .xls, .xlsx, .ods, .ots, .fods, .uos, .csv, .tsv, .txt, .rtf, .odt, .ott, .fodt, .uot, .xml, .html, .htm, .epub, .mobi, .fb2, .djvu, .xps, .oxps, .cbz, .cbr, .cb7, .cbt, .cba, .cbt, .cbw, .odp, .otp, .fodp, .uop, .ppt, .pptx, .pps, .ppsx, .odp, .otp, .fodp, .uop, .xls, .xlsx, .ods, .ots, .fods, .uos, .csv, .tsv, .pdf"
      />
      <label htmlFor="file-upload" className={`cursor-pointer `}>
        {value?
        <div className="flex flex-col items-center gap-4 rounded-md border-primary-500 border-2 py-4 px-10 md:min-w-96 lg:min-w-[28rem] justify-center relative w-full">
          <Image src="/assets/images/cloud.svg" width={40} height={40} alt="cloud"/>

          <div className="flex flex-col w-full gap-1 text-sm items-center ">

          <p className="text-gray-500">
            <span className="text-primary-500">
                {value.name} {" "}
            </span>
          </p>
        <p className="text-gray-500 text-center">
          {value.size} bytes
        </p>
          <Image src="/assets/images/file.svg"
            className="absolute right-0 bottom-1 md:bottom-0 xl:bottom-1 hidden md:flex w-16 h-16 xl:w-24 xl:h-24"
            alt="file"
            width={16} height={16} />
        </div>
        </div>
        :

        <div className="flex flex-col items-center gap-4 rounded-md border-primary-500 border-2 py-4 px-10 md:min-w-96 lg:min-w-[28rem] justify-center relative w-full">
          <Image src="/assets/images/cloud.svg" width={40} height={40} alt="cloud"/>

          <div className="flex flex-col w-full gap-1 text-sm items-center ">

          <p className="text-gray-500">
            <span className="text-primary-500">
                Click to upload {" "}
            </span>
          or drag and drop</p>
        <p className="text-gray-500 text-center">
          PDF or DOCX files
        </p>
          <Image src="/assets/images/file.svg"
            className="absolute right-0 bottom-1 md:bottom-0 xl:bottom-1 hidden md:flex w-16 h-16 xl:w-24 xl:h-24"
            alt="file"
            width={16} height={16} />
        </div>
        </div>
          }
      </label>
    </div>
  );
};

export default PdfPicker;
