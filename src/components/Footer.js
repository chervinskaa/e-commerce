import { SendHorizontal } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';


export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 px-6 py-10 mt-12">
            <div className="max-w-7xl mx-auto grid gap-8
                grid-cols-1      
                sm:grid-cols-2  
                md:grid-cols-3  
                lg:grid-cols-5">

                {/* Exclusive */}
                <div>
                    <h2 className="text-xl font-bold text-white mb-4">Exclusive</h2>
                    <ul>
                        <li>
                            <a href="#" className="hover:text-white">Subscribe</a>
                        </li>
                    </ul>

                    <p className="text-sm text-gray-400 mt-3">
                        Get 10% off your first order
                    </p>

                    {/* Поле email адаптивне */}
                    <div className="relative mt-3 w-full max-w-full sm:max-w-[12rem]">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 pr-10 h-10 rounded-md border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
                        />
                        <button className="absolute right-0 top-0 h-full px-3 bg-red-500 text-white rounded-r-md hover:bg-red-600 flex items-center justify-center">
                            <SendHorizontal size={16} />
                        </button>
                    </div>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li>111 Bijoy sarani, Dhaka,<br />
                            DH 1515, Bangladesh.</li>
                        <li>exclusive@gmail.com</li>
                        <li>88015-88888-99999</li>
                    </ul>
                </div>

                {/* Account */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Account</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white">My Account</a></li>
                        <li><a href="#" className="hover:text-white">Login / Register</a></li>
                        <li><a href="#" className="hover:text-white">Cart</a></li>
                        <li><a href="#" className="hover:text-white">Wishlist</a></li>
                        <li><a href="#" className="hover:text-white">Shop</a></li>
                    </ul>
                </div>

                {/* Quick Link */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Link</h3>
                    <div className="flex flex-col space-y-2">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms Of Use</a>
                        <a href="#" className="hover:text-white">FAQ</a>
                        <a href="#" className="hover:text-white">Contact</a>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Download App</h3>
                    <p className="text-sm text-gray-400 mb-3">Save $3 with App New User Only</p>
                    {/* Контейнер шрихкод + кнопки */}
                    <div className="flex flex-col sm:flex-row items-start  sm:items-start gap-4 ">
                        <div className="w-20 h-20 bg-gray-700 flex items-center justify-center">
                            <img src="/images/barcode.jpg" alt="Barcode" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="/images/get_in_gp.jpg"
                                    alt="Google Play"
                                    className="w-25 object-contain cursor-pointer"
                                />
                            </a>
                            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="/images/get_in_as.jpg"
                                    alt="App Store"
                                    className="w-25 object-contain cursor-pointer"
                                />
                            </a>
                        </div>

                    </div>
                    {/* Іконки соцмереж */}
                    <div className="flex gap-6 mt-5 ">
                        <a href="#" className="hover:text-white">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="hover:text-white">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="hover:text-white">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="hover:text-white">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom line */}
            <div className="mt-6 sm:mt-10 border-t border-gray-700 pt-3 sm:pt-6 text-center text-sm">
                © {new Date().getFullYear()} MyShop. All rights reserved.
            </div>

        </footer>
    );
}
