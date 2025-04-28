const DotExtraRounded = ({ color }) => (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 3.5C7 1.567 8.567 0 10.5 0H14V7H10.5C8.567 7 7 5.433 7 3.5V3.5Z" fill={color || "#000000"}/>
    <path d="M28 10.5C28 8.567 29.567 7 31.5 7H35V14H31.5C29.567 14 28 12.433 28 10.5V10.5Z" fill={color || "#000000"}/>
    <path d="M17.5 14C15.567 14 14 12.433 14 10.5V7H21V10.5C21 12.433 19.433 14 17.5 14V14Z" fill={color || "#000000"}/>
    <path d="M3.5 21C1.567 21 0 19.433 0 17.5V14H7V17.5C7 19.433 5.433 21 3.5 21V21Z" fill={color || "#000000"}/>
    <path d="M38.5 35C36.567 35 35 33.433 35 31.5V28H42V31.5C42 33.433 40.433 35 38.5 35V35Z" fill={color || "#000000"}/>
    <path d="M38.5 0C40.433 0 42 1.567 42 3.5V7H35V3.5C35 1.567 36.567 0 38.5 0V0Z" fill={color || "#000000"}/>
    <path d="M3.5 7C5.433 7 7 8.567 7 10.5V14H0V10.5C0 8.567 1.567 7 3.5 7V7Z" fill={color || "#000000"}/>
    <path d="M10.5 35C8.567 35 7 33.433 7 31.5V28H14V31.5C14 33.433 12.433 35 10.5 35V35Z" fill={color || "#000000"}/>
    <path d="M10.5 21C12.433 21 14 22.567 14 24.5V28H7V24.5C7 22.567 8.567 21 10.5 21V21Z" fill={color || "#000000"}/>
    <path d="M14 0V0C17.866 0 21 3.13401 21 7V7H14V0Z" fill={color || "#000000"}/>
    <rect x="35" y="7" width="7" height="7" fill={color || "#000000"}/>
    <rect x="35" y="14" width="7" height="7" fill={color || "#000000"}/>
    <rect x="35" y="21" width="7" height="7" fill={color || "#000000"}/>
    <circle cx="24.5" cy="24.5" r="3.5" fill={color || "#000000"}/>
    <circle cx="3.5" cy="38.5" r="3.5" fill={color || "#000000"}/>
    <circle cx="17.5" cy="38.5" r="3.5" fill={color || "#000000"}/>
    <circle cx="31.5" cy="38.5" r="3.5" fill={color || "#000000"}/>
  </svg>
);

export default DotExtraRounded;