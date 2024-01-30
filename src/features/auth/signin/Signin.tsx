import { Icon } from 'shared/ui/Icon/Icon';
import { ICON_NAME } from 'shared/utils/constants';
import s from './Signin.module.scss';
import * as dialog from '@zag-js/dialog';
import { Show, createMemo, createUniqueId } from 'solid-js';
import { normalizeProps, useMachine } from '@zag-js/solid';
import { Portal } from 'solid-js/web';

export const Signin = () => {
  const [state, send] = useMachine(
    dialog.machine({
      id: createUniqueId(),
      onOpenChange: () => console.log('open'),
    }),
  );

  const api = createMemo(() => dialog.connect(state, send, normalizeProps));

  return (
    <>
      <div class={s.signin}>
        <button {...api().triggerProps} class={s.btn}>
          <span class={s.text}>Войти</span>
          <Icon
            name={ICON_NAME.SIGNIN}
            width="4rem"
            height="3.2rem"
            viewBox="0 0 50 44"
          />
        </button>
      </div>
      <Show when={api().isOpen}>
        <Portal>
          <div {...api().backdropProps} />
          <div {...api().positionerProps}>
            <div {...api().contentProps}>
              <h2 {...api().titleProps}>Edit profile</h2>
              <p {...api().descriptionProps}>
                Make changes to your profile here. Click save when you are done.
              </p>
              <button {...api().closeTriggerProps}>X</button>
              <input placeholder="Enter name..." />
              <button>Save Changes</button>
            </div>
          </div>
        </Portal>
      </Show>
    </>
  );
};
