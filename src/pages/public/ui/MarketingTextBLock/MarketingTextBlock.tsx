import s from "./MarketingTextBlock.module.scss";

interface MarketingTextBlockProps {
  title: string;
  description: string;
}

export const MarketingTextBlock = ({
  title,
  description,
}: MarketingTextBlockProps) => (
  <div>
    <h2 class={s.title}>{title}</h2>
    <p class={s.description}>{description}</p>
  </div>
);
