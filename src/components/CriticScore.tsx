import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const criticScore = ({ score }: Props) => {
  let colour = score > 75 ? "green" : score > 65 ? "yellow" : "";

  return (
    <Badge
      colorScheme={colour}
      fontSize={"14px"}
      paddingX={2}
      borderRadius={"4px"}
    >
      {score}
    </Badge>
  );
};

export default criticScore;
