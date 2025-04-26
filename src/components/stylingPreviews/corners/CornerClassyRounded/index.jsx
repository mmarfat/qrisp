const CornerClassyRounded = ({ color }) => (
  <svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
    <path d="
      M9 3
      q-6 0 -6 6
      v30
      h30
      q6 0 6 -6
      v-30
      h-30
      z
    " fill="none" stroke={color || "#000000"} strokeWidth="6"/>
  </svg>
);

export default CornerClassyRounded;