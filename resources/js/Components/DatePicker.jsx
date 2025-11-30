import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "lucide-react";

export default function DatePicker({
    selected,
    onChange,
    label,
    placeholder,
    className = "",
    error,
    ...props
}) {
    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label className="block text-sm font-medium text-text-secondary mb-1">
                    {label}
                </label>
            )}
            <div className="relative">
                <ReactDatePicker
                    selected={selected ? new Date(selected) : null}
                    onChange={onChange}
                    placeholderText={placeholder}
                    className={`w-full bg-surface-elevated border rounded-lg pl-10 pr-4 py-2 text-text-primary focus:outline-none focus:border-accent-primary transition-colors
                        ${
                            error
                                ? "border-semantic-error"
                                : "border-border-subtle"
                        }
                    `}
                    wrapperClassName="w-full"
                    dateFormat="yyyy-MM-dd"
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    {...props}
                />
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary pointer-events-none" />
            </div>
            {error && (
                <p className="text-semantic-error text-sm mt-1">{error}</p>
            )}

            {/* Custom Styles for Dark Mode Integration */}
            <style>{`
                .react-datepicker {
                    background-color: #1e293b; /* surface-elevated */
                    border-color: #334155; /* border-subtle */
                    color: #f8fafc; /* text-primary */
                    font-family: inherit;
                }
                .react-datepicker__header {
                    background-color: #0f172a; /* surface-base */
                    border-bottom-color: #334155; /* border-subtle */
                }
                .react-datepicker__current-month, 
                .react-datepicker__day-name, 
                .react-datepicker-time__header {
                    color: #f8fafc; /* text-primary */
                }
                .react-datepicker__day {
                    color: #cbd5e1; /* text-secondary */
                }
                .react-datepicker__day:hover {
                    background-color: #334155; /* border-subtle */
                    color: #f8fafc;
                }
                .react-datepicker__day--selected, 
                .react-datepicker__day--keyboard-selected {
                    background-color: #3b82f6; /* accent-primary */
                    color: white;
                }
                .react-datepicker__day--disabled {
                    color: #475569; /* text-tertiary */
                }
                .react-datepicker__input-container input {
                    width: 100%;
                }
            `}</style>
        </div>
    );
}
