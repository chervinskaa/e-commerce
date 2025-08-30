"use client";

import React from "react";
import { Phone, Mail } from 'lucide-react';

export default function ContactInfo() {
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow space-y-6 lg:max-w-full">

            <div className="text-center lg:text-left mb-4">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                    <div className="bg-red-500 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                        <Phone className="w-4 h-4 text-white" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">Call To Us</h2>
                </div>
                <p className="text-gray-600 mt-2">We are available 24/7, 7 days a week.</p>
                <p className="text-gray-600 mt-2">Phone: +380586302833</p>
            </div>


            <div className="text-center lg:text-left border-t border-gray-200 pt-4 space-y-2">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                    <div className="bg-red-500 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                        <Mail className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Write To Us</h3>
                </div>
                <p className="text-gray-600">
                    Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="text-gray-600">
                    Email: <a href="mailto:info@example.com" className="text-blue-600 hover:underline">customer@exclusive.com</a>
                </p>

                <p className="text-gray-600">
                    Email: <a href="mailto:info@example.com" className="text-blue-600 hover:underline">support@exclusive.com</a>
                </p>

            </div>

        </div>
    );
}
