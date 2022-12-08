import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    let Comp = 'div';
    const classes = cx('item', {
        separate: data.separate,
    });

    if (data.to) Comp = Link;

    return (
        <Comp className={classes} to={data.to} onClick={onClick}>
            <span className={cx('icon')}>{data.icon}</span>
            <span className={cx('title')}>{data.title}</span>
        </Comp>
    );
}

export default MenuItem;
