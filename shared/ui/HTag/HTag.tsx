import { HTagProps } from "./HTag.props";

export const HTag = ({ tag, children }: HTagProps): JSX.Element => {
  return <h1>{children}</h1>;
};
