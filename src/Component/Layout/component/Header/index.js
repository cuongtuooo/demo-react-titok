import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUpload,
    faCloudUpload,
    faMessage,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import Button from '../../../Button';
import AcountItem from '../../../AcountItem';
import style from './Header.module.scss';
import image from '../../../../assets/image';
import { Wrapper as PopperWrapper } from '../../../Popper';
import Menu from '../../../Popper/Menu';
const cx = classNames.bind(style);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'english',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'feedback end help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'keyboard',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    // handle logic
    const handleMenuChange = (MenuItems) => {
        console.log(MenuItems);
    };

    const currentUser = true;
    return (
        <header className={cx('wraper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="ticktok" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Acounts</h4>
                                <AcountItem />
                                <AcountItem />
                                <AcountItem />
                                <AcountItem />
                                <AcountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="tim kiem tai khoan va video" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faCloudUpload} />
                            </button>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}

                    <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                className={cx('user-avatar')}
                                src="data:image/jpeg;base64,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"
                                alt="nguyen manh cuong"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
