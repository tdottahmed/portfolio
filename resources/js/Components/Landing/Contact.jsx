import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useForm } from '@inertiajs/react';

export default function Contact({ settings }) {
    const contactData = settings?.contact ? JSON.parse(settings.contact) : {};
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('contact.store'), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-accent-primary mx-auto rounded-full" />
                    <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div>
                        <h3 className="text-2xl font-bold text-text-primary mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center text-accent-primary flex-shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-medium text-text-primary">Email</p>
                                    <a href={`mailto:${contactData.email || 'contact@example.com'}`} className="text-text-secondary hover:text-accent-primary transition-colors">
                                        {contactData.email || 'contact@example.com'}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-accent-secondary/10 rounded-lg flex items-center justify-center text-accent-secondary flex-shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-medium text-text-primary">Phone</p>
                                    <a href={`tel:${contactData.phone || '+1234567890'}`} className="text-text-secondary hover:text-accent-secondary transition-colors">
                                        {contactData.phone || '+1234567890'}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-accent-tertiary/10 rounded-lg flex items-center justify-center text-accent-tertiary flex-shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-medium text-text-primary">Location</p>
                                    <p className="text-text-secondary">
                                        {contactData.address || 'Dhaka, Bangladesh'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-surface-base/80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-border-subtle">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg bg-surface-elevated border border-border-subtle text-text-primary focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-shadow"
                                    placeholder="Your Name"
                                    required
                                />
                                {errors.name && <p className="mt-1 text-sm text-semantic-error">{errors.name}</p>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg bg-surface-elevated border border-border-subtle text-text-primary focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-shadow"
                                    placeholder="your@email.com"
                                    required
                                />
                                {errors.email && <p className="mt-1 text-sm text-semantic-error">{errors.email}</p>}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg bg-surface-elevated border border-border-subtle text-text-primary focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-shadow resize-none"
                                    placeholder="Your message..."
                                    required
                                />
                                {errors.message && <p className="mt-1 text-sm text-semantic-error">{errors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full px-6 py-3 bg-accent-primary text-white rounded-lg hover:bg-accent-primary/90 transition-colors flex items-center justify-center disabled:opacity-70"
                            >
                                {processing ? 'Sending...' : 'Send Message'}
                                <Send className="w-4 h-4 ml-2" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
