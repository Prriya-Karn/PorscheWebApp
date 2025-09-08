import React from "react";

const Contact = () => {
    const cards = [
        {
            img: "https://images-porsche.imgix.net/-/media/B4896D12FDC04ABEB05E4DA3C77F4B57_D5638C29848E4F9B82961F71B7FE07D9_A24P5KOD0010-man-checking-phone?w=645&ar=3%3A4&q=45&dpr=2&auto=format",
            title: "Contact.",
            desc: "To enquire about your model of choice, please contact your local Porsche Centre.",
            buttonText: "Go to contact form",
        },
        {
            img: "https://images-porsche.imgix.net/-/media/081CCCA369C740C8A8ED9770FF6A2FAF_8F3A046CAC0643B0916E9C83D637B4D3_porsche-panamera-paint-to-samle-ultraviolet?w=645&ar=3%3A4&q=45&dpr=2&auto=format",
            title: "Paint to Sample.",
            desc: "Discover very special exterior colours for your Panamera from Porsche Exclusive Manufaktur.",
            buttonText: "Discover colour choices",

        },
    ];

    return (
        <div className="lg:max-w-3xl md:max-w-2xl sm:max-w-xl max-w-sm mt-40 gap-5 relative mx-auto my-16 grid grid-cols-1 md:grid-cols-2">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className={`rounded-lg relative 
                        overflow-hidden shadow-lg 
                        bg-gradient-to-b from-gray-800
                         via-gray-900 to-black text-white 
                         ${index % 2 === 1 ? "top-10" : ""
                        }`}
                >

                    <img src={card.img} alt={card.title} className="w-full" />
                    <div className="p-6 absolute z-20 bottom-8">
                        <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
                        <p className="text-gray-300 text-sm mb-6">{card.desc}</p>
                        <button className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition">
                            {card.buttonText}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Contact;
