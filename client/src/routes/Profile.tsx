import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import LoadingSell from "../components/LoadingSell";
import { cartPokemon } from "../features/Cart/cartSlice";
import { getMoneyAsync, selectUser } from "../features/frontUser/userSlice";
import HistoryList from "./HistoryList";
import PokedexList from "./PokedexList";
import SalesList from "./SalesList";

export interface order {
  __v: number;
  _id: string;
  createdAt: string;
  idBuyers: string;
  ordersItems: Array<cartPokemon>;
  total: number;
  updatedAt: string;
}

export type ordersArray = Array<order>;

export default function Profile() {
  const initialOrders: ordersArray = [];
  const [orders, setOrders] = useState(initialOrders);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [sales, setSales] = useState<any[]>([]);

  const getOrdersUser = async () => {
    const response = await axios
      .get(
        `https://black-market-pokemon-server.onrender.com/api/order/find/${user.userId}`,
        {
          withCredentials: true,
        }
      )
      .then(function (response) {
        setOrders(response.data.orders);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getSales = async () => {
    const response = await axios
      .get(
        `https://black-market-pokemon-server.onrender.com/api/product/findProduct/${user.userId}`,
        {
          withCredentials: true,
        }
      )
      .then(function (response) {
        setSales(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(getMoneyAsync(user.userId!));
    getOrdersUser();
    getSales();
  }, []);

  return (
    <>
      <div className="h-full bg-gray-200 p-8">
        <div className="bg-white rounded-lg shadow-xl pb-8">
          <div className="w-full h-[250px] mt-16">
            <div className="w-full h-full rounded-tl-lg rounded-tr-lg bg-red-rocket"></div>
          </div>
          <div className="flex flex-col items-center -mt-20">
            <img
              src="rocket.jpeg"
              className="w-40 border-4 border-white rounded-full"
            />
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-2xl Pokemon">
                {user.userName ? user.userName : "Your name"}
              </p>
            </div>
            <p className="text-gray-700 ">
              {user.mail ? user.mail : "Your E-mail"}
            </p>
            <div className="flex flex-row">
              <p className="text-sm text-gray-500 Pokemon">
                {user.credits ? user.credits : "500"}
              </p>
              <p className="text-sm Pokemon">$</p>
            </div>
          </div>
          {/* <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
                <div className="flex items-center space-x-4 mt-2">
                    <button className="flex items-center bg-red-700 hover:bg-white text-white hover:text-red-700 border border-transparent hover:border-red-700 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                       <span>Delete Profile</span>
                    </button>
                </div>
            </div> */}
        </div>

        <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
          <div className="w-full flex flex-col 2xl:w-1/3">
            <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
              <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
              <ul className="mt-2 text-gray-700">
                <li className="flex border-y py-2">
                  <span className="font-bold w-24">Name:</span>
                  <span className="text-gray-700">
                    {user.userName ? user.userName : "Your name"}
                  </span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">E-mail:</span>
                  <span className="text-gray-700">
                    {user.mail ? user.mail : "Your E-mail"}
                  </span>
                </li>
                <div className="flex flex-row justify-between">
                  <Link to={"/ModifyProfile"}>
                    <button className="flex items-center hover:bg-red-rocket bg-white hover:text-white text-red-rocket border hover:border-transparent border-red-rocket px-4 py-2 rounded text-sm space-x-2 transition duration-100 mt-8">
                      <span>Modify Profile</span>
                    </button>
                  </Link>
                  <Link to={"/AddPokedollar"}>
                    <button className="flex items-center hover:bg-red-rocket bg-white hover:text-white text-red-rocket border hover:border-transparent border-red-rocket px-4 py-2 rounded text-sm space-x-2 transition duration-100 mt-8">
                      <span>Add Pokedollar</span>
                    </button>
                  </Link>
                </div>
              </ul>
            </div>
            <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
              <h4 className="text-xl text-gray-900 font-bold">
                History of purchases
              </h4>
              <div className="relative px-4 overflow-y-scroll h-96">
                {orders.length === 0 ? (
                  <LoadingSell />
                ) : (
                  orders.map((order) => (
                    <HistoryList key={order._id} {...order} />
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full 2xl:w-2/3">
            <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
              <h4 className="text-xl text-gray-900 font-bold">My Pokedex</h4>
              <div className="mt-2 mb-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 overflow-y-scroll overflow-x-hidden h-96">
                {orders.length === 0 ? (
                  <LoadingSell />
                ) : (
                  orders.map((order) => (
                    <PokedexList key={order._id} {...order} />
                  ))
                )}
              </div>
            </div>
            <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
              <h4 className="text-xl text-gray-900 font-bold">Statistics</h4>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
                <div className="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-indigo-600">
                      Number of Sales
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <div>
                      <svg
                        className="w-12 h-12 p-2.5 bg-indigo-600 bg-opacity-20 rounded-full text-green-600 border border-indigo-600"
                        fill="none"
                        stroke="blue"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-end">
                        <span className="text-2xl 2xl:text-3xl font-bold">
                          {sales!.length}
                        </span>
                        <div className="flex items-center ml-2 mb-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-green-600">
                      Number of Buy
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <div>
                      <svg
                        className="w-12 h-12 p-2.5 bg-green-400 bg-opacity-20 rounded-full text-green-600 border border-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-end">
                        <span className="text-2xl 2xl:text-3xl font-bold">
                          {orders.length}
                        </span>
                        <div className="flex items-center ml-2 mb-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="flex items-center justify-between">
            <h4 className="text-xl text-gray-900 font-bold">My sales</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-8 mt-8 h-96 overflow-y-scroll overflow-x-hidden">
            <SalesList />
          </div>
        </div>
      </div>
    </>
  );
}
