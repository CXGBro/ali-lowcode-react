import React from 'react'
import styles from './index.module.scss'
import {Button} from 'antd'
import {useDispatch,useSelector} from 'react-redux'
import {clearDomList,deleteDom} from '../../../slice'

export default function App() {
    const dispatch = useDispatch()
    const domId = useSelector((state) => state.home.domId)


    return (
        <div className={styles.display}>
            <label>操作：</label>
            <Button type='danger' shape='round' onClick={() => dispatch(clearDomList())}>清空</Button>
            <Button type='primary' shape='round' onClick={() => {
                if(!domId) alert('还未选中组件！')
                dispatch(deleteDom(domId))
            }}>删除</Button>
        </div>
    )
}