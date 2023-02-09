import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styles from "src/screens/PDFViewer/styles.module.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PDFViewer() {
  const [numPages, setNumPages] = useState(0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className={styles.documentContainer}>
      <Document
        file="https://ralali-assets.s3.ap-southeast-1.amazonaws.com/sample.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <div className={styles.pageContainer}>
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          ))}
        </div>
      </Document>
    </div>
  );
}
