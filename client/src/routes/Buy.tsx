import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import BuyPokemon from "../components/BuyPokemon";
import {
  buyPokemon,
  emptyArray,
  getBuyListFromServerAsync,
  listBuy,
  selectBuyList,
} from "../features/buyList/buyListSlice";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "./Buy.css";
import { cartPokemon, listCart, selectCart } from "../features/Cart/cartSlice";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Buy() {
  const [typerecherche, setTypeRecherche] = useState("");
  const buyList: listBuy = useAppSelector(selectBuyList);
  let cartPkmn: listCart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  const shouldLoad = useRef(true);
  const getTotalQuantity = () => {
    let total = 0;
    cartPkmn.list.forEach((item: any) => {
      total += item.qty;
    });
    return total;
  };

  const switchType = (type: string) => (event: any) => {
    setTypeRecherche(type);
  };
  const activated =
    "flex items-center justify-center flex-shrink-0 px-3 py-2 space-x-2 text-gray-300 hover:opacity-80 border-2 border-darkest bg-bckfilter rounded-3xl";
  const disActivated =
    "flex items-center justify-center flex-shrink-0 px-3 py-2 space-x-2 text-gray-600 hover:text-red-rocket border-2 border-darkest bg-red rounded-3xl";

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    if (shouldLoad.current) {
      dispatch(emptyArray());
      dispatch(getBuyListFromServerAsync());
      shouldLoad.current = false;
    }
  }, []);
  return (
    <>
      <div className="bg-white">
        <div className="pt-32  bg-white">
          <h1 className="text-center text-2xl font-bold text-gray-800 Pokemon">
            Let's buy them all !
          </h1>
        </div>
        <div className="flex items-center justify-center xl:hidden pb-8 pt-8">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                Filtrer par type
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className=" z-10 mt-2 w-screen origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className="flex flex-row items-center justify-center"
                        onClick={switchType("")}
                      >
                        <button
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900 text-2xl w-full  flex flex-rowjustify-center"
                              : "text-gray-700 ",
                            " px-4 py-2 text-2xl w-full flex flex-row justify-center"
                          )}
                        >
                          <img className="w-8 h-8" src="pokeball.png" />
                          All
                        </button>
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className="flex flex-row items-center justify-center"
                        onClick={switchType("fire")}
                      >
                        <button
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900 text-2xl w-full  flex flex-rowjustify-center"
                              : "text-gray-700 ",
                            " px-4 py-2 text-2xl w-full flex flex-row justify-center"
                          )}
                        >
                          <img className="w-8 h-8" src="fire.svg" />
                          Fire
                        </button>
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className="flex flex-row items-center justify-center"
                        onClick={switchType("water")}
                      >
                        <button
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900 text-2xl w-full  flex flex-rowjustify-center"
                              : "text-gray-700 ",
                            " px-4 py-2 text-2xl w-full flex flex-row justify-center"
                          )}
                        >
                          <img className="w-8 h-8" src="water.svg" />
                          Water
                        </button>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className="flex flex-row items-center justify-center"
                        onClick={switchType("grass")}
                      >
                        <button
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900 text-2xl w-full  flex flex-rowjustify-center"
                              : "text-gray-700 ",
                            " px-4 py-2 text-2xl w-full flex flex-row justify-center"
                          )}
                        >
                          <img className="w-8 h-8" src="grass.svg" />
                          Grass
                        </button>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className="flex flex-row items-center justify-center"
                        onClick={switchType("flying")}
                      >
                        <button
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900 text-2xl w-full  flex flex-rowjustify-center"
                              : "text-gray-700 ",
                            " px-4 py-2 text-2xl w-full flex flex-row justify-center"
                          )}
                        >
                          <img className="w-8 h-8" src="flying.svg" />
                          Flying
                        </button>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className="flex flex-row items-center justify-center"
                        onClick={switchType("normal")}
                      >
                        <button
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900 text-2xl w-full  flex flex-rowjustify-center"
                              : "text-gray-700 ",
                            " px-4 py-2 text-2xl w-full flex flex-row justify-center"
                          )}
                        >
                          <img className="w-8 h-8" src="normal.svg" />
                          Normal
                        </button>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className="flex flex-row items-center justify-center"
                        onClick={switchType("electric")}
                      >
                        <button
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900 text-2xl w-full  flex flex-rowjustify-center"
                              : "text-gray-700 ",
                            " px-4 py-2 text-2xl w-full flex flex-row justify-center"
                          )}
                        >
                          <img className="w-8 h-8" src="electric.svg" />
                          Electric
                        </button>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className="flex flex-row items-center justify-center"
                        onClick={switchType("ice")}
                      >
                        <button
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900 text-2xl w-full  flex flex-rowjustify-center"
                              : "text-gray-700 ",
                            " px-4 py-2 text-2xl w-full flex flex-row justify-center"
                          )}
                        >
                          <img className="w-8 h-8" src="ice.svg" />
                          Ice
                        </button>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className="flex flex-row items-center justify-center"
                        onClick={switchType("fighting")}
                      >
                        <button
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900 text-2xl w-full  flex flex-rowjustify-center"
                              : "text-gray-700 ",
                            " px-4 py-2 text-2xl w-full flex flex-row justify-center"
                          )}
                        >
                          <img className="w-8 h-8" src="fighting.svg" />
                          Fighting
                        </button>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className="flex flex-row items-center justify-center"
                        onClick={switchType("poison")}
                      >
                        <button
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900 text-2xl w-full  flex flex-rowjustify-center"
                              : "text-gray-700 ",
                            " px-4 py-2 text-2xl w-full flex flex-row justify-center"
                          )}
                        >
                          <img className="w-8 h-8" src="poison.svg" />
                          Poison
                        </button>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className="flex flex-row items-center justify-center"
                        onClick={switchType("ground")}
                      >
                        <button
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900 text-2xl w-full  flex flex-rowjustify-center"
                              : "text-gray-700 ",
                            " px-4 py-2 text-2xl w-full flex flex-row justify-center"
                          )}
                        >
                          <img className="w-8 h-8" src="ground.svg" />
                          Ground
                        </button>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className="flex flex-row items-center justify-center"
                        onClick={switchType("psychic")}
                      >
                        <button
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900 text-2xl w-full  flex flex-rowjustify-center"
                              : "text-gray-700 ",
                            " px-4 py-2 text-2xl w-full flex flex-row justify-center"
                          )}
                        >
                          <img className="w-8 h-8" src="psychic.svg" />
                          Psychic
                        </button>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className="flex flex-row items-center justify-center"
                        onClick={switchType("bug")}
                      >
                        <button
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900 text-2xl w-full  flex flex-rowjustify-center"
                              : "text-gray-700 ",
                            " px-4 py-2 text-2xl w-full flex flex-row justify-center"
                          )}
                        >
                          <img className="w-8 h-8" src="bug.svg" />
                          Bug
                        </button>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className="flex flex-row items-center justify-center"
                        onClick={switchType("rock")}
                      >
                        <button
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900 text-2xl w-full  flex flex-rowjustify-center"
                              : "text-gray-700 ",
                            " px-4 py-2 text-2xl w-full flex flex-row justify-center"
                          )}
                        >
                          <img className="w-8 h-8" src="rock.svg" />
                          Rock
                        </button>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className="flex flex-row items-center justify-center"
                        onClick={switchType("ghost")}
                      >
                        <button
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900 text-2xl w-full  flex flex-rowjustify-center"
                              : "text-gray-700 ",
                            " px-4 py-2 text-2xl w-full flex flex-row justify-center"
                          )}
                        >
                          <img className="w-8 h-8" src="ghost.svg" />
                          Ghost
                        </button>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className="flex flex-row items-center justify-center"
                        onClick={switchType("dark")}
                      >
                        <button
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900 text-2xl w-full  flex flex-rowjustify-center"
                              : "text-gray-700 ",
                            " px-4 py-2 text-2xl w-full flex flex-row justify-center"
                          )}
                        >
                          <img className="w-8 h-8" src="dark.svg" />
                          Dark
                        </button>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className="flex flex-row items-center justify-center"
                        onClick={switchType("dragon")}
                      >
                        <button
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900 text-2xl w-full  flex flex-rowjustify-center"
                              : "text-gray-700 ",
                            " px-4 py-2 text-2xl w-full flex flex-row justify-center"
                          )}
                        >
                          <img className="w-8 h-8" src="dragon.svg" />
                          Dragon
                        </button>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className="flex flex-row items-center justify-center"
                        onClick={switchType("steel")}
                      >
                        <button
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900 text-2xl w-full  flex flex-rowjustify-center"
                              : "text-gray-700 ",
                            " px-4 py-2 text-2xl w-full flex flex-row justify-center"
                          )}
                        >
                          <img className="w-8 h-8" src="steel.svg" />
                          Steel
                        </button>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className="flex flex-row items-center justify-center"
                        onClick={switchType("fairy")}
                      >
                        <button
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900 text-2xl w-full  flex flex-rowjustify-center"
                              : "text-gray-700 ",
                            " px-4 py-2 text-2xl w-full flex flex-row justify-center"
                          )}
                        >
                          <img className="w-8 h-8" src="fairy.svg" />
                          Fairy
                        </button>
                      </div>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="hidden xl:visible mx-auto xl:grid max-w-1xl  grid-cols-1 gap-6 p-6  xl:grid-cols-7 overflow-y-hidden py-10    bg-white text-gray-800 ">
          <button
            className={typerecherche === "" ? activated : disActivated}
            onClick={switchType("")}
          >
            <img className="w-8 h-8" src="pokeball.png" />
            <span>All</span>
          </button>
          <button
            className={typerecherche === "fire" ? activated : disActivated}
            onClick={switchType("fire")}
          >
            <img className="w-8 h-8" src="fire.svg" />
            <span>Fire</span>
          </button>
          <button
            className={typerecherche === "water" ? activated : disActivated}
            onClick={switchType("water")}
          >
            <img className="w-8 h-8" src="water.svg" />
            <span>Water</span>
          </button>
          <button
            className={typerecherche === "grass" ? activated : disActivated}
            onClick={switchType("grass")}
          >
            <img className="w-8 h-8" src="grass.svg" />
            <span>Grass</span>
          </button>
          <button
            className={typerecherche === "flying" ? activated : disActivated}
            onClick={switchType("flying")}
          >
            <img className="w-8 h-8" src="flying.svg" />
            <span>Flying</span>
          </button>
          <button
            className={typerecherche === "normal" ? activated : disActivated}
            onClick={switchType("normal")}
          >
            <img className="w-8 h-8" src="normal.svg" />
            <span>Normal</span>
          </button>
          <button
            className={typerecherche === "electric" ? activated : disActivated}
            onClick={switchType("electric")}
          >
            <img className="w-8 h-8" src="electric.svg" />
            <span>Electric</span>
          </button>
          <button
            className={typerecherche === "ice" ? activated : disActivated}
            onClick={switchType("ice")}
          >
            <img className="w-8 h-8" src="ice.svg" />
            <span>Ice</span>
          </button>
          <button
            className={typerecherche === "fighting" ? activated : disActivated}
            onClick={switchType("fighting")}
          >
            <img className="w-8 h-8" src="fighting.svg" />
            <span>Fighting</span>
          </button>
          <button
            className={typerecherche === "poison" ? activated : disActivated}
            onClick={switchType("poison")}
          >
            <img className="w-8 h-8" src="poison.svg" />
            <span>Poison</span>
          </button>
          <button
            className={typerecherche === "ground" ? activated : disActivated}
            onClick={switchType("ground")}
          >
            <img className="w-8 h-8" src="ground.svg" />
            <span>Ground</span>
          </button>
          <button
            className={typerecherche === "psychic" ? activated : disActivated}
            onClick={switchType("psychic")}
          >
            <img className="w-8 h-8" src="psychic.svg" />
            <span>Psychic</span>
          </button>
          <button
            className={typerecherche === "bug" ? activated : disActivated}
            onClick={switchType("bug")}
          >
            <img className="w-8 h-8" src="bug.svg" />
            <span>Bug</span>
          </button>
          <button
            className={typerecherche === "rock" ? activated : disActivated}
            onClick={switchType("rock")}
          >
            <img className="w-8 h-8" src="rock.svg" />
            <span>Rock</span>
          </button>
          <button
            className={typerecherche === "ghost" ? activated : disActivated}
            onClick={switchType("ghost")}
          >
            <img className="w-8 h-8" src="ghost.svg" />
            <span>Ghost</span>
          </button>
          <button
            className={typerecherche === "dark" ? activated : disActivated}
            onClick={switchType("dark")}
          >
            <img className="w-8 h-8" src="dark.svg" />
            <span>Dark</span>
          </button>
          <button
            className={typerecherche === "dragon" ? activated : disActivated}
            onClick={switchType("dragon")}
          >
            <img className="w-8 h-8" src="dragon.svg" />
            <span>Dragon</span>
          </button>
          <button
            className={typerecherche === "steel" ? activated : disActivated}
            onClick={switchType("steel")}
          >
            <img className="w-8 h-8" src="steel.svg" />
            <span>Steel</span>
          </button>
          <button
            className={typerecherche === "fairy" ? activated : disActivated}
            onClick={switchType("fairy")}
          >
            <img className="w-8 h-8" src="fairy.svg" />
            <span>Fairy</span>
          </button>
        </div>
        <section className="py-10 bg-bck h-full min-h-screen  pt-32">
          <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {buyList.list.length === 0 ? (
              <Loading />
            ) : (
              buyList.list.map((pkmn) =>
                pkmn.typeFirst === typerecherche ||
                pkmn.typeSecond === typerecherche ||
                typerecherche === "" ? (
                  <BuyPokemon key={uuidv4()} {...pkmn} />
                ) : (
                  ""
                )
              )
            )}
          </div>
        </section>
        <Link to={{ pathname: `/Checkout` }}>
          <div className="shopping-cart w-20 sm:w-32">
            <img id="cartIcon" src="pokeball.png" />
            <p>{getTotalQuantity() || 0}</p>
          </div>
        </Link>
      </div>
    </>
  );
}
