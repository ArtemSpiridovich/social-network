import React from "react";
import s from './Avatar.module.css';

const Avatar = () => {
    return (
            <div className={s.content}>
                <img src='https://99px.ru/sstorage/53/2013/12/tmb_91205_3821.jpg'/>
                <div className={s.ava}>
                    <img src='https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-app/daveandavalearnandplay-app-product-image.jpg?itok=pb5VuNr5'/>
                    Artem Spirydovich
                </div>
            </div>
    );
}

export default Avatar;