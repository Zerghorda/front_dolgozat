import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");
export const ApiProvider = ({ children }) => {
  const [receptLista, setRecept] = useState([]);

  const getAdat = async (vegpont, callbackFv) => {
    try {
      const response = await myAxios.get(vegpont);
      // console.log("adat: ", response.data);
      callbackFv(response.data);
    } catch (err) {
      console.log("Hiba történt az adat elküldesékor", err);
    } finally {
    }
  };

  const postAdat = async (vegpont, adat) => {
    try {
      const response = await myAxios.post(vegpont, adat);
      console.log("adat: ", response.data);
    } catch (err) {
      console.log("Hiba történt az adat elküldesékor", err);
    } finally {
    }
  };

  const deleteAdat = async (vegpont, id) => {
    try {
      const response = await myAxios.delete(vegpont + "/" + id);
      console.log("adat: ", response.data);
    } catch (err) {
      console.log("Hiba történt az adat elküldesékor", err);
    } finally {
    }
  };

  const patchAdat = async (vegpont, id) => {
    try {
      const response = await myAxios.patch(vegpont + "/" + id);
      console.log("adat: ", response.data);
    } catch (err) {
      console.log("Hiba történt az adat elküldesékor", err);
    } finally {
    }
  };

  useEffect(() => {
    getAdat("/recepts", setRecept);
  }, []);

  return (
    <ApiContext.Provider
      value={{ receptLista, postAdat, deleteAdat, patchAdat }}
    >
      {children}
    </ApiContext.Provider>
  );
};
