import { menuItems } from '@/data/menu-items';
import Link from 'next/link';
import Icon from './Icon';

const Menu = () => {
  return (
    <div className="grid gap-4 mt-6 text-sm">
      {menuItems.map((item) => {
        const { title, items } = item;

        return (
          <div key={title} className="grid">
            <span className="hidden lg:block mb-2 text-gray-400">{title}</span>
            {items.map((item) => (
              <Link
                href={item.href}
                key={item.label}
                className="flex items-center justify-center lg:justify-start gap-4 py-2 text-gray-500">
                <Icon name={item.icon} size={20} />
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
