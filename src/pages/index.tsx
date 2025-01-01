import { useState } from "react";
import { Button, Paragraph, Rating, Tag, HTag } from "../shared/ui/index";
import { withLayout } from "../widgets/Layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../app/interfaces/menu.interface";
import { headers } from "next/headers";
function Home({ menu }: HomeProps) {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <HTag tag="h3">ПРивет мир</HTag>
      <Button arrow="right" appearance="primary">
        Кнопак primary
      </Button>
      <Button arrow="down" appearance="ghost">
        Кнопак ghost
      </Button>
      <Paragraph size="l">Большой</Paragraph>
      <Paragraph size="m">Средний</Paragraph>
      <Paragraph size="s">Маленький</Paragraph>
      <Tag size="m">Ghost</Tag>
      <Tag size="s" color="red">
        Red
      </Tag>
      <Tag size="s" color="green">
        Green
      </Tag>
      <Tag size="s" color="gray">
        gray
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);
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
