import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, isStreaming = false,  ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    // console.log(isStreaming);

    const handleError = () => {
        setFallback(images.noImage);
    };

    const borderChange = {
        border: "none"
    }

    if (isStreaming) {
        borderChange.border = "2px solid var(--primary)"
    } else {
        borderChange.border = "none"
    }

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
            style={borderChange}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
    isStreaming: PropTypes.bool
}

export default Image;
