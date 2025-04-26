const CenterClassy = ({ color }) => (
  <svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
    <path d="
      M6 3
      q-3 0 -3 3
      v33
      h33
      q3 0 3 -3
      v-33
      h-33
      z
    " fill={color || "#000000"}/>
  </svg>
);

export default CenterClassy;