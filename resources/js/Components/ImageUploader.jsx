import { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

export default function ImageUploader({ label, image, onChange, error, className = '' }) {
    const [preview, setPreview] = useState(image);

    useEffect(() => {
        // If image prop changes (e.g. reset form), update preview
        // If image is a string, it's a URL. If it's a File object, we create a preview URL.
        if (typeof image === 'string') {
            setPreview(image);
        } else if (image instanceof File) {
            const objectUrl = URL.createObjectURL(image);
            setPreview(objectUrl);
            return () => URL.revokeObjectURL(objectUrl);
        } else {
            setPreview(null);
        }
    }, [image]);

    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles?.length > 0) {
            const file = acceptedFiles[0];
            onChange(file);
        }
    }, [onChange]);

    const removeImage = (e) => {
        e.stopPropagation();
        onChange(null);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.jpeg', '.jpg', '.png', '.webp']
        },
        maxFiles: 1,
        multiple: false
    });

    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label className="block text-sm font-medium text-text-secondary mb-2">
                    {label}
                </label>
            )}
            
            <div
                {...getRootProps()}
                className={`relative border-2 border-dashed rounded-lg p-4 transition-colors cursor-pointer flex flex-col items-center justify-center min-h-[200px] ${
                    isDragActive 
                        ? 'border-accent-primary bg-accent-primary/5' 
                        : error 
                            ? 'border-semantic-error bg-semantic-error/5' 
                            : 'border-border-subtle hover:border-accent-primary hover:bg-surface-elevated'
                }`}
            >
                <input {...getInputProps()} />

                {preview ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                        <img 
                            src={preview} 
                            alt="Preview" 
                            className="max-h-[180px] rounded-md object-contain"
                        />
                        <button
                            type="button"
                            onClick={removeImage}
                            className="absolute -top-2 -right-2 bg-semantic-error text-white rounded-full p-1 hover:bg-red-600 transition-colors shadow-sm"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                ) : (
                    <div className="text-center">
                        <div className="mx-auto h-12 w-12 text-text-tertiary flex items-center justify-center rounded-full bg-surface-base mb-3">
                            <Upload className="h-6 w-6" />
                        </div>
                        <p className="text-sm text-text-primary font-medium">
                            {isDragActive ? "Drop the image here" : "Click or drag image to upload"}
                        </p>
                        <p className="text-xs text-text-tertiary mt-1">
                            PNG, JPG, WEBP up to 2MB
                        </p>
                    </div>
                )}
            </div>
            
            {error && (
                <p className="mt-1 text-sm text-semantic-error">
                    {error}
                </p>
            )}
        </div>
    );
}
