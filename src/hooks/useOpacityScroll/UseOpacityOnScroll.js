import { useState, useEffect } from 'react';

const useOpacityOnScroll = (ref) => {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const elementTop = ref.current.getBoundingClientRect().top;
            const elementBottom = ref.current.getBoundingClientRect().bottom;
            const elementHeight = ref.current.getBoundingClientRect().height;

            if (elementTop < 0 && elementBottom > 0) {
                const scrollPercentage = (elementBottom / elementHeight) * 100;
                setOpacity(scrollPercentage / 100);
            } else if (elementTop > 0) {
                setOpacity(1);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [ref]);

    return opacity;
}

export default useOpacityOnScroll
