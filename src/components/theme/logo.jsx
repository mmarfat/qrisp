const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 275 275"
      className="h-7 w-7 text-black dark:text-white sm:h-9 sm:w-9"
    >
      <rect x="15" y="15" width="80" height="80" stroke="currentColor" fill="none" strokeWidth="30px" strokeLinejoin="bevel" />
      <rect x="180" y="15" width="80" height="80" stroke="currentColor" fill="none" strokeWidth="30px" strokeLinejoin="bevel" />
      <rect x="15" y="180" width="80" height="80" stroke="currentColor" fill="none" strokeWidth="30px" strokeLinejoin="bevel" />
      <rect x="40" y="110" width="30" height="55" stroke="currentColor" fill="currentColor" />
      <rect x="110" y="40" width="55" height="30" stroke="currentColor" fill="currentColor" />
      <rect x="165" y="165" width="55" height="55" stroke="red" fill="red" />
      <rect x="220" y="220" width="55" height="55" stroke="red" fill="red" />
    </svg>
  )
}

export default Logo;