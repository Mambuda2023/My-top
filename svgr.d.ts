declare module "*.svg" {
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare module "*.svg?url" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
  export default content;
}
