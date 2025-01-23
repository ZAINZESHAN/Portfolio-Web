import React from 'react';
import { Triangle } from 'react-loader-spinner'; // Make sure to install this package

const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-white relative">
            <div className="relative">
                <Triangle
                    height="120"
                    width="120"
                    color="#00cc7a"
                    ariaLabel="triangle-loading"
                    visible={true}
                />
                <div className="absolute top-0 left-0 h-full w-full">
                    <svg
                        className="triangle-shadow"
                        width="120"
                        height="120"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 2L22 20H2L12 2Z"
                            fill="rgba(0, 204, 122, 0.4)"
                            filter="blur(4px)"
                        />
                    </svg>
                </div>
            </div>
            <p className="font-Aguafina mt-4 text-5xl pt-6 text-black animate-bounce">
                &lt;A Developer /&gt;
            </p>
        </div>
    );
};

export default Loader;
