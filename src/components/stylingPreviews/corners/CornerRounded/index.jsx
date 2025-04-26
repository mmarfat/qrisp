const CornerRounded = ({ color }) => (
  <svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="36" height="36" rx="2" strokeWidth="6" fill="none" stroke={color || "#000000"} />
  </svg>
);

export default CornerRounded;

