import React, { useState } from "react";

const WhyUs = () => {
  const [cards] = useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      date: "10th Oct 2022",
      title: "How to position your furniture for positivity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      date: "10th Oct 2022",
      title: "How to position your furniture for positivity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      date: "10th Oct 2022",
      title: "How to position your furniture for positivity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      date: "10th Oct 2022",
      title: "How to position your furniture for positivity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
    },
  ]);

  return (
    <div className="flex flex-col w-full max-w-[80%] mx-auto my-10">
      <h1 className="my-5 text-3xl font-bold">Komol</h1>
      <div className="flex gap-5">
        {cards.map((card) => (
          <article
            key={card.id}
            className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg flex-1"
          >
            <img
              alt=""
              src={card.image}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <time
                  dateTime="2022-10-10"
                  className="block text-xs text-white/90"
                >
                  {card.date}
                </time>
                <a href="#">
                  <h3 className="mt-0.5 text-lg text-white">{card.title}</h3>
                </a>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  {card.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
