import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("@/screens/PDFViewer"), {
  ssr: false
});

export default function PDF() {
  return <PDFViewer />;
}
