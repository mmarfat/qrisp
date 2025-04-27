const DotDots = ({ color }) => (
  <svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10.5" cy="3.5" r="3.5" fill={color || "#000000"}  />
    <circle cx="17.5" cy="3.5" r="3.5" fill={color || "#000000"}  />
    <circle cx="38.5" cy="3.5" r="3.5" fill={color || "#000000"}  />

    <circle cx="3.5" cy="10.5" r="3.5" fill={color || "#000000"}  />
    <circle cx="17.5" cy="10.5" r="3.5" fill={color || "#000000"}  />
    <circle cx="31.5" cy="10.5" r="3.5" fill={color || "#000000"}  />
    <circle cx="38.5" cy="10.5" r="3.5" fill={color || "#000000"}  />

    <circle cx="3.5" cy="17.5" r="3.5" fill={color || "#000000"}  />
    <circle cx="38.5" cy="17.5" r="3.5" fill={color || "#000000"}  />

    <circle cx="10.5" cy="24.5" r="3.5" fill={color || "#000000"}  />
    <circle cx="24.5" cy="24.5" r="3.5" fill={color || "#000000"}  />
    <circle cx="38.5" cy="24.5" r="3.5" fill={color || "#000000"}  />

    <circle cx="10.5" cy="31.5" r="3.5" fill={color || "#000000"}  />
    <circle cx="38.5" cy="31.5" r="3.5" fill={color || "#000000"}  />

    <circle cx="3.5" cy="38.5" r="3.5" fill={color || "#000000"}  />
    <circle cx="17.5" cy="38.5" r="3.5" fill={color || "#000000"}  />
    <circle cx="31.5" cy="38.5" r="3.5" fill={color || "#000000"}  />
  </svg>
);

export default DotDots;