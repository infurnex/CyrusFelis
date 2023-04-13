import React, { useRef, useEffect, useState } from 'react';
import './Whiteboard.css'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import pdf from './resume.pdf'

export default function Whiteboard() {
  const [pagenumber, setpagenumber] = useState(1)
  const [numPages, setNumPages] = useState(null);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function previousPage(){
    if(pagenumber === 1){
    }
    else{
      setpagenumber(pagenumber-1);
    }
  }
  function nextPage(){
    if(pagenumber === numPages){
    }
    else{
      setpagenumber(pagenumber + 1)
    };
  }

  return (
    <div className='whiteboard'>
      <div className='pdf-space'>
        <Document file={pdf} className='document' onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pagenumber} />
        </Document>
        <div className='pagenumber'>
        Page {pagenumber} of {numPages}
        </div>
        <div className='changepage'>
          <div onClick={previousPage}>
            previous
          </div>
          <div onClick={nextPage}>
            next
          </div>

        </div>
      </div>
    </div>
  )
}
