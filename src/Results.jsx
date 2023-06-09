import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No pets found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            id={pet.id}
            animal={pet.animal}
            breed={pet.breed}
            name={pet.name}
            location={`${pet.city}, ${pet.state}`}
            images={pet.images}
          />
        ))
      )}
    </div>
  );
};

export default Results;
