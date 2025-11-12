import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CookiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CookiesModal({ isOpen, onClose }: CookiesModalProps) {
  if (!isOpen) return null;

  const handleAccept = () => {
    onClose();
  };

  const handlePreferences = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        data-testid="modal-backdrop"
      />
      <div className="relative z-10 max-w-4xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-800 hover:text-gray-600 transition-colors"
          data-testid="button-close-modal"
          aria-label="Close"
        >
          <X className="w-10 h-10" strokeWidth={2} />
        </button>

        <div className="space-y-6 pr-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Cookies Settings
          </h2>

          <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-3xl">
            We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better experience. By clicking accept, you agree to this, as outlined in our Cookie Policy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              onClick={handleAccept}
              className="text-xl px-16 py-7 font-semibold rounded-2xl"
              style={{
                backgroundColor: '#1E293B',
                color: 'white'
              }}
              data-testid="button-accept"
            >
              Accept
            </Button>

            <Button
              size="lg"
              onClick={handlePreferences}
              className="text-xl px-16 py-7 font-semibold rounded-2xl"
              style={{
                backgroundColor: '#E5E7EB',
                color: '#1E293B'
              }}
              data-testid="button-preferences"
            >
              Preferences
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
