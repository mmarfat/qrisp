const CornerDot = ({ color }) => (
  <svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
    <circle cx="21" cy="21" r="18" strokeWidth="6" stroke={color || "#000000"} fill="none" />
  </svg>
);

export default CornerDot;