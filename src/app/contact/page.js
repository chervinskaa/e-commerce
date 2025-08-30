
import CallWriteUs from '@/components/Contact/CallWriteUs';
import ContactForm from '@/components/Contact/ContactForm';

export default function ContactSection() {
    return (
        <div className="max-w-5xl mx-auto p-6 m-12">
            <div className="flex flex-col lg:flex-row lg:space-x-6">

                <div className="order-0  mb-6 lg:mb-0 lg:w-1/3">
                    <CallWriteUs />
                </div>

                <div className="order-1  lg:w-2/3">
                    <ContactForm />
                </div>

            </div>
        </div>
    );
}
