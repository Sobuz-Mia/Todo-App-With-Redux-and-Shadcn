import { ReactNode } from "react";

type TodoContainerProps = {
  children: ReactNode;
};
const Container = ({ children }: TodoContainerProps) => {
  return <div className="h-screen w-full max-w-7xl mx-auto">{children}</div>;
};

export default Container;
