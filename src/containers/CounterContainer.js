import React from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {decrease, increase, setDiff} from "../modules/counter";
import Counter from "../components/Counter";

const CounterContainer = () => {
    // 컨테이너 컴포넌트 : 리덕스 스토어의 상태를 조회하거나, 액션을 디스패지할 수 있는 컴포넌트
    // HTML 태그들을 사용하지 않고 다른 프레젠테이셔널 컴포넌튿들을 불러와서 사용합니다.
    const { number, diff } = useSelector(
        state => ({
            number: state.counter.number,
            diff: state.counter.diff
        }),
        shallowEqual // equalityFn?: (left: any, right: any) => boolean 객체의 가장 겉에 있는 값만 비교
    )

    // useDispatch는 리덕스 스토어의 dispatch 를 함수에서 사용할 수 있게 해주는 Hook 입니다.
    const dispatch = useDispatch();
    // 각 액션들을 디스패치하는 함수들을 만드세요
    const onIncrease = () => dispatch(increase())
    const onDecrease = () => dispatch(decrease())
    const onSetDiff = diff => dispatch(setDiff(diff))


    return (
        <Counter
            // 상태와
            number={number}
            diff={diff}
            // 액션을 디스패치 하는 함수들을 props로 넣어줍니다.
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    )
}

export default CounterContainer;