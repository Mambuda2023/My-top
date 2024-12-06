import { Button } from "@/shared/ui/Button/Button";
import { HTag } from "@/shared/ui/HTag/HTag";
import { Paragraph } from "@/shared/ui/Paragraph/Paragraph";
import { Tag } from "@/shared/ui/Tag/Tag";
export default function Home() {
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
    </>
  );
}
