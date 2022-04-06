const obj = {
    key: ['Jamil', 'Albrey'],
   };
   


const getElementOfArrayProperty=(obj, key, num)=>{

    if(Object.keys(obj).length===0) return undefined
    if(Object.keys(obj).length < num-1 )   return undefined
    if(typeof(obj)!=="object") return undefined
    if(typeof(obj.key) !== "array" ) return undefined
    if(obj.key.length !== "array" ) return undefined
    return obj.key[num]

}


   const output = getElementOfArrayProperty(obj, 'key', 0);

console.log(output)