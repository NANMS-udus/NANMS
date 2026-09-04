import { useEffect, useState } from "react";

export default function useSearchByParams() {

  const [result, setResult] = useState([])

  const [args, setArgs] = useState({})

    function search() {
      const {par, tar} = args 

      console.log(args);

      if (!par || !tar) {
        return
      }

      if (!result.length) {
        setResult(tar)
        console.log(result);
        
      }
      
  
      par.forEach((p) => {
        if (p.name === 'name') {
          console.log(p.name);
          
          const strictSearch = result.filter((obj) => {
            return obj.fullname === p.value
          })
  
          const looseSearch = result.filter((obj) => {
            console.log(obj.fullname.split(' ').includes(p.value), 'here')
  
            return obj.fullname.toLowerCase().split(' ').includes(p.value.toLowerCase())
          })
  
          console.log(strictSearch, looseSearch);
  
          const res = strictSearch.length ?
            strictSearch
            : looseSearch.length
              ? looseSearch
              : result
  
          setResult(res)
        } else if (p.value === 'all' || !p.value) {
          setResult(result)
          console.log(result);
          
        } else {
          setResult((prev) => {
            return prev.filter((obj) => obj[p.name] === p.value)
          })
        }
      })
    }

    useEffect(() => {
      (() => {
        search()
        console.log(result);
        
      })()
    }, [args])

  /* function setArgs(tar, par) {
    setParams(par)
    setTarget(tar)
  } */


  return [result, setArgs]

}


const test = [
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
]
