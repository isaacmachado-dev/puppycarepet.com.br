// hooks/useLockScroll.ts
import { useEffect, useCallback } from 'react';

export function useLockScroll(open: boolean) {
    const lock = useCallback(() => {
        const scrollY = window.scrollY;
        Object.assign(document.body.style, {
            overflow: 'hidden',
            position: 'fixed',
            top: `-${scrollY}px`,
            width: '100%'
        });
        (document.body as any).scrollYBackup = scrollY; // Salva posição
    }, []);

    const unlock = useCallback(() => {
        const scrollY = (document.body as any).scrollYBackup || 0;
        Object.assign(document.body.style, {
            overflow: '',
            position: '',
            top: '',
            width: ''
        });
        window.scrollTo(0, scrollY);
    }, []);

    useEffect(() => {
        if (open) {
            lock();
        } else {
            unlock();
        }

        // Cleanup SÓ se desmontar (não em open=false)
        return () => {
            if (open) unlock(); // Só se ainda estiver aberto
        };
    }, [open, lock, unlock]);
}
