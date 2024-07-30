import React from 'react';

const Divisional_Office = () => {
  const offices = [
    { division: 'IKORODU DIVISION', location: 'IKORODU GENERAL HOSPITAL' },
    { division: 'BADAGRY DIVISION', location: 'BADAGRY GENERAL HOSPITAL' },
    { division: 'LAGOS ISLAND DIVISION', location: 'MATERNAL & CHILD CENTER, ETI OSA, OGOMBO ROAD' },
    { division: 'EPE DIVISION', location: 'OPPOSITE LIGALI AYORINDE MAGISTRATE COURT, OKE OYINBO, EPE' },
    { division: 'IKEJA DIVISION', location: 'IKOTUN IGANDO LCDA, IKOTUN' },
  ];

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="flex flex-col items-center justify-center lg:w-3/4 lg:mx-auto">
        <h2 className="mb-4 text-3xl font-extrabold text-center text-orange-900">DIVISIONAL OFFICES & LOCATION</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Division</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Location</th>
              </tr>
            </thead>
            <tbody>
              {offices.map((office, index) => (
                <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{office.division}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{office.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Divisional_Office;
