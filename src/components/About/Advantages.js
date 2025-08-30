import { CheckCircle, Headset , Truck } from "lucide-react";

export default function OurAdvantages() {
  const advantages = [
    {
      icon: <Truck size={34} className="text-white" />,
      title : "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140"
    },
    {
      icon: <Headset size={34} className="text-white" />,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 27/7 customer support"
    },
    {
      icon: <CheckCircle size={34} className="text-white" />,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days"
    }
  ];

  return (
    <section className="bg-white py-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 justify-center md:justify-between items-center px-6">
        {advantages.map((adv, index) => (
          <div key={index} className="flex flex-col items-center text-center md:text-left md:w-1/3">
            <div className="bg-gray-800 rounded-full p-4 mb-4 flex items-center justify-center border border-gray-600">
              {adv.icon}
            </div>
            <h3 className="text-lg text-gray-900 font-bold mt-2">{adv.title}</h3>
            <p className="text-sm text-gray-700 mt-1">{adv.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
