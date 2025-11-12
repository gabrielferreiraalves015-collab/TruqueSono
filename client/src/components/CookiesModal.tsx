import { X } from "lucide-react";
import cookiesImage from "@assets/image_1762964491788.png";

interface CookiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CookiesModal({ isOpen, onClose }: CookiesModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        data-testid="modal-backdrop"
      />
      <div className="relative z-10 max-w-4xl w-full">
        <img 
          src={cookiesImage} 
          alt="Cookies Settings"
          className="w-full h-auto rounded-lg shadow-2xl"
          data-testid="img-cookies-modal"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-800 hover:text-gray-600 transition-colors"
          data-testid="button-close-modal"
          aria-label="Close"
        >
          <X className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}
