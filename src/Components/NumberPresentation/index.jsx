import './NumberPresentation.scss'

const NumberPresentation = ({first, second}) => {

    return(
        <div className="number-presentation">
            <div className='left'>
                <div className='top-left'></div>
                <div className='bottom-left'>{first}</div>
            </div>
            <div className="right">
                <div className='top-right'>{second}</div>
                <div className='bottom-right'> 
                    {new Array(first).fill(0).map((num, index) => (
                        <div key={index + 100} className='number-boxes-row-container'>
                            {new Array(second).fill(0).map((num, index) => (
                                <div key={index} className="number-box"></div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NumberPresentation;
