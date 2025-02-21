import React, { useState, useRef } from 'react';
import Book from '../../components/Library/Book';

const LibraryRegister = () => {

    return ( //이제 이걸 여기서 수정 가능하게 바꿔야한다
            <div className='w-auto h-auto px-5 bg-gray-200 flex justify-center mt-5'>
                <Book viewMode='card'/>
            </div>    );

}
export default LibraryRegister;