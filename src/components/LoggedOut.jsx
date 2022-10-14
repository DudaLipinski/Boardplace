import { Canva, WrapperContent } from "./Canva";

export const LoggedOut = () => {
  return (
    <Canva>
      <WrapperContent>
        <div>You need to login :(</div>
      </WrapperContent>
    </Canva>
  );
};
