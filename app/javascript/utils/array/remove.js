const remove = (array, match) => array.filter(item => !match(item))

export default remove
