import CategoryCard from "../Components/CategoryCard";

const Landing = () => {
  const cardData = [
    {
      id: 1,
      title: "Card 1",
      image:
        "https://unsplash.com/photos/white-and-blue-cloudy-sky-f5_lfi2S-d4",
    },
    {
      id: 2,
      title: "Card 2",
      image:
        "https://unsplash.com/photos/white-and-blue-cloudy-sky-f5_lfi2S-d4",
    },
    {
      id: 3,
      title: "Card 3",
      image:
        "https://unsplash.com/photos/white-and-blue-cloudy-sky-f5_lfi2S-d4",
    },
    {
      id: 4,
      title: "Card 3",
      image:
        "https://unsplash.com/photos/white-and-blue-cloudy-sky-f5_lfi2S-d4",
    },
    {
      id: 5,
      title: "Card 3",
      image:
        "https://unsplash.com/photos/white-and-blue-cloudy-sky-f5_lfi2S-d4",
    },
    {
      id: 6,
      title: "Card 3",
      image:
        "https://unsplash.com/photos/white-and-blue-cloudy-sky-f5_lfi2S-d4",
    },
    {
      id: 7,
      title: "Card 3",
      image:
        "https://unsplash.com/photos/white-and-blue-cloudy-sky-f5_lfi2S-d4",
    },
    {
      id: 8,
      title: "Card 3",
      image:
        "https://unsplash.com/photos/white-and-blue-cloudy-sky-f5_lfi2S-d4",
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      <nav className="border flex justify-between">
        <div className="flex m-2 px-2 gap-3 items-center">
          <b>BiddingWebsite</b>
          <input
            className="border rounded p-1 focus:outline-none "
            type="search"
            name=""
            id="search"
            title="searchbar"
            placeholder="Search your location"
          />
        </div>
        <div className="flex items-center m-2 px-2">
          <button className="border rounded-md p-1 px-2">Login/SignUp</button>
        </div>
      </nav>

      <div id="categories" className="m-2 p-1">
        <h1 className="font-semibold text-lg">Categories you may like</h1>
        <div className="flex flex-wrap justify-center gap-4 ">
          {cardData.map((card) => (
            <CategoryCard key={card.id} title={card.title} image={card.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
