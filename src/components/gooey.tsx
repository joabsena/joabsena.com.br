'use client';

import Goo from 'gooey-react';

export function Gooey() {
  return (
    <div className="absolute mx-auto -z-50 blur-2xl md:w-full saturate-150 transform-gpu opacity-60 md:scale-[1.8]">
      <Goo intensity="strong">
        <svg role="img" aria-label="svg as gooey effect" className="!w-96 !h-96 gooey mx-auto">
          <g style={{ animation: 'rotate_back 9s linear infinite' }}>
            <circle
              cx="50%"
              cy="50%"
              r="42"
              fill="#0ea5e9"
              style={{
                animation: 'blob_four 12s ease-in-out -3s infinite alternate'
              }}
            />
            <circle
              cx="50%"
              cy="50%"
              r="36"
              fill="mediumaquamarine"
              style={{
                animation: 'blob_three 9s ease-in-out -3s infinite alternate'
              }}
            />
            <circle
              cx="50%"
              cy="50%"
              r="30"
              fill="#1d4ed8"
              style={{
                animation: 'blob_two 6s ease-in-out -3s infinite alternate'
              }}
            />
            <circle
              cx="50%"
              cy="50%"
              r="24"
              fill="#0ea5e9"
              style={{
                animation: 'blob_one 3s ease-in-out -3s infinite alternate'
              }}
            />
          </g>
        </svg>
      </Goo>
    </div>
  );
}
