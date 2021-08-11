import SidenavItems from './items';
import css from './style.module.css';
import { useToggle } from '../provider/context';

const style = {
  mobilePosition: {
    right: 'right-0',
  },
  close: `hidden`,
  container: `pb-32 lg:pb-12`,
  open: ` absolute w-8/12 z-40 sm:w-5/12`,
  default: `bg-white h-screen overflow-y-auto top-0 lg:flex lg:relative lg:w-1/4 lg:z-auto`,
};

export default function SideNavigation() {
  const { open, ref }:any = useToggle();
  return (
    <aside
      ref={ref}
      className={`${style.default} ${style.mobilePosition} 
        ${open ? style.open : style.close} ${css.scrollbar}`}
    >
      <div className={style.container}>
        <SidenavItems />
      </div>
    </aside>
  );
}
