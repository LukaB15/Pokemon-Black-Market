import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import PokeList from "../components/PokeList";
import { selectUser, userType } from "../features/frontUser/userSlice";
import {
  selectSellPkmn,
  sellPkmnSliceAsync,
  SellPkmnState,
  storeLvl,
  storePrice,
  storeQty,
} from "../features/sellPokemon/sellPkmnSlice";

export default function Sell() {
  const [searchTerm, setSearchTerm] = useState("");
  const user:userType = useAppSelector(selectUser);

  const sellPkmn: SellPkmnState = useAppSelector(selectSellPkmn);
  const dispatch = useAppDispatch();
  const navigate = useNavigate() 

  const sellStorePrice = (e: any) => {
    const sellValue: number = +e.target.value;
    dispatch(storePrice(sellValue));
  };
  const sellStoreLvl = (e: any) => {
    const lvlValue: number = +e.target.value;
    dispatch(storeLvl(lvlValue));
  };
  const sellStoreQty = (e: any) => {
    const qtyValue: number = +e.target.value;
    dispatch(storeQty(qtyValue));
  };
  const sendStateToServer = () => {
    dispatch(sellPkmnSliceAsync(sellPkmn));
  };

  const disabledMessage = () => {
    if(user.userName === null){
      return "Please login to continue"
    }else if(!sellPkmn.lvl || !sellPkmn.name || !sellPkmn.price || !sellPkmn.qty){
      return "All Fields are required"
    }else{
      return "Sell"
    }
  }

  useEffect(()=>{
    window.scrollTo(0, 0);
    if(user.userName===null){
      if (window.confirm("Please login to proceed.")) {
        navigate("/Login");
      }      
    }
  },[]);

  return (
    <>

      <div className="bg-bck flex flex-col h-full min-h-screen pb-96">
        <div className="bg-white h-96 w-6/12 sm:w-4/12 ml-28 mt-32 rounded-lg static">
          <img
            className="hidden lg:block w-4/12 h-6/12"
            src="../pokemon1.png"
          />
          <img
            src={sellPkmn.imgUrl ? sellPkmn.imgUrl : "pokeball.png"}
            alt="pkmnimg"
            className="w-28 top-36 left-44 md:w-36 sm:top-96 lg:w-52 lg:top-96 xl:top-72 xl:w-72 2xl:w-96  max-w-xs 2xl:max-w-none absolute sm:left-36 2xl:left-28 z-10"
          />
          <div className="bg-red-rocket bg-opacity-90 w-full sm:w-9/12  ml-0 sm:ml-28 mt-40 pt-10 pb-5 sm:pl-44 pl-10 rounded-lg absolute top-2 xl:top-28 right-0 sm:right-16">
            <h2 className="pokemon text-xs md:text-2xl text-white uppercase">
              {sellPkmn.name ? sellPkmn.name : "Name of the pokemon"}
            </h2>
            <div className="flex flex-col-reverse xl:flex-row">
              <div className="flex flex-col w-6/12 md:w-11/12 sm:w-10/12">
                <h3 className="Pokemon mt-5 mb-2">Enter informations here</h3>
                <form className="flex flex-col">
                  <input
                    className="w-10/12 sm:w-6/12 mt-2 mb-2"
                    type="text"
                    name="Price"
                    placeholder="Price"
                    onChange={sellStorePrice}
                    value={sellPkmn.price ? sellPkmn.price : ""}
                  />
                  <input
                    className="w-10/12 sm:w-6/12 mt-2 mb-2"
                    type="text"
                    name="Level"
                    placeholder="Level"
                    onChange={sellStoreLvl}
                    value={sellPkmn.lvl ? sellPkmn.lvl : ""}
                  />
                  <input
                    className="w-10/12 sm:w-6/12 mt-2 mb-2"
                    type="text"
                    name="Quantity"
                    placeholder="Qty"
                    onChange={sellStoreQty}
                    value={sellPkmn.qty ? sellPkmn.qty : ""}
                  />
                </form>
              </div>
              <div className="w-9/12 md:w-9/12 lg:w-6/12  lg:mr-12 lg:mb-0 xl:mt-0 ">
                <h3 className="Pokemon mt-5 mb-2">Select Pokemon</h3>
                <div className="rounded-xl bg-white p-3 shadow-lg article h-80  flex flex-col items-center  ">
                  <div className="searchbardiv">
                    <input
                      className="w-6/12 md:w-full mt-2 mb-2"
                      type="text"
                      placeholder="Search a Pokemon"
                      onChange={(event) => {
                        setSearchTerm(event.target.value);
                      }}
                    />
                  </div>
                  <PokeList searchTerm={searchTerm} />
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1.5 rounded-lg bg-white w-6/12 lg:w-2/12 px-4 py-1.5 text-black duration-100  hover:text-red-rocket hover:border border mt-6 " onClick={sendStateToServer}>
              <button
                className="text-lg ml-auto mr-auto"
                disabled={
                  !sellPkmn.lvl ||
                  !sellPkmn.name ||
                  !sellPkmn.price ||
                  !sellPkmn.qty ||
                  user.userName === null
                }
                
              >
                {disabledMessage()}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
