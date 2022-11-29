import React from 'react';

export const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div className="p-8 bg-white border rounded shadow-sm">
                    <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <a
                            href="/"
                            className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            aria-label="Category"
                        >
                            React State
                        </a>{' '}
                        <span className="text-gray-600">— 1 Feb 2020</span>
                    </p>
                    <a
                        href="/"
                        aria-label="Article"
                        title="Jingle Bells"
                        className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                        Jingle Bells
                    </a>
                    <p className="mb-5 text-gray-700">
                        There are four ways to manage state in React. These are the following:
                        <ul>
                            <li>Local State</li>
                            <li>Global State</li>
                            <li>Server State</li>
                            <li>URL state</li>
                        </ul>
                    </p>
                    <div className="flex items-center">
                        <a href="/" aria-label="Author" title="Author" className="mr-3">
                            <img
                                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="avatar"
                                className="object-cover w-10 h-10 rounded-full shadow-sm"
                            />
                        </a>
                        <div>
                            <a
                                href="/"
                                aria-label="Author"
                                title="Author"
                                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Vasile Melinte
                            </a>
                            <p className="text-sm font-medium leading-4 text-gray-600">
                                Author
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-8 bg-white border rounded shadow-sm">
                    <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <a
                            href="/"
                            className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            aria-label="Category"
                        >
                            Prototype Inheritance
                        </a>{' '}
                        <span className="text-gray-600">— 15 Nov 2020</span>
                    </p>
                    <a
                        href="/"
                        aria-label="Article"
                        title="Happy new Year"
                        className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                        What is JavaScript prototype?
                    </a>
                    <p className="mb-5 text-gray-700">
                        In JavaScript a prototype means an object inherits all properties from another object. The object from where the properties are inherited is called prototype object. In short, Object can inherits properties from another object.
                    </p>
                    <div className="flex items-center">
                        <a href="/" aria-label="Author" title="Author" className="mr-3">
                            <img
                                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="avatar"
                                className="object-cover w-10 h-10 rounded-full shadow-sm"
                            />
                        </a>
                        <div>
                            <a
                                href="/"
                                aria-label="Author"
                                title="Author"
                                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                John Doe
                            </a>
                            <p className="text-sm font-medium leading-4 text-gray-600">
                                Author
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-8 bg-white border rounded shadow-sm">
                    <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <a
                            href="/"
                            className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            aria-label="Category"
                        >
                            React Unit Test
                        </a>{' '}
                        <span className="text-gray-600">— 28 Dec 2020</span>
                    </p>
                    <a
                        href="/"
                        aria-label="Article"
                        title="Why i love C++"
                        className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                        What is Unit Testing?
                    </a>
                    <p className="mb-5 text-gray-700">
                        Unit Testing is a testing method that tests an individual unit of software in isolation. Unit testing for React Apps means testing an individual React Component. Unit testing is a great discipline, which can lead to 40%-80% reductions in bug density.
                    </p>
                    <div className="flex items-center">
                        <a href="/" aria-label="Author" title="Author" className="mr-3">
                            <img
                                src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                                alt="avatar"
                                className="object-cover w-10 h-10 rounded-full shadow-sm"
                            />
                        </a>
                        <div>
                            <a
                                href="/"
                                aria-label="Author"
                                title="Author"
                                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Andrew Larkin
                            </a>
                            <p className="text-sm font-medium leading-4 text-gray-600">
                                Author
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-8 bg-white border rounded shadow-sm">
                    <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <a
                            href="/"
                            className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            aria-label="Category"
                        >
                            React vs Angular
                        </a>{' '}
                        <span className="text-gray-600">— 28 Dec 2020</span>
                    </p>
                    <a
                        href="/"
                        aria-label="Article"
                        title="Why i love C++"
                        className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                        React vs Vue vs Angular?
                    </a>
                    <p className="mb-5 text-gray-700">
                        Which is more popular React Vue or Angular?
                        Popularity. According to a survey by Stack Overflow 40.13% of the developers believe that React is the most commonly used JavaScript Framework. Angular and Vue follow it with 22.96% and 18.97%, respectively.
                    </p>
                    <div className="flex items-center">
                        <a href="/" aria-label="Author" title="Author" className="mr-3">
                            <img
                                src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                                alt="avatar"
                                className="object-cover w-10 h-10 rounded-full shadow-sm"
                            />
                        </a>
                        <div>
                            <a
                                href="/"
                                aria-label="Author"
                                title="Author"
                                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Andrew Larkin
                            </a>
                            <p className="text-sm font-medium leading-4 text-gray-600">
                                Author
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};