const CenterDots = ({ color }) => (
  <svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7" cy="7" r="5" fill={color || "#000000"} />
    <circle cx="21" cy="7" r="5" fill={color || "#000000"} />
    <circle cx="35" cy="7" r="5" fill={color || "#000000"} />

    <circle cx="35" cy="21" r="5" fill={color || "#000000"} />
    <circle cx="35" cy="35" r="5" fill={color || "#000000"} />
    
    <circle cx="21" cy="35" r="5" fill={color || "#000000"} />
    <circle cx="7" cy="35" r="5" fill={color || "#000000"} />
    
    <circle cx="7" cy="21" r="5" fill={color || "#000000"} />

    <circle cx="21" cy="21" r="5" fill={color || "#000000"} />
    
  </svg>
);

export default CenterDots;