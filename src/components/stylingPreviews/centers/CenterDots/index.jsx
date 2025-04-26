const CenterDots = ({ color }) => (
  <svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6" r="6" fill={color || "#000000"} />
    <circle cx="18" cy="6" r="6" fill={color || "#000000"} />
    <circle cx="30" cy="6" r="6" fill={color || "#000000"} />

    <circle cx="30" cy="18" r="6" fill={color || "#000000"} />
    <circle cx="30" cy="30" r="6" fill={color || "#000000"} />
    
    <circle cx="18" cy="30" r="6" fill={color || "#000000"} />
    <circle cx="6" cy="30" r="6" fill={color || "#000000"} />
    
    <circle cx="6" cy="18" r="6" fill={color || "#000000"} />

    <circle cx="18" cy="18" r="6" fill={color || "#000000"} />
    
  </svg>
);

export default CenterDots;