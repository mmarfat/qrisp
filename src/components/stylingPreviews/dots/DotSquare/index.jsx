const DotSquare = ({ color }) => (
  <svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="0" width="7" height="7" fill={color || "#000000"}  />
    <rect x="14" y="0" width="7" height="7" fill={color || "#000000"}  />
    <rect x="35" y="0" width="7" height="7" fill={color || "#000000"}  />

    <rect x="0" y="7" width="7" height="7" fill={color || "#000000"}  />
    <rect x="14" y="7" width="7" height="7" fill={color || "#000000"}  />
    <rect x="28" y="7" width="7" height="7" fill={color || "#000000"}  />
    <rect x="35" y="7" width="7" height="7" fill={color || "#000000"}  />

    <rect x="0" y="14" width="7" height="7" fill={color || "#000000"}  />
    <rect x="35" y="14" width="7" height="7" fill={color || "#000000"}  />

    <rect x="7" y="21" width="7" height="7" fill={color || "#000000"}  />
    <rect x="21" y="21" width="7" height="7" fill={color || "#000000"}  />
    <rect x="35" y="21" width="7" height="7" fill={color || "#000000"}  />

    <rect x="7" y="28" width="7" height="7" fill={color || "#000000"}  />
    <rect x="35" y="28" width="7" height="7" fill={color || "#000000"}  />

    <rect x="0" y="35" width="7" height="7" fill={color || "#000000"}  />
    <rect x="14" y="35" width="7" height="7" fill={color || "#000000"}  />
    <rect x="28" y="35" width="7" height="7" fill={color || "#000000"}  />
  </svg>
);

export default DotSquare;