import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Index = () => {
  const router = useRouter();
  const { token } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    if (token) {
      router.replace("/dashboard");
    } else {
      router.replace("/login");
    }
  }, [token, router]);

  return null;
};

export default Index;
