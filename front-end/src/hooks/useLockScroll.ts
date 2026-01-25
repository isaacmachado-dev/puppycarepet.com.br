import { useEffect, useCallback } from 'react';

// ✅ Interface para body custom prop
interface BodyWithScrollY extends HTMLBodyElement {
    scrollYBackup?: number;
}

export function useLockScroll(open: boolean) {
    const lock = useCallback(() => {
        const scrollY = window.scrollY;
        Object.assign(document.body.style, {
            overflow: 'hidden',
            position: 'fixed',
            top: `-${scrollY}px`,
            width: '100%'
        });
        // ✅ Type-safe custom prop
        (document.body as BodyWithScrollY).scrollYBackup = scrollY;
    }, []);

    const unlock = useCallback(() => {
        const body = document.body as BodyWithScrollY;
        const scrollY = body.scrollYBackup || 0;
        Object.assign(document.body.style, {
            overflow: '',
            position: '',
            top: '',
            width: ''
        });
        window.scrollTo(0, scrollY);
        // Limpa prop custom
        delete body.scrollYBackup;
    }, []);

    useEffect(() => {
        if (open) {
            lock();
        } else {
            unlock();
        }

        return () => {
            if (open) unlock();
        };
    }, [open, lock, unlock]);
}
