import React from 'react';
import SelectPayment from '../Components/Checkout/SelectPayment';
import { useLocation } from 'react-router-dom';

const HotelPaymentPage = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <div className="lg:grid grid-cols-2 mb-20 pt-36">
      <div className="right bg-grey-900 md:mx-10 max-sm:mx-3 max-sm:p-5 rounded-lg shadow-2xl h-max">
        <div className="p-20">
          <h1 className="text-2xl font-semibold mb-5">Billing Details</h1>
          <table className="min-w-full bg-white">
            <tbody>
              <tr className="bg-gray-200">
                <td className="px-6 py-4 font-semibold">Billing Name</td>
                <td className="px-6 py-4">{formData.firstName} {formData.lastName}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Contact NO.</td>
                <td className="px-6 py-4">{formData.contact}</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="px-6 py-4 font-semibold">Room Choice</td>
                <td className="px-6 py-4">{formData.roomType} ({formData.roomPreference})</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Email Addresss</td>
                <td className="px-6 py-4">{formData.email}</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="px-6 py-4 font-semibold">Members</td>
                <td className="px-6 py-4">{formData.numberOfMembers}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">No. Of Rooms</td>
                <td className="px-6 py-4">{formData.numberOfRooms}</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="px-6 py-4 font-semibold">Check-In</td>
                <td className="px-6 py-4">{formData.checkIn}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Check-Out</td>
                <td className="px-6 py-4">{formData.checkOut}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="overflow-x-auto mx-10">
        <SelectPayment />
      </div>
    </div>
  );
};

export default HotelPaymentPage;
