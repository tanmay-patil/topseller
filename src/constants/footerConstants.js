import React from 'react';
export const generateElement = (type, data) => {
    if(type === 'footerLinks') {
        return data.map((item, index) => {
            return <a key={item+index} href="/item">{item.replace(/\n/g, "<br>")}</a>;
        });
    } else if(type === 'footerContent') {
        return data.map((item, index) => {
            console.log(data);
            return <p key={item+index}>{item.replace(/\n/g, "<br>")}</p>
        })
    }
};
export default {
    topFooter: [
        'About Us',
        'Privacy Policy',
        'Terms of Use',
        'Vendor Term & Condition',
        'Company Application'
    ],
    footerContent: [
        'Company Name : Adullam India Pvt. Ltd. | CEO : Inae Lim /nCIN Number : U74999DL2017PTC324868 /n Registered Office: F 107, United Plaza, Karkardooma, New Delhi - 110092 /n Head Office: No 66/1, First Floor of Miraya Rose, Siddapura, Vathur Hobli, Bangalore, Karnataka - 560066 /n Tel : 9980756389 / Email : adullamcom@naver.com',
        'Whole the products TopSeller providing are examined by the staffs entirely. However, some products’ information or intellectual property right problem occurrence might be generated and TopSeller as ecommerce intermediary dose not have any responsibility regarding the problem. TopSeller request users be cautious about selection of products for not being embroiled in a legal or any kind of dispute.'
    ],
    copyRight: 'Copyright ⓒ 2017 Adullam India Private Limited. All right reserved.'
};