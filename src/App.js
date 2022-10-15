const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 1,
      title: "Jackets",
    },
    {
      id: 1,
      title: "Sneakers",
    },
    {
      id: 1,
      title: "Womens",
    },
    {
      id: 1,
      title: "Mens",
    }
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title, id }) => (
        <div className="category-container">
          <div key={id} className="category-body-container">
            <h2>{title}</h2>
            <p>shop now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
