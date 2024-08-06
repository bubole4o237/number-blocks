import './NumberBlocks.scss'

const NumberBlocks = ({tens, ones}) => {

    return(
            <div className='numbers-container'>
                {tens ? <div className='tens-container'>
                    {new Array(tens).fill(0).map((el, index) => 
                        <div key={index} className='index-tens-container'>
                            <div className='index-tens'>{index + 1}</div>
                            <div className='one-tens'>
                                <div className='one-square'>{(index * 10) + 1}</div>
                                <div className='one-square'>{(index * 10) + 2}</div>
                                <div className='one-square'>{(index * 10) + 3}</div>
                                <div className='one-square'>{(index * 10) + 4}</div>
                                <div className='one-square'>{(index * 10) + 5}</div>
                                <div className='one-square'>{(index * 10) + 6}</div>
                                <div className='one-square'>{(index * 10) + 7}</div>
                                <div className='one-square'>{(index * 10) + 8}</div>
                                <div className='one-square'>{(index * 10) + 9}</div>
                                <div className='one-square'>{(index * 10) + 10}</div>
                            </div>
                        </div>
                    )}
                </div>
                : null }
                {ones ? <div className='ones-container'>
                    {new Array(ones).fill(0).map((el, index) => 
                        <div key={index} className='one-square'>{(tens * 10) + index + 1}</div>
                    )}
                </div>
                : null}
            </div>
    )
}

export default NumberBlocks;
