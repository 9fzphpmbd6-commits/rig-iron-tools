import { useState, useCallback } from "react";

const YARD_CREW_KEY = "yardCrewMember";

export function useYardCrew() {
  const [isMember, setIsMember] = useState(() => {
    return localStorage.getItem(YARD_CREW_KEY) === "true";
  });
  const [memberInfo, setMemberInfo] = useState<{name: string; email: string} | null>(() => {
    const stored = localStorage.getItem("yardCrewInfo");
    return stored ? JSON.parse(stored) : null;
  });

  const joinYardCrew = useCallback((name: string, email: string) => {
    localStorage.setItem(YARD_CREW_KEY, "true");
    localStorage.setItem("yardCrewInfo", JSON.stringify({ name, email }));
    setIsMember(true);
    setMemberInfo({ name, email });
  }, []);

  const leaveYardCrew = useCallback(() => {
    localStorage.removeItem(YARD_CREW_KEY);
    localStorage.removeItem("yardCrewInfo");
    setIsMember(false);
    setMemberInfo(null);
  }, []);

  const getDiscount = useCallback((price: number) => {
    return isMember ? price * 0.10 : 0;
  }, [isMember]);

  const getDiscountedPrice = useCallback((price: number) => {
    return isMember ? price * 0.90 : price;
  }, [isMember]);

  return { isMember, memberInfo, joinYardCrew, leaveYardCrew, getDiscount, getDiscountedPrice };
}
