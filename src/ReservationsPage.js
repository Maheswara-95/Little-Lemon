import React from 'react';
import ReservationsForm from "./ReservationsForm";

const ReservationsPage = ({bookingData, setBookingData, availableTimes, setAvailableTimes, submitForm}) => {
  return(
    <>
    <div className="reservations-form">
     <ReservationsForm
      bookingData={bookingData}
      setBookingData={setBookingData}
      availableTimes={availableTimes}
      setAvailableTimes={setAvailableTimes}
      submitForm={submitForm}
     />
     </div>
    </>
  )
}

export default ReservationsPage
