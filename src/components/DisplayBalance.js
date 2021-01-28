import React from 'react'
import { Statistic } from 'semantic-ui-react';
function DisplayBalance({ title, value, color, size }) {
    return (
        <div>
            <Statistic size={size} color={color}>
                <Statistic.Label stlye={{ textAlign: "left" }}>
                    {title}
                </Statistic.Label>
                <Statistic.Value>{value}</Statistic.Value>
            </Statistic>
        </div>
    )
}

export default DisplayBalance
