import React from 'react';
import Spinner from '@images/spinner.gif';
import './Loading.scss'

function Loading(){
  return (
    <div className='Background'>
      <h1 className='LoadingText fs-20 notoBold'>잠시만 기다려 주세요.</h1>
      <img src={Spinner} alt="로딩중" width="5%" />
    </div>
  );
};

export default Loading