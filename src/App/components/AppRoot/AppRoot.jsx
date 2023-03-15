import { Outlet } from "react-router-dom";

import { AppLayout } from "../AppLayout/AppLayout";
import { SearchHeader } from "../Header/SearchHeader";

const AppRoot = () => {
  return (
    <AppLayout slotHeader={<SearchHeader />}>
      <Outlet />
    </AppLayout>
  );
};

export default AppRoot;
