const CornerClassy = ({ color }) => (
  <svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
    <path d="
      M5 3
      q-2 0 -2 2
      v34
      h34
      q2 0 2 -2
      v-34
      h-34
      z
    " fill="none" stroke={color || "#000000"} stroke-width="6"/>
  </svg>
);

export default CornerClassy;