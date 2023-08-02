import { createContext, useContext, useState, useEffect } from "react"

export const modalContext = createContext()

export const ModalContextProvider = ({children})=>{
    const[modalShow, setModalShow] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [searchValue, setSearchValue] = useState('')

    const handleShow = ()=>{
        setModalShow(!modalShow)
    }

    const handleMobileView = () => {
        setWindowWidth(window.innerWidth)
      };

      useEffect(() => {
        window.addEventListener("resize", handleMobileView);
        return () => window.removeEventListener("resize", handleMobileView);
      },[]);





    return(<modalContext.Provider value={{handleShow, setModalShow, modalShow, searchValue, setSearchValue, windowWidth, }}>
        {children}
    </modalContext.Provider>)
}

export const useModalContext = ()=>{
    return useContext(modalContext)
}