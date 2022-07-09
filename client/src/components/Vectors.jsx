import React, { useState } from 'react';
import Loader from './Loader';
import { Document, Page, pdfjs } from 'react-pdf';
import ControlPanel from './ControlPanel';
import TopicNavBar from './topicNavBar';
import PagesNavBar from './PagesNavBar';
import Footer from './Footer';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Vectors = () => {
  const [scale, setScale] = useState(1.0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setIsLoading(false);
  }

  return (
    <div>
                           {/* top navbar */}
    <TopicNavBar />
    <PagesNavBar />
      <Loader isLoading={isLoading} />
      <section
        id="pdf-section"
        className="d-flex flex-column align-items-center w-100"
      >
        <ControlPanel
          scale={scale}
          setScale={setScale}
          numPages={numPages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          file="/img/docs/measurements.pdf"
        />
        <Document
          file="/img/docs/measurements.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} scale={scale} className="pb-5" />
        </Document>
      </section>
      <Footer />
    </div>
  );
};

export default Vectors;
