const CornerDots = ({ color }) => (
  <svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
    <circle cx="3" cy="3" r="3" fill={color || "#000000"} />
    <circle cx="9" cy="3" r="3" fill={color || "#000000"} />
    <circle cx="15" cy="3" r="3" fill={color || "#000000"} />
    <circle cx="21" cy="3" r="3" fill={color || "#000000"} />
    <circle cx="27" cy="3" r="3" fill={color || "#000000"} />
    <circle cx="33" cy="3" r="3" fill={color || "#000000"} />
    <circle cx="39" cy="3" r="3" fill={color || "#000000"} />

    <circle cx="39" cy="9" r="3" fill={color || "#000000"} />
    <circle cx="39" cy="15" r="3" fill={color || "#000000"} />
    <circle cx="39" cy="21" r="3" fill={color || "#000000"} />
    <circle cx="39" cy="27" r="3" fill={color || "#000000"} />
    <circle cx="39" cy="33" r="3" fill={color || "#000000"} />
    <circle cx="39" cy="39" r="3" fill={color || "#000000"} />
    
    <circle cx="33" cy="39" r="3" fill={color || "#000000"} />
    <circle cx="27" cy="39" r="3" fill={color || "#000000"} />
    <circle cx="21" cy="39" r="3" fill={color || "#000000"} />
    <circle cx="15" cy="39" r="3" fill={color || "#000000"} />
    <circle cx="9" cy="39" r="3" fill={color || "#000000"} />
    <circle cx="3" cy="39" r="3" fill={color || "#000000"} />
    
    <circle cx="3" cy="33" r="3" fill={color || "#000000"} />
    <circle cx="3" cy="27" r="3" fill={color || "#000000"} />
    <circle cx="3" cy="21" r="3" fill={color || "#000000"} />
    <circle cx="3" cy="15" r="3" fill={color || "#000000"} />
    <circle cx="3" cy="9" r="3" fill={color || "#000000"} />
  </svg>
);

export default CornerDots;

