import React, { useState } from 'react';
import Book from '../../components/Library/Book';
//대여하고 싶은 책을 눌렀을 때 보이는 페이지 - 실질적인 대여는 이 페이지에서 이루어짐

const LibraryBorrow = () => {
    return (
        
            <div className='flex justify-center gap-3'>
                <div className='realtive top-50 left-1000'>
                    <Book viewMode='list'/>
                    <Book viewMode='list'/>
                </div>
                <Book viewMode='card'/>
            </div>

    );
};

export default LibraryBorrow;  // 기본 내보내기
