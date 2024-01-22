import { Icon } from "shared/ui/Icon/Icon";
import { ICON_NAME } from "shared/utils/constants";
import { MarketingTextBlock } from "../ui/MarketingTextBLock/MarketingTextBlock";

export const TABS_CONTENT = [
  {
    value: "1",
    icon: (
      <Icon
        name={ICON_NAME.EMOJIES}
        viewBox="0 0 123 109"
        width="12rem"
        height="11rem"
      />
    ),
    content: (
      <MarketingTextBlock
        title="Сравнивай!"
        description="В сервисе вы можете сравнить продукты друг с другом. Выбирайте лучшее!"
      />
    ),
  },
  {
    value: "2",
    content: (
      <MarketingTextBlock
        title="Выбирай!"
        description="Добавляй в избранное любимый товар. Не забывай о нем!"
      />
    ),
    icon: (
      <Icon
        name={ICON_NAME.FAVORITE}
        viewBox="0 0 123 109"
        width="12rem"
        height="11rem"
      />
    ),
  },
  {
    value: "3",
    content: (
      <MarketingTextBlock
        title="Ставь лайк!"
        description="Твой лайк и оценка будут важны другим пользователям."
      />
    ),
    icon: (
      <Icon
        name={ICON_NAME.LIKE}
        viewBox="0 0 121 109"
        width="12rem"
        height="11rem"
      />
    ),
  },
  {
    value: "4",
    content: (
      <MarketingTextBlock
        title="Делись мнением!"
        description="Подробное описание поможет другому человеку. Они будут благодарны!"
      />
    ),
    icon: (
      <Icon
        name={ICON_NAME.CHAT}
        viewBox="0 0 123 109"
        width="12rem"
        height="11rem"
      />
    ),
  },
];
