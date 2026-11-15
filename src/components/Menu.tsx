import { NavLink } from 'react-router';

const MENU_ITEMS = [
    { path: '/', label: 'Главная', end: true },
    { path: '/drift', label: 'Дрифт-такси', end: false },
    { path: '/timeattack', label: 'Time Attack', end: false },
    { path: '/forza', label: 'Forza Karting', end: false },
];

export default function Menu() {
    return (
        <nav className="menu">
            {MENU_ITEMS.map(({ path, label, end }) => (
                <NavLink
                    key={path}
                    to={path}
                    end={end}
                    className={({ isActive }) =>
                        `menu__item ${isActive ? 'menu__item-active' : ''}`.trim()
                    }
                >
                    {label}
                </NavLink>
            ))}
        </nav>
    );
}
