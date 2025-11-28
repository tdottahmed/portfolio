import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import {
    Mail,
    Eye,
    Trash2,
    Calendar,
    CheckCircle,
    XCircle,
} from "lucide-react";
import { formatDate } from "@/Utils/date";

export default function Index({ messages }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this message?")) {
            destroy(route("admin.messages.destroy", id));
        }
    };

    return (
        <AdminLayout>
            <Head title="Messages" />

            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Messages</h2>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Sender
                            </th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Subject/Message
                            </th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date
                            </th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {messages.length > 0 ? (
                            messages.map((message) => (
                                <tr
                                    key={message.id}
                                    className={`hover:bg-gray-50 ${
                                        !message.read_at ? "bg-blue-50" : ""
                                    }`}
                                >
                                    <td className="px-6 py-4">
                                        <div className="text-sm font-medium text-gray-900">
                                            {message.name}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {message.email}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-900 truncate max-w-xs">
                                            {message.message}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            {formatDate(message.created_at)}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {message.read_at ? (
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                Read
                                            </span>
                                        ) : (
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                                Unread
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex items-center justify-end space-x-3">
                                            <Link
                                                href={route(
                                                    "admin.messages.show",
                                                    message.id
                                                )}
                                                className="text-blue-600 hover:text-blue-900"
                                                title="View Message"
                                            >
                                                <Eye className="w-5 h-5" />
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    handleDelete(message.id)
                                                }
                                                className="text-red-600 hover:text-red-900"
                                                title="Delete Message"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="px-6 py-4 text-center text-gray-500"
                                >
                                    No messages found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
