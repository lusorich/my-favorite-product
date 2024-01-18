import { Header } from "shared/ui/Header/Header";
import s from "./PublicPage.module.scss";
import * as tabs from "@zag-js/tabs";
import { For } from "solid-js/web";
import { normalizeProps, useMachine } from "@zag-js/solid";
import { createMemo, createUniqueId } from "solid-js";
import { Icon } from "shared/ui/Icon/Icon";
import { ICON_NAME } from "shared/utils/constants";

const data = [
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
    label: "Item one",
    content: "Item one content",
  },
  {
    value: "2",
    label: "Item two",
    content: "Item two content",
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
    label: "Item three",
    content: "Item three content",
    icon: (
      <Icon
        name={ICON_NAME.LIKE}
        viewBox="0 0 121 109"
        width="12rem"
        height="11rem"
      />
    ),
  },
];

const getTabsApi = (initialValue, onValueChange) => {
  const [state, send] = useMachine(
    tabs.machine({
      id: createUniqueId(),
      value: initialValue,
      onValueChange(details) {
        onValueChange(details);
      },
    })
  );

  const api = createMemo(() => tabs.connect(state, send, normalizeProps));

  return api;
};

export const PublicPage = () => {
  const api = getTabsApi("1", (details) => console.log(details));

  return (
    <section class={s.content}>
      <Header />
      {/* <h2>Сравнивай!</h2>
      <p>
        В сервисе вы можете сравнить продукты друг с другом. Выбирайте лучшее!
      </p> */}
      <div class={s.test} {...api().rootProps}>
        <div {...api().tablistProps}>
          <For each={data}>
            {(item) => (
              <button
                class={s.btn}
                {...api().getTriggerProps({ value: item.value })}
              >
                {item.icon}
              </button>
            )}
          </For>
        </div>
        <For each={data}>
          {(item) => (
            <div {...api().getContentProps({ value: item.value })}>
              <p>{item.content}</p>
            </div>
          )}
        </For>
      </div>
    </section>
  );
};
