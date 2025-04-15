import { useEffect } from "react";

const useThemeFavicon = (resolvedTheme) => {
  useEffect(() => {
    if (!resolvedTheme) return;
    console.log("resolvedTheme", resolvedTheme);
    const favicon = document.getElementById("favicon");
    if (!favicon) return;
    
    favicon.href = resolvedTheme === "dark" ? "/favicon-dark.ico" : "/favicon-light.ico";
  }, [resolvedTheme]);
};

export default useThemeFavicon;
