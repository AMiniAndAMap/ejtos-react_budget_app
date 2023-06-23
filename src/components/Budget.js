import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: $
                <input
                        required='required'
                        type='number'
                        value='20000'
                        style={{ marginLeft: '.5rem' , size: 10}}
                        >
                        </input>{/*{budget} */}
                        </span>
        </div>
    );
};
export default Budget;
