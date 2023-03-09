import { createContext, useState } from "react";
import Card from "../../Components/Card/Card";

export const CardContext = createContext([]);

export default function CatalogueProvider({ children }) {
  const [catalogue, setCatalogue] = useState(Card());
  const addToCatalogue = (item) => {
    setCatalogue([...catalogue, item]);
  };
  const removeToCatalogue = (item) => {
    const newCatalogue = catalogue.filter(
      (itemOnCatalogue) => itemOnCatalogue.name !== item.name
    );
    setCatalogue(newCatalogue);
  };
  return (
    <CatalogueContext.Provider
      value={{ catalogue, addToCatalogue, removeToCatalogue }}
    >
      {children}
    </CatalogueContext.Provider>
  );
};
