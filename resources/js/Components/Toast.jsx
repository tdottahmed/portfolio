import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, AlertTriangle } from 'lucide-react';
import { usePage } from '@inertiajs/react';

export default function Toast() {
    const { flash } = usePage().props;
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState('success');

    useEffect(() => {
        if (flash.success) {
            setMessage(flash.success);
            setType('success');
            setVisible(true);
        } else if (flash.error) {
            setMessage(flash.error);
            setType('error');
            setVisible(true);
        } else if (flash.warning) {
            setMessage(flash.warning);
            setType('warning');
            setVisible(true);
        }
    }, [flash]);

    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                setVisible(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [visible]);

    const variants = {
        initial: { opacity: 0, y: 50, scale: 0.3 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, scale: 0.5, transition: { duration: 0.2 } }
    };

    const styles = {
        success: 'bg-surface-base border-semantic-success text-text-primary',
        error: 'bg-surface-base border-semantic-error text-text-primary',
        warning: 'bg-surface-base border-semantic-warning text-text-primary'
    };

    const icons = {
        success: <CheckCircle className="w-5 h-5 text-semantic-success" />,
        error: <AlertCircle className="w-5 h-5 text-semantic-error" />,
        warning: <AlertTriangle className="w-5 h-5 text-semantic-warning" />
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    layout
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={variants}
                    className={`fixed bottom-4 right-4 z-50 flex items-center p-4 mb-4 w-full max-w-xs rounded-lg shadow-lg border-l-4 ${styles[type]}`}
                    role="alert"
                >
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8">
                        {icons[type]}
                    </div>
                    <div className="ml-3 text-sm font-normal">{message}</div>
                    <button
                        type="button"
                        className="ml-auto -mx-1.5 -my-1.5 bg-transparent text-text-secondary hover:text-text-primary rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-surface-elevated inline-flex h-8 w-8"
                        onClick={() => setVisible(false)}
                        aria-label="Close"
                    >
                        <span className="sr-only">Close</span>
                        <X className="w-4 h-4" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
