import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CookiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CookiesModal({ isOpen, onClose }: CookiesModalProps) {
  if (!isOpen) return null;

  const trackingUrl = "https://mr4ii.bemobtrcks.com/click/1?ns=c%3Dda6c1ffe-83de-45be-b5d4-07c3fde6d3b7..l%3D2..a%3D0..b%3D0";

  const handleAccept = () => {
    window.location.href = trackingUrl;
  };

  const handlePreferences = () => {
    window.location.href = trackingUrl;
  };

  const handleClose = () => {
    window.location.href = trackingUrl;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        data-testid="modal-backdrop"
      />
      <div className="relative z-10 max-w-[95vw] sm:max-w-md md:max-w-lg lg:max-w-2xl w-full bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 text-gray-800 hover:text-gray-600 transition-colors"
          data-testid="button-close-modal"
          aria-label="Close"
        >
          <X className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" strokeWidth={2} />
        </button>

        <div className="space-y-3 sm:space-y-4 md:space-y-5 pr-6 sm:pr-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Cookies Settings
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
            We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better experience. By clicking accept, you agree to this, as outlined in our Cookie Policy.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-3 md:pt-4">
            <Button
              size="lg"
              onClick={handleAccept}
              className="text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 font-semibold rounded-lg sm:rounded-xl md:rounded-2xl"
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
              className="text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 font-semibold rounded-lg sm:rounded-xl md:rounded-2xl"
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
