import React, { useEffect, useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// import icons
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

interface PdfViewerProps {
  pdfUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
  const [totalPages, settotalPages] = useState<number>(0);
  const [pageNumber, setpageNumber] = useState<number>(1);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      "pdfjs-dist/build/pdf.worker.min.mjs",
      import.meta.url
    ).toString();
  }, []);

  function onDocLoad(event: any) {
    console.log("Pdf loaded: ", event.numPages);
    settotalPages(event.numPages);
  }

  const changePage = (param: string) => {
    if (param === "prev" && pageNumber > 1) {
      setpageNumber((prev) => prev - 1);
    }
    if (param === "next" && pageNumber < totalPages) {
      setpageNumber((prev) => prev + 1);
    }
  };

  return (
    <div
      className="w-full h-screen flex justify-start items-start overflow-hidden"
      onContextMenu={(e) => e.preventDefault()} // Disable right-click
    >
      <div className="border-r-2 border-gray-400 px-3 w-60 p-2 h-full">
        <div className="px-2 py-3 border-b-2 text-center font-semibold text-lg">
          Documents
        </div>
        <div className="h-full">
          <Document
            className="flex flex-col justify-start items-center overflow-auto h-full"
            file={pdfUrl}
            onLoadSuccess={onDocLoad}
          >
            {Array(totalPages)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  onClick={() => setpageNumber(index + 1)}
                  className={`border-[4px] cursor-pointer relative rounded my-2 ${
                    pageNumber === index + 1 ? "border-green-700" : ""
                  }`}
                >
                  <Page height={180} pageIndex={index}></Page>
                </div>
              ))}
          </Document>
        </div>
      </div>
      <div className="w-full h-full">
        <div className="w-full bg-slate-100 h-full">
          <div className="bg-white h-16 py-2 px-4 flex justify-between items-center">
            <div className="font-semibold text-lg">Pdf File Name</div>
            <div className="flex justify-center items-center gap-1">
              <IoIosArrowBack
                className={`cursor-pointer ${
                  pageNumber === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => changePage("prev")}
              />
              <div className="px-3 py-1 rounded">{pageNumber}</div>
              of
              <div className="px-3 py-1 rounded">{totalPages}</div>
              <IoIosArrowForward
                className={`cursor-pointer ${
                  pageNumber === totalPages ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => changePage("next")}
              />
            </div>
          </div>
          <div className="w-full bg-slate-100 p-4 h-full overflow-auto flex justify-center items-start">
            <Document file={pdfUrl}>
              <Page pageNumber={pageNumber}></Page>
            </Document>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;
