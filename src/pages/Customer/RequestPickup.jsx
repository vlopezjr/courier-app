import React from 'react';
import PickForm from '../../components/PickForm';

function RequestPickup() {
  return (
    <div className="p-4">
      <div className="text-2xl font-bold mb-2">Request Package Pickup</div>
      <PickForm />
    </div>
  );
}

export default RequestPickup;