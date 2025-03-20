import React from "react";

const CardSection = () => {
  const cards = [
    {
      image: "/src/assets/model1.jpg",
      title: "Eco Aware organic cotton top",
      stars: "*****",
      price: "$ 39.00",
      link: "/product/eco-aware-organic-cotton-top", // Replace with actual link
    },
    {
      image: "/src/assets/model2.jpg",
      title: "Eco aware long sleeve blouse",
      stars: "*****",
      price: "$ 47.00",
      link: "/product/eco-aware-long-sleeve-blouse", // Replace with actual link
    },
    {
      image: "/src/assets/model3.jpg",
      title: "Oversized jacket with denim panels",
      stars: "*****",
      price: "$ 33.00",
      link: "/product/oversized-jacket-denim-panels", // Replace with actual link
    },
    {
      image: "/src/assets/model4.jpg",
      title: "Levi's essential western denim shirt",
      stars: "★★★★☆",
      price: "$ 115.00",
      link: "/product/levis-essential-western-denim-shirt", //Replace with actual link
    },
    {
      image: "/src/assets/model5.jpg",
      title: "Faux suede biker jacket",
      stars: "*****",
      price: "$ 60.00",
      link: "/product/faux-suede-biker-jacket", //Replace with actual link
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
            className="border rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-lg"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-auto aspect-[2/3] object-cover" // Maintain aspect ratio
            />
            <div className="p-4">
              <h3 className="text-sm font-semibold mb-2 font-sans line-clamp-2">
                {card.title}
              </h3>
              <p className="text-yellow-500 mb-2">{card.stars}</p>
              <p className="text-lg font-bold font-sans">{card.price}</p>
              <a
                href={card.link}
                className="block mt-4 font-bold py-2 px-4 rounded text-center bg-black text-white border-2 border-black"
              >
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
