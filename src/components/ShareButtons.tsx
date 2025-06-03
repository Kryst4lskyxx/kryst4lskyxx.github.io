'use client';

interface ShareButtonsProps {
    title: string;
}

export function ShareButtons({ title }: ShareButtonsProps) {
    const handleTwitterShare = () => {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(window.location.href)}`;
        window.open(url, '_blank');
    };

    const handleFacebookShare = () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="flex space-x-4">
            <button
                onClick={handleTwitterShare}
                className="text-blue-500 hover:text-blue-600 transition-colors"
            >
                Twitter
            </button>
            <button
                onClick={handleFacebookShare}
                className="text-blue-600 hover:text-blue-700 transition-colors"
            >
                Facebook
            </button>
        </div>
    );
} 