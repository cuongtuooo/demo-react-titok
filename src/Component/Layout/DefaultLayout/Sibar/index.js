import style from './Sibar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);
function Sibar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>Sibar</h2>
        </aside>
    );
}

export default Sibar;
