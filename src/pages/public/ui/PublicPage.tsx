import { Header } from 'shared/ui/Header/Header';
import s from './PublicPage.module.scss';
import { Tabs } from '../../../shared/ui/Tabs/Tabs';
import { TABS_CONTENT } from '../utils/constants';

export const PublicPage = () => {
  return (
    <section class={s.content}>
      <Header />

      <div class={s.tabsContainer}>
        <Tabs
          classes={{
            wrapper: s.tabsWrapper,
            itemContentWrapper: s.itemContentWrapper,
          }}
          data={TABS_CONTENT}
          defaultTab={TABS_CONTENT['0'].value}
        />
      </div>
    </section>
  );
};
