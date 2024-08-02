// src/components/MyCounter.js

import { useState } from "react";



function MyCounter() {
    // - 버튼을 누르면 숫자가 1씩 감소
    // + 버튼을 누르면 숫자가 1씩 증가 되도록 programming 해 보세요
    const[isState, setState] = useState(0);

    return (
        <div>
            <button onClick={()=>setState(isState-1)}>-</button>
            <strong>{isState}</strong>
            <button onClick={()=>setState(isState+1)}>+</button>
        </div>
    );
}

export default MyCounter;