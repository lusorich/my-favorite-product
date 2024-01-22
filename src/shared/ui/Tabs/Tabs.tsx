import { getTabsApi } from "shared/utils/utils";
import { For, JSX } from "solid-js";
import s from "./Tabs.module.scss";

interface TabsProps {
  data: { value: string; content: string | JSX.Element; icon: JSX.Element }[];
  defaultTab: string;
}

export const Tabs = ({ data, defaultTab }: TabsProps) => {
  const api = getTabsApi(defaultTab, (details) => console.log(details));

  return (
    <div {...api().rootProps}>
      <div>
        <For each={data}>
          {(item) => (
            <div {...api().getContentProps({ value: item.value })}>
              <p>{item.content}</p>
            </div>
          )}
        </For>
      </div>
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
        <div class={s.line} {...api().indicatorProps} />
      </div>
    </div>
  );
};
