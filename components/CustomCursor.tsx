"use client";

import { useEffect, useState } from 'react';
import '../app/styles/cursor-animation.css';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [linkHovered, setLinkHovered] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleLinkHoverOn = () => setLinkHovered(true);
        const handleLinkHoverOff = () => setLinkHovered(false);

        document.addEventListener('mousemove', moveCursor);

        const links = document.querySelectorAll('a, button');
        links.forEach(link => {
            link.addEventListener('mouseenter', handleLinkHoverOn);
            link.addEventListener('mouseleave', handleLinkHoverOff);
        });

        return () => {
            document.removeEventListener('mousemove', moveCursor);
            links.forEach(link => {
                link.removeEventListener('mouseenter', handleLinkHoverOn);
                link.removeEventListener('mouseleave', handleLinkHoverOff);
            });
        };
    }, []);

    return (
        <>
            <div
                className={`custom-cursor ${linkHovered ? 'link-grow' : ''}`}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
            <div
                className="cursor-dot"
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
        </>
    );
} 