import React, { useState, useRef } from 'react';
import Book from '../../components/Library/Book';

//도서 등록하는 페이지 - 나중에 도서 등록하면 list로 넘어가게 해야하므로 api필요함
const LibraryRegister = () => {

    return ( //Book 컴포넌트를 그대로 가져다쓰는 것보다 그냥 입력 모달창을 하나 만드는게 나을 것 같다
            <div className='w-auto h-auto px-5 bg-gray-200 flex justify-center mt-5'>
                <Book viewMode='card'/>
            </div>    );

}
export default LibraryRegister;