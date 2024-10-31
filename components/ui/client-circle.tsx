'use client';

import { Circle } from 'lucide-react';
import { useLayoutEffect, useState } from 'react';

export function ClientCircle({ className }: { className?: string }) {
    const [mounted, setMounted] = useState(false);

    useLayoutEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return <Circle className={className} />;
}
