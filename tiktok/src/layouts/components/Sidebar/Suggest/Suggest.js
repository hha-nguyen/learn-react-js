import classNames from 'classnames/bind';
import styles from './Suggest.module.scss';
import { useState } from 'react';

import AccountItems from '~/components/AccountItems';
const cx = classNames.bind(styles);

function Suggest({ title, data }) {
    const [showAllSuggest, setShowAllSuggest] = useState(false);
    const [currentData, setCurrentData] = useState(data.slice(0, 3));
    const [btnContext, setBtnContext] = useState('See all');

    return ( 
        <div className={cx('wrapper')}>
            <p className={cx('title')}>{title}</p>
                {currentData.map((USER_DATA, id) => {
                    return (
                        <AccountItems
                            userData={USER_DATA}
                            isSuggestItem={true}
                            key={id}
                        ></AccountItems>
                    );
                })}
                
                <button 
                    className={cx('more-btn')}
                    onClick={() => {
                        if (showAllSuggest === false) {
                            setCurrentData([...data]);
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

