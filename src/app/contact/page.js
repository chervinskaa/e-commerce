
import CallWriteUs from '@/components/Contact/CallWriteUs';
import ContactForm from '@/components/Contact/ContactForm';

export default function ContactSection() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        
        {/* Контактна інформація зверху на малих екранах */}
        <div className="order-0 lg:order-0 mb-6 lg:mb-0 lg:w-1/3">
          <CallWriteUs />
        </div>

        {/* Форма */}
        <div className="order-1 lg:order-1 lg:w-2/3">
          <ContactForm />
        </div>

      </div>
    </div>
  );
}
