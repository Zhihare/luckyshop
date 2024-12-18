import { cn } from '@/lib/utils';
import * as React from 'react';
import { Button } from '../ui';
import {  Menu, X } from 'lucide-react';
import { TopBar } from './top-bar';

interface Props {
className?: string;
};

export const BurgerMenu: React.FC<Props> = ({className}) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const mobileMenuRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
       
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [mobileMenuRef]);

  return (
      <div className={cn('bg-white pt-2', className)}>
         {isMobileMenuOpen && (
                    <div
                        ref={mobileMenuRef}
                        className='md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-20 p-4'
                    >
                        <TopBar />
                        <div className='flex flex-wrap items-center gap-3 mt-4'>
                            <div>
                            </div>
                        </div>
                    </div>
                )}

        <Button
                    variant="ghost"
                    className='text-blue-600 md:hidden absolute left-0 top-1/2 -translate-y-1/2 mr-2 ml-1'
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? <X size={24} className='text-blue-600' /> : <Menu size={24} />}
                </Button>
    </div>
 );
};