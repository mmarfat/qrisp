const DotClassyRounded = ({ color }) => (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 0V7H7V7C7 3.13401 10.134 0 14 0V0Z" fill={color || "#000000"}/>
    <path d="M28 14C28 10.134 31.134 7 35 7V7V14H28V14Z" fill={color || "#000000"}/>
    <path d="M21 7C21 10.866 17.866 14 14 14V14V7H21V7Z" fill={color || "#000000"}/>
    <path d="M0 21V14H7V14C7 17.866 3.86599 21 0 21V21Z" fill={color || "#000000"}/>
    <path d="M35 35V28H42V28C42 31.866 38.866 35 35 35V35Z" fill={color || "#000000"}/>
    <path d="M42 0V7H35V7C35 3.13401 38.134 0 42 0V0Z" fill={color || "#000000"}/>
    <path d="M7 7V14H0V14C0 10.134 3.13401 7 7 7V7Z" fill={color || "#000000"}/>
    <path d="M7 35V28H14V28C14 31.866 10.866 35 7 35V35Z" fill={color || "#000000"}/>
    <path d="M14 21V28H7V28C7 24.134 10.134 21 14 21V21Z" fill={color || "#000000"}/>
    <path d="M14 0V0C17.866 0 21 3.13401 21 7V7H14V0Z" fill={color || "#000000"}/>
    <rect x="35" y="7" width="7" height="7" fill={color || "#000000"}/>
    <rect x="35" y="14" width="7" height="7" fill={color || "#000000"}/>
    <rect x="35" y="21" width="7" height="7" fill={color || "#000000"}/>
    <path d="M0 38.5C0 36.567 1.567 35 3.5 35H7V38.5C7 40.433 5.433 42 3.5 42H0V38.5Z" fill={color || "#000000"}/>
    <path d="M28 38.5C28 36.567 29.567 35 31.5 35H35V38.5C35 40.433 33.433 42 31.5 42H28V38.5Z" fill={color || "#000000"}/>
    <path d="M21 24.5C21 22.567 22.567 21 24.5 21H28V24.5C28 26.433 26.433 28 24.5 28H21V24.5Z" fill={color || "#000000"}/>
    <path d="M14 38.5C14 36.567 15.567 35 17.5 35H21V38.5C21 40.433 19.433 42 17.5 42H14V38.5Z" fill={color || "#000000"}/>
  </svg>
);

export default DotClassyRounded;