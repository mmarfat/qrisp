const CenterDot = ({ color }) => (
  <svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
    <circle cx="21" cy="21" r="18" fill={color || "#000000"} />
  </svg>
);

export default CenterDot;