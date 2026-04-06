import { createContext, useState } from "react";

// Contex
// React에서 전역적으로 상태를 관리할 때 사용하는 기능
// 컴포넌트 간에 데이터를 쉽게 공유할 수 있도록 함
// props drilling(깊은 props 전달 문제)를 해결할 때 유용하다!

const CountContext = createContext()

function CountProvider({ children }) {
    const [count, setCount] = useState(0)

    return (
        <CountContext.Provider value={{ count, setCount }}>
            {children}
        </CountContext.Provider>
    )
}

export { CountContext, CountProvider }