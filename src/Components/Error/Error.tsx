import type { FC } from "react";
import Card from "../Card/Card";
import CardContent from "../CardContent/CardContent";
import CardHeader from "../CardHeader/CardHeader";
import DataContainer from "../DataContainer/DataContainer";
import Weather from "../Weather/Weather";

const Error: FC = (): JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <Weather src="./images/Turtel.webp" alt="Turtel" />
      </CardHeader>
      <CardContent alignItems="flex-start">
        <DataContainer flexDirection="column">
          <h1>Error</h1>
          <h3>Unable to get a response from the server</h3>
        </DataContainer>
      </CardContent>
    </Card>
  );
};

export default Error;
