"use client";

import { useState } from "react";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        if (!name || !email || !phone || !message) {
            alert("Будь ласка, заповніть всі поля форми!");
            return;
        }
        alert(`Дякуємо, ${name}! Ваше повідомлення відправлено.`);

        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-12 space-y-4 bg-white rounded shadow">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
                <input
                    type="text"
                    placeholder="Your Name "
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className=" rounded px-3 py-2 bg-gray-100"
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className=" rounded px-3 py-2 bg-gray-100"
                    required
                />
                <input
                    type="tel"
                    placeholder="Your Phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className=" rounded px-3 py-2 bg-gray-100"
                    required
                />
            </div>

            <textarea
                placeholder="Your Massage"
                value={message}
                onChange={e => setMessage(e.target.value)}
                className=" rounded px-3 py-2 w-full h-32 bg-gray-100"
                required
            />

            <div className="flex justify-center sm:justify-end">
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 bg-red-500"
                >
                    Send Message
                </button>
            </div>
        </form>
    );
}
