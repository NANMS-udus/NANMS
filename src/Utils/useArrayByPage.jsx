import { useEffect, useState } from "react";

export default function useArrayByPage(target, pageLength, startVal) {

  const [result, setResult] = useState(startVal)

  function arrayByPage() {
    const result = target.reduce((acc, itm) => {
      if (!acc.length || acc[acc.length - 1].length >= pageLength) {
        acc.push([])
      }
      

      acc[acc.length - 1].push(itm)

      return acc
    }, [])

    return result
  }

  useEffect(() => {
    function arrange() {
      const result = arrayByPage()

      setResult(result)
    }

    arrange()
  }, [])

  return [result]

}


/* const test = [
  {
    name: 'test1',
    type: 'type1',
    use: 'use1'
  },
  {
    name: 'test3',
    type: 'type1',
    use: 'use1'
  },
  {
    name: 'test3',
    type: 'type1',
    use: 'use1'
  },
  {
    name: 'test2',
    type: 'type3',
    use: 'use2'
  },
  {
    name: 'test1',
    type: 'type2',
    use: 'use2'
  },
  {
    name: 'test1',
    type: 'type3',
    use: 'use5'
  },
] */
