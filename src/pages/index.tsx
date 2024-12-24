import { useState } from "react";
import { Button, Paragraph, Rating, Tag, HTag } from "../shared/ui/index";
import { withLayout } from "../widgets/Layout/Layout";
function Home() {
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
