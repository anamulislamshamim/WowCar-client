import { useState } from "react";

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded shadow-sm">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-medium">{title}</p>
                <div className="flex items-center justify-center w-8 h-8 border rounded-full">
                    <svg
                        viewBox="0 0 24 24"
                        className={`w-3 text-gray-600 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                            }`}
                    >
                        <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            points="2,7 12,17 22,7"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-gray-700">{children}</p>
                </div>
            )}
        </div>
    );
};

export const Faq = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="flex flex-col mb-16 sm:text-center">
                    <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                {/* <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                      width="52"
                      height="24"
                    />
                  </svg> */}
                                <span className="relative">Plase</span>
                            </span>{' '}
                            find your answer.
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Here are some common questions answer. If you do not find your answer yet. Please call or email us. Our team member will respond your as soon as possible.
                        </p>
                    </div>
                </div>
                <div className="space-y-4">
                    <Item title="What is WowCar?">
                        carwow is an online platform for buying a new car or selling your old one! We bring you great offers from thousands of trusted partners so you can buy or sell your car in just a few clicks. No haggling and no fees.
                    </Item>
                    <Item title="How does WowCar work?">
                        It only takes a few minutes to get started. Whether you are buying or selling, you answer a few questions, we send your information out to local and national partners and they come back to you with great offers.

                        If buying a new car, once you receive an offer you are happy with, you can contact your chosen dealer with ease. If you are selling your car, simply accept the offer and we’ll reach out to arrange a collection. We’re here to help if you need us at any step of the journey.
                    </Item>
                    <Item title="Does WowCar cost me anything to use WowCar?">
                        No, it’s completely free! Whether buying or selling, you won’t face any costs - just great offers!
                    </Item>
                </div>
            </div>
        </div>
    );
};