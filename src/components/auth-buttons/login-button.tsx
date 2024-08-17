import { Fragment } from "react";
import { Button } from "../ui/button";
import { signIn } from "@/auth";

function LoginButton() {
  return (
    <Fragment>
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <Button size="lg">Github Login</Button>
      </form>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <Button size="lg">Google Login</Button>
      </form>
    </Fragment>
  );
}

export default LoginButton;
