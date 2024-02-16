import React, { useState, useEffect } from 'react';
import * as pdfjs from 'pdfjs-dist'; 
import 'react-pdf/dist/Page/AnnotationLayer.css'; 
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const PDFReader: React.FC<{ pdfUrl: string }> = ({ pdfUrl }) => {
  const [pages, setPages] = useState<any[]>([]); // Use 'any' type for now

  const loadPDF = () => {
    const loadingTask = pdfjs.getDocument(pdfUrl);
    loadingTask.promise.then((pdf: any) => { // Use 'any' type for now
      const numPages = pdf.numPages;
      const pagePromises: Promise<any>[] = []; // Use 'any' type for now
      for (let i = 1; i <= numPages; i++) {
        pagePromises.push(pdf.getPage(i));
      }
      Promise.all(pagePromises).then((pages: any[]) => { // Use 'any' type for now
        setPages(pages);
      });
    });
  };

  useEffect(() => {
    loadPDF();//can't access property "canvas", params.canvasContext is undefined
  }, [pdfUrl]);

  return (
    <div className="pdf-reader">
      {pages.map((page, index) => (
        <canvas key={index} ref={(canvas: HTMLCanvasElement | null) => canvas && page.render({ canvas, viewport: (page as any).getViewport({ scale: 1 }) })} />
      ))}
    </div>
  );
};

export default PDFReader;
