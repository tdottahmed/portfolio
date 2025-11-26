import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Trash2, Calendar, Mail, User, Clock } from 'lucide-react';

export default function Show({ message }) {
    const { delete: destroy } = useForm();

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this message?')) {
            destroy(route('admin.messages.destroy', message.id));
        }
    };

    return (
        <AdminLayout>
            <Head title={`Message from ${message.name}`} />

            <div className="mb-6">
                <Link
                    href={route('admin.messages.index')}
                    className="inline-flex items-center text-gray-600 hover:text-gray-900"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Messages
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                    <h2 className="text-xl font-semibold text-gray-800">Message Details</h2>
                    <button
                        onClick={handleDelete}
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete Message
                    </button>
                </div>
                
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0">
                                <User className="w-6 h-6 text-gray-400" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Sender Name</p>
                                <p className="text-lg text-gray-900">{message.name}</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0">
                                <Mail className="w-6 h-6 text-gray-400" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Sender Email</p>
                                <a href={`mailto:${message.email}`} className="text-lg text-blue-600 hover:underline">
                                    {message.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0">
                                <Calendar className="w-6 h-6 text-gray-400" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Received On</p>
                                <p className="text-lg text-gray-900">
                                    {new Date(message.created_at).toLocaleString()}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0">
                                <Clock className="w-6 h-6 text-gray-400" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Read Status</p>
                                <p className="text-lg text-gray-900">
                                    {message.read_at ? (
                                        <span className="text-green-600 flex items-center">
                                            Read on {new Date(message.read_at).toLocaleString()}
                                        </span>
                                    ) : (
                                        <span className="text-blue-600">Unread</span>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Message Content</h3>
                        <div className="bg-gray-50 rounded-lg p-6 text-gray-800 whitespace-pre-wrap leading-relaxed">
                            {message.message}
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
