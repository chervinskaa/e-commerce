import { Wallet, CircleDollarSign, Landmark, DollarSign } from "lucide-react";

export default function OurAdvantages() {
    const advantages = [
        {
            icon: <Landmark size={28} className="text-white group-hover:text-gray-900 transition-colors duration-300" />,
            title: "10.5k",
            description: "Sallers active our site"
        },
        {
            icon: <Wallet size={28} className="text-white group-hover:text-gray-900 transition-colors duration-300" />,
            title: "33k",
            description: "Mopnthly Product Sale"
        },
        {
            icon: <CircleDollarSign size={28} className="text-white group-hover:text-gray-900 transition-colors duration-300" />,
            title: "45.5k",
            description: "Customer active in our site"
        },

        {
            icon: <DollarSign size={28} className="text-white group-hover:text-gray-900 transition-colors duration-300" />,
            title: "25k",
            description: "Anual gross sale in our site"
        }
    ];

    return (
        <section className="bg-white py-12 ">
            <div className=" max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                {advantages.map((adv, index) => (
                    <div
                        key={index}
                        className="group flex flex-col items-center text-center border border-gray-300 aspect-square max-w-[250px] w-full mx-auto p-6 hover:bg-red-500 transition-colors duration-300"
                    >
                        <div className="bg-gray-800 rounded-full p-3 mb-4 flex items-center justify-center border border-gray-600 group-hover:bg-white group-hover:border-white transition-colors duration-300">
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
