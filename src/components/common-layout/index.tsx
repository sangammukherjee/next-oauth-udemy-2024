import { Fragment } from "react";
import Header from "../header";

interface layoutProps {
  children: React.ReactNode;
}

function CommonLayout({ children }: layoutProps) {
  return (
    <Fragment>
      <Header />
      <main className="flex-auto w-full mt-[56px] max-w-4xl px-4 py-4 mx-auto sm:px-6 md:py-6">
        {children}
      </main>
    </Fragment>
  );
}

export default CommonLayout;
