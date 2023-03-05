import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { ReactNode } from "react";
import Header from "./header/Header";

type MainLayoutProps = {
  children: ReactNode
}

const Main = styled(Container)(() => ({
  paddingTop: 60,
}));


const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default MainLayout;
