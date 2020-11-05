import React from "react";

const Ninjas = ({ ninjas, deleteNinja }) => {
  //   const ninjaList = ninjas.map((ninja) => {
  //     if (ninja.age > 20) {
  //       return (
  //         <div className="ninja" key={ninja.id}>
  //           <h1>Name : {ninja.name}</h1>
  //           <h1>Age : {ninja.age}</h1>
  //           <h1>Belt : {ninja.belt}</h1>
  //         </div>
  //       );
  //     } else {
  //       return null;
  //     }
  //   });
  // Tenary Operator

  const ninjaList = ninjas.map((ninja) => {
    return ninja.age > 20 ? (
      <div className="ninja" key={ninja.id}>
        <h1>Name : {ninja.name}</h1>
        <h1>Age : {ninja.age}</h1>
        <h1>Belt : {ninja.belt}</h1>
        <button
          onClick={() => {
            deleteNinja(ninja.id);
          }}
        >
          Delete ninja
        </button>
      </div>
    ) : null;
  });
  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninjas;
