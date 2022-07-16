import type { FC } from "react";
import Card from "../Card/Card";
import CardContent from "../CardContent/CardContent";
import CardHeader from "../CardHeader/CardHeader";
import Img from "../Img/Img";

const Error: FC = (): JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <Img src="./images/Turtel.webp" alt="Turtel" />
      </CardHeader>
      <CardContent alignItems="center">
        <h1>Unable to get a response from the server</h1>
      </CardContent>
    </Card>
  );
};

export default Error;
