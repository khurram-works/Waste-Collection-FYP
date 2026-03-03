import React from "react";

const MapView = () => {
  return (
    <main className="flex-1 flex flex-col  relative">
     
      <div className="flex-1 min-h-screen relative bg-gray-200 overflow-hidden">
       
        <div
          className="absolute  inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC_oHeWW3JpGG71zYCfShl9nLB9X9oXaiqkkpKdsYT0bOItVMWgQMf3A8a6vaqN0Rn4iZn4ipVywqj6U3PlaExv1bP2EBLNXE_Q1QXFF95WyeIml5fJYx92Vs910f97w4EjEJgC7TgVFtP2UwgDc7eS39_4xaW2ln9qac39S_2dppQhuXYFEZNf4Igv_7wNdB9rqflnXIDT3P9WogVbwWmPfkphMHKjNAWE53_y1rrqiY3Ga4ZaAIKjFKJMyXAKk5DmDnj-r4ON")',
          }}
        >
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1000 600"
          >
            <path
              d="M500 300 Q 550 250, 600 280 T 700 220"
              fill="none"
              stroke="#3b82f6"
              strokeDasharray="8 4"
              strokeWidth="4"
            />

            <circle cx="500" cy="300" fill="#3b82f6" fillOpacity="0.3" r="12" />
            <circle
              cx="500"
              cy="300"
              fill="#3b82f6"
              r="6"
              stroke="white"
              strokeWidth="2"
            />

            {/* Marker 1: PET #1012 - Active Target */}
            <g transform="translate(690, 190)">
              <path
                d="M10 0 C4.477 0 0 4.477 0 10 C0 17.5 10 30 10 30 C10 30 20 17.5 20 10 C20 4.477 15.523 0 10 0 Z"
                fill="#2e8a56"
              />
              <text
                fill="white"
                fontFamily="Material Symbols Outlined"
                fontSize="12"
                textAnchor="middle"
                x="10"
                y="15"
              >
                recycling
              </text>
              <rect
                fill="white"
                height="20"
                rx="4"
                stroke="#2e8a56"
                strokeWidth="1"
                width="50"
                x="-15"
                y="-25"
              />
              <text
                fill="#2e8a56"
                fontSize="10"
                fontWeight="bold"
                textAnchor="middle"
                x="10"
                y="-11"
              >
                PET #1012
              </text>
            </g>

            {/* Marker 2: Cardboard #1010 */}
            <g transform="translate(300, 150)">
              <path
                d="M10 0 C4.477 0 0 4.477 0 10 C0 17.5 10 30 10 30 C10 30 20 17.5 20 10 C20 4.477 15.523 0 10 0 Z"
                fill="#2e8a56"
                fillOpacity="0.6"
              />
              <text
                fill="white"
                fontFamily="Material Symbols Outlined"
                fontSize="12"
                textAnchor="middle"
                x="10"
                y="15"
              >
                package_2
              </text>
            </g>

            {/* Marker 3: General #1011 */}
            <g transform="translate(850, 450)">
              <path
                d="M10 0 C4.477 0 0 4.477 0 10 C0 17.5 10 30 10 30 C10 30 20 17.5 20 10 C20 4.477 15.523 0 10 0 Z"
                fill="#6b7280"
              />
              <text
                fill="white"
                fontFamily="Material Symbols Outlined"
                fontSize="12"
                textAnchor="middle"
                x="10"
                y="15"
              >
                delete
              </text>
            </g>
          </svg>

          {/* Search Bar on Map */}
          <div className="absolute top-20 left-6 w-full max-w-xs">
            <div className="flex w-full items-stretch rounded-xl h-12 bg-white shadow-lg border border-gray-100">
              <div className="text-gray-400 flex items-center justify-center pl-4">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                className="form-input flex w-full border-none bg-transparent focus:ring-0 px-4 text-sm"
                placeholder="Search task location..."
                defaultValue="123 Main Street"
              />
            </div>
          </div>

          {/* Floating Map Controls */}
          <div className="absolute right-6 top-6 flex flex-col gap-3">
            <div className="flex flex-col rounded-xl bg-white shadow-lg border border-gray-100 overflow-hidden">
              <button className="flex size-11 items-center justify-center hover:bg-gray-50 text-gray-700">
                <span className="material-symbols-outlined">add</span>
              </button>
              <div className="h-px bg-gray-100"></div>
              <button className="flex size-11 items-center justify-center hover:bg-gray-50 text-gray-700">
                <span className="material-symbols-outlined">remove</span>
              </button>
            </div>
            <button className="flex size-11 items-center justify-center rounded-xl bg-white shadow-lg border border-gray-100 text-primary">
              <span className="material-symbols-outlined fill-icon">
                my_location
              </span>
            </button>
          </div>
          {/* Bottom Sheet - Navigation Card Overlay */}
          <div className="absolute bottom-6 left-6 right-6 md:left-auto md:w- md:right-6">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 md:p-6">
              {/* Card Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">
                      Active Task
                    </span>
                    <span className="text-gray-400 text-xs font-medium">
                      ETA: 4 mins
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Navigate to: #REQ-1012
                  </h3>
                  <p className="text-primary font-semibold text-sm">
                    PET Bottles (5-10kg)
                  </p>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <span className="material-symbols-outlined text-gray-400">
                    expand_more
                  </span>
                </button>
              </div>
              {/* Card Content */}
              <div className="space-y-4">
                {/* Address Info */}
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-gray-400 mt-0.5">
                    location_on
                  </span>
                  <div>
                    <p className="text-sm font-semibold">
                      123 Main Street, Gulberg
                    </p>
                    <p className="text-xs text-gray-500">Block B, Plot 42-A</p>
                  </div>
                </div>
                {/* Customer Note */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 flex gap-3">
                  <span className="material-symbols-outlined text-yellow-600 text-sm">
                    sticky_note_2
                  </span>
                  <p className="text-sm text-yellow-800">
                    <span className="font-bold">Customer Note:</span> Bags are
                    kept at the back gate. Please ring twice.
                  </p>
                </div>
                {/* Action Buttons */}
                <div className="pt-2 flex flex-col gap-3">
                  <button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    I Have Collected The Waste
                  </button>
                  <p className="text-[11px] text-gray-400 text-center px-4 leading-tight">
                    Clicking will open the verification form to finalize the
                    task and calculate the citizen's earnings.
                  </p>
                  <button className="w-full flex items-center justify-center gap-2 text-primary font-bold text-sm hover:underline py-2">
                    <span className="material-symbols-outlined text-base">
                      directions
                    </span>
                    Open in Google Maps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MapView;
