import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaExternalLinkAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

export default function Footer() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
    const [statusMessage, setStatusMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        setStatusMessage("");

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        // Using FormSubmit's AJAX submission endpoint
        fetch("https://formsubmit.co/ajax/subhamsinghkk34@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(res => {
            setIsSubmitting(false);
            if (res.success === "true" || res.success === true) {
                setSubmitStatus('success');
                setStatusMessage("Thank you! Your message has been sent successfully. Please check your email inbox to activate FormSubmit if you are using it for the first time.");
                e.target.reset();
            } else {
                setSubmitStatus('error');
                setStatusMessage(res.message || "Something went wrong. Please try again.");
            }
        })
        .catch(err => {
            setIsSubmitting(false);
            setSubmitStatus('error');
            setStatusMessage("Unable to send message. Please check your network connection.");
        });
    };

    return (
        <footer id='contact' className="w-full bg-zinc-950 text-white py-20 px-6 sm:px-12 lg:px-24 border-t border-zinc-900 font-sans relative overflow-hidden">
            {/* Background glowing gradients */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/5 to-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-stretch gap-16 relative z-10">

                {/* Left Side - Contact Form */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between">
                    <div>
                        <span className="text-xs font-bold tracking-widest text-blue-500 uppercase px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                            Get In Touch
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4 font-display bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 text-glow-indigo">
                            Let's Work Together
                        </h2>
                        <p className="text-zinc-400 mb-8 text-sm md:text-base leading-relaxed">
                            Feel free to reach out for collaborations, inquiries, or just a friendly hello. I will get back to you as soon as possible.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 glass p-8 rounded-3xl border border-zinc-800/80 shadow-2xl">
                        {/* Hidden fields for FormSubmit configuration */}
                        <input type="hidden" name="_subject" value="New Contact Form Submission from Portfolio!" />
                        <input type="hidden" name="_captcha" value="false" />
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex flex-col">
                                <label className="text-xs text-zinc-400 mb-2 font-semibold tracking-wider uppercase" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Subham Singh"
                                    className="bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/80 transition-all duration-300 text-sm"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-xs text-zinc-400 mb-2 font-semibold tracking-wider uppercase" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="subham@example.com"
                                    className="bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/80 transition-all duration-300 text-sm"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-xs text-zinc-400 mb-2 font-semibold tracking-wider uppercase" htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="+91 7319522543"
                                className="bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/80 transition-all duration-300 text-sm"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-xs text-zinc-400 mb-2 font-semibold tracking-wider uppercase" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows="4"
                                placeholder="Tell me about your project..."
                                className="bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/80 transition-all duration-300 text-sm resize-none"
                            ></textarea>
                        </div>

                        {submitStatus && (
                            <div className={`flex items-center gap-3 p-4 rounded-2xl border text-sm transition-all duration-300 ${
                                submitStatus === 'success' 
                                    ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
                                    : 'bg-rose-500/10 border-rose-500/20 text-rose-400'
                            }`}>
                                {submitStatus === 'success' ? <FaCheckCircle className="text-lg flex-shrink-0" /> : <FaExclamationCircle className="text-lg flex-shrink-0" />}
                                <span>{statusMessage}</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transform hover:-translate-y-[1px] active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/30 uppercase text-xs tracking-widest cursor-pointer font-display"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>

                {/* Right Side - Contact Info & Socials */}
                <div className="w-full lg:w-1/3 flex flex-col justify-between py-2 lg:py-6">
                    <div className="space-y-8">
                        <h3 className="text-xl font-bold uppercase tracking-wider text-white font-display border-b border-zinc-900 pb-3">
                            Contact Details
                        </h3>

                        <div className="flex flex-col space-y-6">
                            <a 
                                href="mailto:subhamsinghkk34@gmail.com" 
                                className="flex items-center space-x-4 text-zinc-300 hover:text-white transition-colors duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-center group-hover:bg-blue-500/15 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all duration-300">
                                    <FaEnvelope className="text-lg" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">Email Me</span>
                                    <span className="text-sm md:text-base font-semibold truncate max-w-[220px] sm:max-w-xs md:max-w-none">subhamsinghkk34@gmail.com</span>
                                </div>
                            </a>

                            <a 
                                href="tel:+917319522543" 
                                className="flex items-center space-x-4 text-zinc-300 hover:text-white transition-colors duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-center group-hover:bg-cyan-500/15 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all duration-300">
                                    <FaPhone className="text-lg" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">Call Me</span>
                                    <span className="text-sm md:text-base font-semibold">+91 7319522543</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="space-y-6 mt-12 lg:mt-0 select-none">
                        <h3 className="text-xl font-bold uppercase tracking-wider text-white font-display border-b border-zinc-900 pb-3">
                            Connect
                        </h3>
                        <div className="flex gap-4">
                            <a 
                                href="https://github.com/" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                                aria-label="GitHub Profile"
                            >
                                <FaGithub className="text-lg" />
                            </a>
                            <a 
                                href="https://linkedin.com/" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                                aria-label="LinkedIn Profile"
                            >
                                <FaLinkedin className="text-lg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Section */}
            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-xs md:text-sm gap-4 select-none">
                <p>&copy; {new Date().getFullYear()} Subham Singh. All rights reserved.</p>
                <p className="flex items-center gap-1.5 hover:text-zinc-400 duration-300">
                    <span>Designed & Built with React, GSAP & Tailwind v4</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                </p>
            </div>
        </footer>
    );
}
