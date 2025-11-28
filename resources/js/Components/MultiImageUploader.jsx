import { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

export default function MultiImageUploader({ label, images = [], onChange, error, className = '' }) {
    const [previews, setPreviews] = useState([]);

    useEffect(() => {
        // Generate previews for all images
        const newPreviews = images.map(image => {
            if (typeof image === 'string') {
                return { type: 'url', url: image, original: image };
            } else if (image instanceof File) {
                return { type: 'file', url: URL.createObjectURL(image), original: image };
            }
            return null;
        }).filter(Boolean);

        setPreviews(newPreviews);

        // Cleanup function to revoke object URLs
        return () => {
            newPreviews.forEach(preview => {
                if (preview.type === 'file') {
                    URL.revokeObjectURL(preview.url);
                }
            });
        };
    }, [images]);

    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        if (acceptedFiles?.length > 0) {
            // Append new files to existing images
            onChange([...images, ...acceptedFiles]);
        }
        
        if (rejectedFiles?.length > 0) {
            const rejection = rejectedFiles[0];
            if (rejection.errors[0]?.code === 'file-too-large') {
                alert('Some files are too large. Max size is 2MB.');
            } else {
                alert(rejection.errors[0]?.message);
            }
        }
    }, [images, onChange]);

    const removeImage = (index, e) => {
        e.stopPropagation();
        const newImages = images.filter((_, i) => i !== index);
        onChange(newImages);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.jpeg', '.jpg', '.png', '.webp']
        },
        multiple: true,
        maxSize: 2 * 1024 * 1024 // 2MB
    });

    return (
        <div className={`w-full ${className}`}>
            {label && <label className="block text-sm font-medium text-text-secondary mb-2">{label}</label>}
            
            <div className="space-y-4">
                {/* Dropzone */}
                <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-lg p-6 transition-colors cursor-pointer text-center
                        ${isDragActive 
                            ? 'border-accent-primary bg-accent-primary/5' 
                            : error 
                                ? 'border-semantic-error bg-semantic-error/5' 
                                : 'border-border-subtle hover:border-accent-primary hover:bg-surface-elevated'
                        }`}
                >
                    <input {...getInputProps()} />
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <div className={`p-3 rounded-full ${isDragActive ? 'bg-accent-primary/10 text-accent-primary' : 'bg-surface-elevated text-text-secondary'}`}>
                            <Upload className="w-6 h-6" />
                        </div>
                        <div className="text-sm">
                            <span className="font-medium text-accent-primary">Click to upload</span>
                            <span className="text-text-secondary"> or drag and drop</span>
                        </div>
                        <p className="text-xs text-text-tertiary">SVG, PNG, JPG or WEBP (max. 2MB)</p>
                    </div>
                </div>

                {/* Previews Grid */}
                {previews.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {previews.map((preview, index) => (
                            <div key={index} className="relative group aspect-video bg-surface-elevated rounded-lg overflow-hidden border border-border-subtle">
                                <img 
                                    src={preview.url} 
                                    alt={`Preview ${index + 1}`} 
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    type="button"
                                    onClick={(e) => removeImage(index, e)}
                                    className="absolute top-2 right-2 p-1 bg-black/50 hover:bg-semantic-error text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {error && <p className="text-sm text-semantic-error">{error}</p>}
            </div>
        </div>
    );
}
