import React, { useEffect } from 'react';

export interface ToastProps {
    message: string;
    image?: string;
    onClose: () => void;
    duration?: number;
}
//dfvdf
const Toast: React.FC<ToastProps> = ({ message, image, onClose, duration = 3000 }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className="fixed top-4 right-4 z-50 animate-slide-in-right">
            <div className="bg-white rounded-lg shadow-lg p-4 flex items-center gap-3 min-w-[300px] max-w-[400px] border border-gray-200">
                {image && (
                    <div className="flex-shrink-0 w-16 h-10  flex items-center justify-center">
                        <img src={image} alt="Logo" className="w-full h-full object-contain" />
                    </div>
                )}
                <div className="flex-1">
                    <p className="text-gray-800 font-medium">{message}</p>
                </div>
                <button
                    onClick={onClose}
                    className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Toast;
