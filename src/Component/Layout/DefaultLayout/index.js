import Header from '../component/Header';
import Sibar from './Sibar';
import classNames from 'classnames/bind';
import style from './DefaultLayout.module.scss';
const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wraper')}>
            <Header />
            <div className={cx('container')}>
                <Sibar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
