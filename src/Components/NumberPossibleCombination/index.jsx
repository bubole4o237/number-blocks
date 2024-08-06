import NumberPresentation from "../NumberPresentation";
import './NumberPossibleCombination.scss'

const NumberPossibleCombination = ({number}) => {
    const combination = []

    for (let i = 2; i <= number/2; i++) {
        if (number % i === 0) {
            combination.push({first: i, second: number/i})
        }
    }

    return (
        <>
            {combination.map((el, index) => (
                <NumberPresentation key={index + 1000} first={el.first} second={el.second} />
            ))}
        </>
    )

}

export default NumberPossibleCombination
