import './NumberBlocks.scss'

const NumberBlocks = ({tens, ones}) => {
console.log('.......TENS..........', tens);
console.log('.......ONES..........', ones);

return(
<>
<p>Tens: {tens}</p>
<p>Ones: {ones}</p>
</>
);
}

export default NumberBlocks;
