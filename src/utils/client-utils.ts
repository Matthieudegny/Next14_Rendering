// librarie pour éviter de retourner du contenu coté clien tdans un composant server side
import "client-only";

export const clientSideFunction = () => {
  console.log(
    `use window object,
       use localStorage`
  );
  return "client result";
};
