import { ReactNode, createContext, useContext, useState } from "react";
interface DegreeContextType {
    degree: string;
    setDegree: (degree: string) => void;
  }
const DegreeContext =createContext<DegreeContextType | undefined>(undefined); 
function DegreeProvider({ children }:{children:ReactNode}) {
    const [degree, setDegree] = useState("c");

  return (
    <DegreeContext.Provider value={{ degree,setDegree }}>
      {children}
    </DegreeContext.Provider>
  );
}
function useDegree() {
  const context = useContext(DegreeContext);
  if (context === undefined) throw new Error("useDegree must be used within a DegreeProvider");
  return context;
}
export { useDegree, DegreeProvider };
