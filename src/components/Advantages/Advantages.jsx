import React from "react";

const advantagesData = [
  {
    title: "Tony Wayne",
    role: "01",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?",
    image:
      "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
  },
  {
    title: "Jane Doe",
    role: "02",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, consequuntur. Dicta exercitationem libero, numquam similique dolore labore est.",
    image:
      "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
  },
  ,
  {
    title: "Jane Doe",
    role: "03",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, consequuntur. Dicta exercitationem libero, numquam similique dolore labore est.",
    image:
      "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
  },
  ,
  {
    title: "Jane Doe",
    role: "04",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, consequuntur. Dicta exercitationem libero, numquam similique dolore labore est.",
    image:
      "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
  },
  // Add more items as needed
];

const Advantages = () => {
  return (
    <div className=" w-full max-w-[80%] mx-auto my-10">
        <h1 className="my-5 text-3xl font-bold">Komol</h1>
      <div className="flex flex-wrap gap-5 ">
      {advantagesData.map((advantage, index) => (
        <a
          key={index}
          href="#"
          className="group relative block w-full sm:w-[48%] lg:w-[23%] bg-black flex-1"
        >
          <img
            alt={advantage.title}
            src={advantage.image}
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />
          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
              {advantage.role}
            </p>
            <p className="text-xl font-bold text-white sm:text-2xl">
              {advantage.title}
            </p>
            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">{advantage.description}</p>
              </div>
            </div>
          </div>
        </a>
      ))}
      </div>
    </div>
  );
};

export default Advantages;
