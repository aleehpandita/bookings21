import React from 'react';

// import { useTranslation } from 'next-i18next';

export default function Rates(place) {
  const p = place;
  console.log(p);
  // Generar dinamicamente los rates
  return (
    <table className="border w-full ">
      <thead>
        <tr>
          <th className="p-2 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell text-xs text-center">
            Destination Private Transportation
          </th>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell  table-row text-xs text-center">
            Taxi Shuttle (from 1 to 3 pax)
          </th>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell text-xs text-center">
            Standard Private (from 1 to 7 pax)
          </th>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell text-xs text-center">
            VIP Transportation (from 1 to 5 pax)
          </th>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell text-xs text-center">
            Economical Limo (from 1 to 8 pax)
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
            Cancun
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex flex-col ">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              {' '}
              Taxi Shuttle
            </span>
            <div className=" flex flex-row  mt-5">
              <span className="text-sm w-1/2">
                $ 83.00
                {' '}
                <br />
                One Way
              </span>
              <span className="text-sm w-1/2">
                $ 160.00
                {' '}
                <br />
                Round trip
              </span>
            </div>
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex flex-col ">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              {' '}
              Taxi Shuttle
            </span>
            <div className=" flex flex-row  mt-5">
              <span className="text-sm w-1/2">
                $ 83.00
                {' '}
                <br />
                One Way
              </span>
              <span className="text-sm w-1/2">
                $ 160.00
                {' '}
                <br />
                Round trip
              </span>
            </div>
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex flex-col ">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              {' '}
              Taxi Shuttle
            </span>
            <div className=" flex flex-row  mt-5">
              <span className="text-sm w-1/2">
                $ 83.00
                {' '}
                <br />
                One Way
              </span>
              <span className="text-sm w-1/2">
                $ 160.00
                {' '}
                <br />
                Round trip
              </span>
            </div>
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex flex-col ">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              {' '}
              Taxi Shuttle
            </span>
            <div className=" flex flex-row  mt-5">
              <span className="text-sm w-1/2">
                $ 83.00
                {' '}
                <br />
                One Way
              </span>
              <span className="text-sm w-1/2">
                $ 160.00
                {' '}
                <br />
                Round trip
              </span>
            </div>
          </td>
        </tr>
        <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
            Playa del Carmen
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex flex-col ">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              {' '}
              Taxi Shuttle
            </span>
            <div className=" flex flex-row  mt-5">
              <span className="text-sm w-1/2">
                $ 83.00
                {' '}
                <br />
                One Way
              </span>
              <span className="text-sm w-1/2">
                $ 160.00
                {' '}
                <br />
                Round trip
              </span>
            </div>
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex flex-col ">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              {' '}
              Taxi Shuttle
            </span>
            <div className=" flex flex-row  mt-5">
              <span className="text-sm w-1/2">
                $ 83.00
                {' '}
                <br />
                One Way
              </span>
              <span className="text-sm w-1/2">
                $ 160.00
                {' '}
                <br />
                Round trip
              </span>
            </div>
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex flex-col ">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              {' '}
              Taxi Shuttle
            </span>
            <div className=" flex flex-row  mt-5">
              <span className="text-sm w-1/2">
                $ 83.00
                <br />
                One Way
              </span>
              <span className="text-sm w-1/2">
                $ 160.00
                <br />
                Round trip
              </span>
            </div>
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex flex-col ">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              {' '}
              Taxi Shuttle
            </span>
            <div className=" flex flex-row  mt-5">
              <span className="text-sm w-1/2">
                $ 83.00
                {' '}
                <br />
                One Way
              </span>
              <span className="text-sm w-1/2">
                $ 160.00
                {' '}
                <br />
                Round trip
              </span>
            </div>
          </td>
        </tr>
        <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
            Tulum
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex flex-col ">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              {' '}
              Taxi Shuttle
            </span>
            <div className=" flex flex-row mt-5 ">
              <span className="text-sm w-1/2">
                $ 83.00
                {' '}
                <br />
                One Way
              </span>
              <span className="text-sm w-1/2">
                $ 160.00
                {' '}
                <br />
                Round trip
              </span>
            </div>
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex flex-col ">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              {' '}
              Taxi Shuttle
            </span>
            <div className=" flex flex-row mt-5 ">
              <span className="text-sm w-1/2">
                $ 83.00
                {' '}
                <br />
                One Way
              </span>
              <span className="text-sm w-1/2">
                $ 160.00
                {' '}
                <br />
                Round trip
              </span>
            </div>
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex flex-col ">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              {' '}
              Taxi Shuttle
            </span>
            <div className=" flex flex-row mt-5 ">
              <span className="text-sm w-1/2">
                $ 83.00
                {' '}
                <br />
                One Way
              </span>
              <span className="text-sm w-1/2">
                $ 160.00
                {' '}
                <br />
                Round trip
              </span>
            </div>
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex flex-col ">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              {' '}
              Taxi Shuttle
            </span>
            <div className=" flex flex-row mt-5 ">
              <span className="text-sm w-1/2">
                $ 83.00
                {' '}
                <br />
                One Way
              </span>
              <span className="text-sm w-1/2">
                $ 160.00
                {' '}
                <br />
                Round trip
              </span>
            </div>
          </td>
        </tr>
        <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
            Akumal
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex flex-col ">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              {' '}
              Taxi Shuttle
            </span>
            <div className=" flex flex-row mt-5 ">
              <span className="text-sm w-1/2">
                $ 83.00
                {' '}
                <br />
                One Way
              </span>
              <span className="text-sm w-1/2">
                $ 160.00
                {' '}
                <br />
                Round trip
              </span>
            </div>
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex flex-col ">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              {' '}
              Taxi Shuttle
            </span>
            <div className=" flex flex-row mt-5 ">
              <span className="text-sm w-1/2">
                $ 83.00
                {' '}
                <br />
                One Way
              </span>
              <span className="text-sm w-1/2">
                $ 160.00
                {' '}
                <br />
                Round trip
              </span>
            </div>
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex flex-col ">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              {' '}
              Taxi Shuttle
            </span>
            <div className=" flex flex-row mt-5 ">
              <span className="text-sm w-1/2">
                $ 83.00
                {' '}
                <br />
                One Way
              </span>
              <span className="text-sm w-1/2">
                $ 160.00
                {' '}
                <br />
                Round trip
              </span>
            </div>
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex flex-col ">
            <div className=" flex flex-row ">
              <span className="text-sm w-1/2">
                $ 83.00
                {' '}
                <br />
                One Way
              </span>
              <span className="text-sm w-1/2">
                $ 160.00
                {' '}
                <br />
                Round trip
              </span>
            </div>
          </td>
        </tr>
        <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
            Puerto Morelos
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex flex-col ">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              {' '}
              Taxi Shuttle
            </span>
            <div className=" flex flex-row mt-5 ">
              <span className="text-sm w-1/2">
                $ 83.00
                {' '}
                <br />
                One Way
              </span>
              <span className="text-sm w-1/2">
                $ 160.00
                {' '}
                <br />
                Round trip
              </span>
            </div>
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex flex-col ">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              {' '}
              Taxi Shuttle
            </span>
            <div className=" flex flex-row mt-5 ">
              <span className="text-sm w-1/2">
                $ 83.00
                {' '}
                <br />
                One Way
              </span>
              <span className="text-sm w-1/2">
                $ 160.00
                {' '}
                <br />
                Round trip
              </span>
            </div>
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex flex-col ">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              {' '}
              Taxi Shuttle
            </span>
            <div className=" flex flex-row mt-5 ">
              <span className="text-sm w-1/2">
                $ 83.00
                {' '}
                <br />
                One Way
              </span>
              <span className="text-sm w-1/2">
                $ 160.00
                {' '}
                <br />
                Round trip
              </span>
            </div>
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex flex-col ">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              {' '}
              Taxi Shuttle
            </span>
            <div className=" flex flex-row mt-5 ">
              <span className="text-sm w-1/2">
                $ 83.00
                {' '}
                <br />
                One Way
              </span>
              <span className="text-sm w-1/2">
                $ 160.00
                {' '}
                <br />
                Round trip
              </span>
            </div>
          </td>
        </tr>
        <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
            Puerto Aventuras
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex flex-col ">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              {' '}
              Taxi Shuttle
            </span>
            <div className=" flex flex-row mt-5 ">
              <span className="text-sm w-1/2">
                $ 83.00
                {' '}
                <br />
                One Way
              </span>
              <span className="text-sm w-1/2">
                $ 160.00
                {' '}
                <br />
                Round trip
              </span>
            </div>
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex flex-col ">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              {' '}
              Taxi Shuttle
            </span>
            <div className=" flex flex-row mt-5 ">
              <span className="text-sm w-1/2">
                $ 83.00
                {' '}
                <br />
                One Way
              </span>
              <span className="text-sm w-1/2">
                $ 160.00
                {' '}
                <br />
                Round trip
              </span>
            </div>
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex flex-col ">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              {' '}
              Taxi Shuttle
            </span>
            <div className=" flex flex-row mt-5 ">
              <span className="text-sm w-1/2">
                $ 83.00
                {' '}
                <br />
                One Way
              </span>
              <span className="text-sm w-1/2">
                $ 160.00
                {' '}
                <br />
                Round trip
              </span>
            </div>
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex flex-col ">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              {' '}
              Taxi Shuttle
            </span>
            <div className=" flex flex-row mt-5 ">
              <span className="text-sm w-1/2">
                $ 83.00
                {' '}
                <br />
                One Way
              </span>
              <span className="text-sm w-1/2">
                $ 160.00
                {' '}
                <br />
                Round trip
              </span>
            </div>
          </td>
        </tr>
        <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
            Xcaret
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex flex-col ">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              {' '}
              Taxi Shuttle
            </span>
            <div className=" flex flex-row mt-5 ">
              <span className="text-sm w-1/2">
                $ 83.00
                {' '}
                <br />
                One Way
              </span>
              <span className="text-sm w-1/2">
                $ 160.00
                {' '}
                <br />
                Round trip
              </span>
            </div>
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex flex-col ">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              {' '}
              Taxi Shuttle
            </span>
            <div className=" flex flex-row mt-5 ">
              <span className="text-sm w-1/2">
                $ 83.00
                {' '}
                <br />
                One Way
              </span>
              <span className="text-sm w-1/2">
                $ 160.00
                {' '}
                <br />
                Round trip
              </span>
            </div>
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex flex-col ">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              {' '}
              Taxi Shuttle
            </span>
            <div className=" flex flex-row mt-5 ">
              <span className="text-sm w-1/2">
                $ 83.00
                {' '}
                <br />
                One Way
              </span>
              <span className="text-sm w-1/2">
                $ 160.00
                {' '}
                <br />
                Round trip
              </span>
            </div>
          </td>
          <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static flex flex-col ">
            <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
              {' '}
              Taxi Shuttle
            </span>
            <div className=" flex flex-row mt-5 ">
              <span className="text-sm w-1/2">
                $ 83.00
                {' '}
                <br />
                One Way
              </span>
              <span className="text-sm w-1/2">
                $ 160.00
                {' '}
                <br />
                Round trip
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
