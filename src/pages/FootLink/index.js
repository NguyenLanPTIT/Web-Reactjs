import React from 'react';
import { useParams } from 'react-router-dom';
import DieuKhoan from './component/DieuKhoan/dieukhoan';
import HoiDap from './component/HoiDap/hoidap';
import KhieuNai from './component/KhieuNai/khieunai';
import ChinhSach from './component/ChinhSach/chinhsach';
import Contact from './component/Contact/contact';
import VeChungToi from './component/VeChungToi/vechungtoi'

function FootLink() {
    const { info } = useParams();

    const renderComponent = () => {
        switch (info) {
            case 'dieu-khoan-su-dung':
                return <DieuKhoan />;
            case 'hoi-dap':
                return <HoiDap />;
            case 'khieu-nai-ban-quyen':
                return <KhieuNai />;
            case 'lien-he':
                return <Contact />;
            case 've-chung-toi':
                return <VeChungToi />;
            case 'chinh-sach-rieng-tu':
                return <ChinhSach />;
            default:
                return <h1>Trang không tồn tại</h1>;
        }
    };

    return (
        <div>
            {renderComponent()}
        </div>
    );
}

export default FootLink;