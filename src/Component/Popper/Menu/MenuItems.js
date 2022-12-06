import classNames from 'classnames/bind';
import Button from '../../Button';
import style from './Menu.module.scss';

const cx = classNames.bind(style);

function MenuItems({ data, onClick }) {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
