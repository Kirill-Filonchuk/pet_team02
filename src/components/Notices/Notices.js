import AddNoticeButton from "../AddNoticeButton/AddNoticeButton";
import NoticesCategoriesNav from "../NoticesCategoriesNav/NoticesCategoriesNav";
import NoticesSearch from "../NoticesSearch";
import TempContainer from "../TempContainer/TempContainer";
// import { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  NoticeSection,
  NoticesToolBar,
  NoticesWrapper,
  Title,
} from "./Notices.styled";

const Notices = () => {
  // const [category, setCategory] = useState("sales");

  return (
    <NoticesWrapper>
      <NoticeSection>
        <TempContainer>
          <Title>Find your favorite pet</Title>

          <NoticesSearch />

          <NoticesToolBar>
            <NoticesCategoriesNav />
            <AddNoticeButton />
          </NoticesToolBar>
        </TempContainer>
      </NoticeSection>

      {/* <Outlet context={[category, setCategory]} /> */}
      <Outlet />
    </NoticesWrapper>
  );
};

export default Notices;
