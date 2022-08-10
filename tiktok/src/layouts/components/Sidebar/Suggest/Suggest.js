import classNames from 'classnames/bind';
import styles from './Suggest.module.scss';
import { useState } from 'react';

import AccountItems from '~/components/AccountItems';
import { GROUP_OF_USER_DATA } from './userData';

const cx = classNames.bind(styles);

function Suggest({ title, userData }) {
    const [showAllSuggest, setShowAllSuggest] = useState(false);
    const [currentData, setCurrentData] = useState(GROUP_OF_USER_DATA.slice(0, 3));
    const [btnContext, setBtnContext] = useState('See all');

    return ( 
        <div className={cx('wrapper')}>
            <p className={cx('title')}>{title}</p>
                {currentData.map((USER_DATA, id) => {
                    return (
                        <AccountItems
                            data={USER_DATA}
                            isSuggestItem={true}
                            key={id}
                        ></AccountItems>
                    );
                })}
                
                <button 
                    className={cx('more-btn')}
                    onClick={() => {
                        if (showAllSuggest === false) {
                            setCurrentData([...GROUP_OF_USER_DATA]);
                            setBtnContext('See less');
                            setShowAllSuggest(true)
                        } else {
                            setBtnContext('See all');
                            setCurrentData(currentData.slice(0, 3));
                            setShowAllSuggest(false);
                        }
                    }}
                >
                    {btnContext}
                </button>
                
                
        </div>
    );
}

export default Suggest;

