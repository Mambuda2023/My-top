import { MenuItem } from "@/src/app/interfaces/menu.interface";
import { withLayout } from "@/src/widgets/Layout/Layout";
import axios from "axios";
import { GetStaticProps } from "next";

const Search = (): JSX.Element => {
  return <>Search</>;
};

export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
