import DocIcon from "@/assets/svg/doc-type.svg";
import ImageIcon from "@/assets/svg/image-type.svg";
import PdfIcon from "@/assets/svg/pdf-type.svg";

export const filesType: Record<string, { icon: string; label: string }> = {
  doc: { icon: DocIcon, label: "Document" },
  image: { icon: ImageIcon, label: "Image" },
  pdf: { icon: PdfIcon, label: "PDF" },
};
