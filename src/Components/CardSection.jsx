import React from "react";
import Img1 from "../assets/model1.jpg";
import Img2 from "../assets/model2.jpg";
import Img3 from "../assets/model3.jpg";
import Img4 from "../assets/model4.jpg";
import Img5 from "../assets/model5.jpg";
const CardSection = () => {
  const cards = [
    {
      image: Img1,
      title: "Eco Aware organic cotton top",
      stars: "*****",
      price: "$ 39.00",
    },
    {
      image: Img2,
      title: "Eco aware long sleeve blouse",
      stars: "*****",
      price: "$ 47.00",
    },
    {
      image: Img3,
      title: "Oversized jacket with denim panels",
      stars: "*****",
      price: "$ 33.00",
    },
    {
      image: Img4,
      title: "Levi's essential western denim shirt",
      stars: "★★★★☆",
      price: "$ 115.00",
    },
    {
      image: Img5,
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
            className="border rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-lg"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-auto aspect-[2/3] object-cover"
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
