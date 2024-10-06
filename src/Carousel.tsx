import { useEffect } from 'react';

const Carousel: React.FC = () => {

    useEffect(() => {
        const scrollContainer = document.querySelector('.images-wrapper') as HTMLElement | null;
        const backBtn = document.getElementById('backBtn') as HTMLElement | null;
        const nextBtn = document.getElementById('nextBtn') as HTMLElement | null;

        const handleWheel = (evt: WheelEvent) => {
            evt.preventDefault();
            if (scrollContainer) {
                scrollContainer.scrollLeft += evt.deltaY;
                scrollContainer.style.scrollBehavior = 'auto';
            }
        };

        const handleNextClick = () => {
            if (scrollContainer) {
                scrollContainer.style.scrollBehavior = 'smooth';
                scrollContainer.scrollLeft += 400;
            }
        };

        const handleBackClick = () => {
            if (scrollContainer) {
                scrollContainer.style.scrollBehavior = 'smooth';
                scrollContainer.scrollLeft -= 400;
            }
        };

        // Dodanie event listenerów
        scrollContainer?.addEventListener('wheel', handleWheel);
        nextBtn?.addEventListener('click', handleNextClick);
        backBtn?.addEventListener('click', handleBackClick);

        // Sprzątanie event listenerów przy unmount
        return () => {
            scrollContainer?.removeEventListener('wheel', handleWheel);
            nextBtn?.removeEventListener('click', handleNextClick);
            backBtn?.removeEventListener('click', handleBackClick);
        };
    }, []);

    return null; // Zwróć JSX, jeśli to potrzebne
}

export default Carousel;
