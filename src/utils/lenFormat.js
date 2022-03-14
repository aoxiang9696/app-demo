const strLen=(str)=> {
    const resultStr= str.replace(/[\u4E00-\u9FFF]/g,'aa')
    const resultCNArr= str.match(/[\u4E00-\u9FFF]/g)||[]
    const obj={
      characterStrLen:resultStr.length, // 字符总个数
      chineseLen:resultCNArr.length, // 中文总个数
    }
    return obj
  }
/**
 * 根据指定要求长度截取字符串
 * @param {str} str 源字符串
 * @param {number} sumlength 要求字符长度
 * @returns 截取拼接后的字符串
 */
 const longstrFormat = (str = '', sumlength=10) => {
  // 获取字符长度
  let length = strLen(str).characterStrLen
  if (length > sumlength) {
    let len = 0 //累加字符长度值
    let num=0 //满足长度范围内最后一个下标
   let patrn=/[\u4E00-\u9FFF]/g
    for (let i = 0; i < str.length; i++) {
      // 判断是英文还是中文
      let isChinese =patrn.exec(str[i])
      console.log(isChinese,'isChinese')
    
      if (isChinese ) {
        len += 2
      } else {
        len += 1
      }
      if(len>10){
        num=i-1
        break
      }
    }
    let result=str.substring(0,num).concat('...')
    return result
  } else {
    return str
  }
}
export default longstrFormat;
