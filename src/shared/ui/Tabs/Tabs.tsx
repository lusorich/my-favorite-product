import { getTabsApi } from 'shared/utils/utils';
import { For, JSX } from 'solid-js';
import s from './Tabs.module.scss';

interface TabsProps {
  data: { value: string; content: string | JSX.Element; icon: JSX.Element }[];
  defaultTab: string;
  classes?: {
    wrapper?: string;
    itemContentWrapper?: string;
    tabsItemsWrapper?: string;
    tabsWrapper?: string;
  };
}

export const Tabs = (props: TabsProps) => {
  const api = getTabsApi(props.defaultTab, (details) => console.log(details));

  return (
    <div class={props?.classes?.wrapper || ''} {...api().rootProps}>
      <div>
        <For each={props.data}>
          {(item) => (
            <div
              class={props?.classes?.itemContentWrapper || ''}
              {...api().getContentProps({ value: item.value })}
            >
              <p>{item.content}</p>
            </div>
          )}
        </For>
      </div>
      <div class={props?.classes?.tabsWrapper || ''} {...api().tablistProps}>
        <div class={props?.classes?.tabsItemsWrapper || ''}>
          <For each={props.data}>
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
        <div class={s.line} {...api().indicatorProps} />
      </div>
    </div>
  );
};
