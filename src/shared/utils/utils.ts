import { normalizeProps, useMachine } from "@zag-js/solid";
import { ValueChangeDetails } from "@zag-js/tabs";
import { createMemo, createUniqueId } from "solid-js";
import * as tabs from "@zag-js/tabs";

export const getTabsApi = (
  initialValue: string | null | undefined,
  onValueChange: (details: ValueChangeDetails) => void
) => {
  const [state, send] = useMachine(
    tabs.machine({
      id: createUniqueId(),
      value: initialValue,
      onValueChange(details) {
        onValueChange(details);
      },
    })
  );

  const tabsApi = createMemo(() => tabs.connect(state, send, normalizeProps));

  return tabsApi;
};
