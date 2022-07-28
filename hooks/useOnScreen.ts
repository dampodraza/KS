import { useState, useEffect } from "react";
const useOnScreen = (ref) => {
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
        console.log("🚀 ~ file: useOnScreen.ts ~ line 4 ~ useOnScreen ~ isIntersecting", isIntersecting)
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting)
        );
       if (ref.current) {
           observer.observe(ref.current);
        }
    }, [])
    return isIntersecting;
}
export default useOnScreen;