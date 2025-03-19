import React from "react";

const CardSection = () => {
  const cards = [
    {
      image: "/src/assets/pic.png", // Replace with your image path
      title: "Eco Aware organic cotton top",
      stars: "*****",
      price: "$ 39.00",
    },
    {
      image: "/src/assets/pic.png", // Replace with your image path
      title: "Eco aware long sleeve blouse",
      stars: "*****",
      price: "$ 47.00",
    },
    {
      image: "/src/assets/pic.png", // Replace with your image path
      title: "Oversized jacket with denim panels",
      stars: "*****",
      price: "$ 33.00",
    },
    {
      image: "/src/assets/pic.png", // Replace with your image path
      title: "Levi's essential western denim shirt",
      stars: "★★★★ ☆",
      price: "$ 115.00",
    },
    {
      image: "/src/assets/pic.png", // Replace with your image path
      title: "Faux suede biker jacket",
      stars: "*****",
      price: "$ 60.00",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-wider uppercase mb-4 font-serif">
          WE LOVE
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-semibold mb-2 font-sans">
                {card.title}
              </h3>
              <p className="text-yellow-500 mb-2">{card.stars}</p>
              <p className="text-lg font-bold font-sans">{card.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
