import { useEffect, useRef, useState } from 'react'
import { Container } from './style'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/TextLayer.css'
import useMatchMedia from '@/hook/useMatchMedia'

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString()

interface IPdfViewerProps {
  fileUrl: string
}

export default function PdfViewer(props: IPdfViewerProps) {
  const { fileUrl } = props
  const { isMobile, isTablet } = useMatchMedia()
  const containerRef = useRef<HTMLDivElement>(null)

  const [numPages, setNumPages] = useState(0)
  const [pageWidth, setPageWidth] = useState<number | undefined>(undefined)
  const scale = isMobile ? 0.9 : isTablet ? 1.2 : 1.5

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
  }

  useEffect(() => {
    if (!containerRef.current?.parentElement) {
      return
    }
    const handleResize = () => {
      setPageWidth(containerRef?.current?.parentElement?.offsetWidth)
    }
    if (scale <= 0.9) {
      window.addEventListener('resize', handleResize)
      handleResize()
    } else {
      window.removeEventListener('resize', handleResize)
      setPageWidth(undefined)
    }
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [scale])

  return (
    <Container ref={containerRef}>
      <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (_, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderAnnotationLayer={false}
            scale={scale}
            width={pageWidth}
          />
        ))}
      </Document>
    </Container>
  )
}
