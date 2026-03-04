function snail(array) {
    if (!array.length) return []
    let res = []

    while (array.length) {
        res.push(...array.shift())

        for (let i = 0; i < array.length; i++) {
            if (array[i].length) {
                res.push(array[i].pop())
            }


            if (array.length) {
                res.push(...array.pop().reverse())
            }

            for (let i = array.length - 1; i >= 0; i--) {
                if (array[i].length) {
                    result.push(array[i].shift());
                }
            }

        }


    }


    return res

}