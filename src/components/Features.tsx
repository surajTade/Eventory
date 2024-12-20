import featureList from "../utils/featureList";

const Features = () => {
  return (
    <div className="mt-20 md:mt-28 w-full text-center" id={"features"}>
      <h2 className="text-3xl md:text-5xl uppercase font-bold">Features</h2>
      <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featureList.map((feature, index) => (
          <li key={index} className="flex flex-col justify-between">
            <span className="font-semibold text-xl">{feature.title}</span>
            <p className="">{feature.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
